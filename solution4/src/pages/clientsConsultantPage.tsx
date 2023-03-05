import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { fieldList, careerlist } from "../constants";

const containerStyle = {
  width: "800px",
  height: "500px",
};

const center = {
  lat: 37.501834,
  lng: 127.036068,
};

export default function ClientsConsultantPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDbRsFZxbeWSiSTVJtpbXvC4SgkbDcgR5k",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const [consultant, setConsultant] = useState<any>({});

  //!상담사용 자기소개 조회
  const consultantsPage = () => {
    return fetch(`https://mintalk.duckdns.org/counselors/my-page`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  };
  useEffect(() => {
    const url = "https://mintalk.duckdns.org/sign-in/counselors";
    const data = {
      email: "csrf@gmail.com",
      password: "1234",
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        consultantsPage().then((res) => setConsultant(res.data));
      });
  }, []);

  console.log(consultant?.name);
  return (
    <>
      <FindpsyPage>
        <>
          <ProfileBox>
            <ProfileImg>
              <Image
                className={consultant?.name}
                src="/alreadyImg.jpeg"
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </ProfileImg>
            <ProfileTextBox>
              <ConsultantName>{consultant?.name} 상담사</ConsultantName>
              <StarBox>
                <div>평점</div>
                <Stars>
                  {Array.from({ length: 5 }, (__, i) => (
                    <div key={i}>
                      <FaStar />
                    </div>
                  ))}
                </Stars>
                <div>5점</div>
              </StarBox>
              <ReviewBox>
                <div>
                  <span>Recent</span> 후기
                </div>
                <div>최근 리뷰 널어야 하는 곳</div>
              </ReviewBox>
              <IntroBox>
                <div>
                  <FaQuoteLeft />
                </div>

                <p>{consultant?.shortIntroduction}</p>
                <div>
                  <FaQuoteRight />
                </div>
              </IntroBox>
            </ProfileTextBox>
          </ProfileBox>

          <SubMenuBox>
            <div id="intro">상담사 소개</div>
            <div id="map">병원 위치</div>
            <div id="review">후기</div>
          </SubMenuBox>
          <MainBox>
            <HeadBox>
              <div>
                <div>
                  <FaQuoteLeft />
                </div>
                {consultant?.shortIntroduction}
                <div>
                  <FaQuoteRight />
                </div>
              </div>
            </HeadBox>
            <HeadSubBox>{consultant?.introduction}</HeadSubBox>
            <HrLine />
            <CareerTotalBox>
              <FieldBox>
                <CareerBoxHeader># 전문 분야</CareerBoxHeader>
                <ul>
                  {fieldList.map(({ id, field }) => {
                    return (
                      <>
                        <li key={id}>{field}</li>
                      </>
                    );
                  })}
                </ul>
              </FieldBox>
              <CareerBox>
                <CareerBoxHeader># 학력 및 경력</CareerBoxHeader>
                <ul>
                  {careerlist.map(({ id, careers }) => {
                    return (
                      <>
                        <li key={id}>{careers}</li>
                      </>
                    );
                  })}
                </ul>
              </CareerBox>
            </CareerTotalBox>
            <HrLine />
            <HospitalBox>
              <CareerBoxHeader># 병원 위치</CareerBoxHeader>
              <HospitalImage>
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  ></GoogleMap>
                ) : (
                  <></>
                )}
              </HospitalImage>
            </HospitalBox>
            <HrLine />
            <ReviewMainBox>
              <CareerBoxHeader># 후기</CareerBoxHeader>

              <RateBox>
                <p>전체 평점</p>
                <Stars>
                  {Array.from({ length: 5 }, (__, i) => (
                    <div key={i}>
                      <FaStar />
                    </div>
                  ))}
                </Stars>
                <div>5점</div>
              </RateBox>
            </ReviewMainBox>
            <UserList>
              <UserBox>
                <div>
                  <div>
                    <AiOutlineUser size={25} />
                  </div>
                  <p>익명</p>
                </div>
                <p>너무너무 귀여운 강아지 선생님</p>
              </UserBox>
            </UserList>
          </MainBox>
        </>
      </FindpsyPage>
    </>
  );
}
const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10rem;
  font-size: 1.2rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-right: 3rem;
    & > p {
      font-weight: 500;
    }
    & > div {
      color: green;
      height: 25px;
      border-radius: 10px;
    }
  }
`;
const UserList = styled.div`
  margin: 5rem auto;
`;
const RateBox = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 10px;
`;
const ReviewMainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HospitalBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const HospitalImage = styled.div`
  margin: 4rem;
`;
const CareerTotalBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const FieldBox = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  height: max-content;

  & > ul {
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
const CareerBoxHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
const CareerBox = styled.div`
  height: 18rem;
  display: flex;
  flex-direction: column;
  & > ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
const HrLine = styled.div`
  width: 80%;
  background-color: #b4b4b4;
  height: 1px;
  margin: 5rem auto;
`;
const HeadSubBox = styled.div`
  width: 51%;
  margin: auto;
  font-size: 1.2rem;
`;
const HeadBox = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  margin-top: 5rem;
  height: 5rem;

  & > div {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    /* border-left: 4px solid black; */
    padding: 1rem;
    display: flex;
    align-items: center;
    color: black;
    & > div {
      font-size: 1rem;
    }
  }
`;
const MainBox = styled.div``;
const IntroBox = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1.2rem;
  align-items: center;
  height: 2rem;
  margin-bottom: 1rem;
  & > p {
    color: black;
  }
  & > div {
    color: #ffa352;
  }
`;
const ReviewBox = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin: 1rem 0px;
  height: 5rem;
  & > div {
    height: 2rem;
  }

  & > div > span {
    color: red;
  }
`;
const FindpsyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  height: 40%;
`;
const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  height: 40%;
`;
const ConsultantName = styled.div`
  height: 2rem;
  font-size: larger;
  margin: 1rem 0px;
`;
const Stars = styled.div`
  display: flex;
  color: #ffa352;
`;
const StarBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 2rem;
  margin: 1rem 0px;
`;

const SubMenuBox = styled.div`
  display: flex;
  height: 3rem;
  justify-content: center;
  width: 60%;
  background-color: white;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding: 10px;
  & > div {
    width: max-content;
    display: flex;
    align-items: center;
    margin: 0px 2rem;
    padding: 0px 1rem;
    &:hover {
      transition: all 0.5s;
      font-weight: bolder;
    }
  }
`;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
`;
