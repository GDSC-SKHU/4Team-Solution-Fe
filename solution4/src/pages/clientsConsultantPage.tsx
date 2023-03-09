import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Googlemaps from "@/components/Googlemaps";

export default function ClientsConsultantPage({}) {
  const [consultant, setConsultant] = useState<any>({});
  const [consultantReivews, setConsultantReivews] = useState([]);
  const [career, setCareer] = useState([]);
  const [fields, setFields] = useState([]);
  const [location, setLocation] = useState("");

  //!상담사용 자기소개 조회
  const consultantsPage = () => {
    let num = 5;

    return fetch(`https://mintalk.duckdns.org/counselors/${num}`, {
      method: "GET",
      mode: "cors",
      cache: "default",
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
        consultantsPage().then((res) => {
          return (
            setConsultant(res.data),
            setConsultantReivews(res.data.reviews),
            setCareer(res.data.careers),
            setFields(res.data.fields),
            setLocation(res.data.location)
          );
        });
      });
  }, []);

  console.log(consultantReivews.length);
  return (
    <>
      <FindpsyPage>
        <>
          <ProfileBox>
            <ProfileImg>
              <Image
                className={consultant?.name}
                src={consultant?.profileImageUrl}
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
                {/* <span>{consultantReivews[0]["rate"]}점</span> */}
              </StarBox>
              <ReviewBox>
                <span>
                  <span>Recent</span> 후기
                </span>
                {(consultantReivews.length>0)?<div>{consultantReivews[0]["content"]}</div>:<div></div>}
                <div></div>
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
                <CareerBoxHeader># 학력 및 경력</CareerBoxHeader>
                {career.map((careerlist) => {
                  return (
                    <>
                      <div key={consultant?.id}>{careerlist}</div>
                    </>
                  );
                })}
              </FieldBox>
              <FieldBox>
                <CareerBoxHeader># 전문 분야</CareerBoxHeader>
                {fields.map(({ desc }) => {
                  return (
                    <>
                      <div key={desc}>{desc}</div>
                    </>
                  );
                })}
              </FieldBox>
            </CareerTotalBox>
            <HrLine />
            <HospitalBox>
              <CareerBoxHeader># 병원 위치</CareerBoxHeader>
              <span>{location}</span>
              <HospitalImage>
                <Googlemaps />
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
  & > span {
    margin-top: 3rem;
    font-size: 1.1rem;
  }
`;
const HospitalImage = styled.div`
  margin: 3rem auto;
  width: 100%;
  height: 100%;
`;
const CareerTotalBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const FieldBox = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  justify-content: flex-start;

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
const MainBox = styled.div`
  width: 60%;
`;
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
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 1rem 0px;
  height: 5rem;
  & > div {
    height: 2rem;
  }
  & > span {
    height: 2rem;
    background-color: #ff5151;
  }

  & > div > span {
    color: #ff5151;
    font-weight: 500;
  }
`;
const FindpsyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 40%;
`;
const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  margin-left: 2rem;
  font-size: 1.2rem;
  height: 40%;
  background-color: antiquewhite;
  padding: 2rem;
  width: 50%;
  border-radius: 15px;
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
  margin-right: 2rem;
`;
