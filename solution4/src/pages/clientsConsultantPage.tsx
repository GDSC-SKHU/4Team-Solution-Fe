import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Googlemaps from "@/components/Googlemaps";
import { Player } from "@lottiefiles/react-lottie-player";
import { num } from "@/components/Consultant";
import RateModal from "@/components/RateModal";

export default function ClientsConsultantPage({}) {
  const [consultant, setConsultant] = useState<any>({});
  const [consultantReivews, setConsultantReivews] = useState([]);
  const [career, setCareer] = useState([]);
  const [fields, setFields] = useState([]);
  const [location, setLocation] = useState("");
  const [allRate, setAllRate] = useState<number>(0);
  const [reivewModal, setReviewModal] = useState(false);
  const handleCloseModal = () => {
    // 모달을 닫을 때 수행할 로직
    setReviewModal(false);
  };
  const calculateRate = () => {
    let sum = 0;
    for (let i = 0; i < consultantReivews.length; i++) {
      sum = sum + consultantReivews[i]["rate"];
      setAllRate(Math.round(sum / consultantReivews.length));
    }
  };

  //!상담사용 자기소개 조회
  const consultantsPage = () => {
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
            setConsultantReivews(res?.data?.reviews),
            setCareer(res?.data?.careers),
            setFields(res?.data?.fields),
            setLocation(res?.data?.location),
            calculateRate()
          );
        });
      });
  }, []);

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
                <div
                  style={{
                    width: `130px`,
                    color: "#ffa352",
                    height: "2rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((el) => (
                    <div key={el}>
                      <FaStar />
                    </div>
                  ))}
                </div>
                {/* <span>{consultantReivews[0]["rate"]}점</span> */}
              </StarBox>
              <ReviewBox>
                <span>
                  <span>Recent</span> 후기
                </span>
                {consultantReivews?.length > 0 ? (
                  <div>{consultantReivews[0]["content"]}</div>
                ) : (
                  <div></div>
                )}
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
                <div>
                  {career?.map((careerlist) => {
                    return (
                      <>
                        <div key={consultant?.id}>{careerlist}</div>
                      </>
                    );
                  })}
                </div>
              </FieldBox>
              <FieldBox>
                <CareerBoxHeader># 전문 분야</CareerBoxHeader>
                <div>
                  {fields?.map(({ desc }) => {
                    return (
                      <>
                        <div key={desc}>{desc}</div>
                      </>
                    );
                  })}
                </div>
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
                <p>{consultantReivews?.length}명의 평가</p>
                <div
                  style={{
                    width: `130px`,
                    color: "#ffa352",
                    height: "2rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((el) => (
                    <div key={el}>
                      <FaStar />
                    </div>
                  ))}
                </div>
                <div>{allRate}점</div>
              </RateBox>
            </ReviewMainBox>
            <UserList>
              {consultantReivews?.map((Review) => {
                return (
                  <>
                    <UserBox>
                      <div>
                        <div>
                          <AiOutlineUser size={25} />
                        </div>
                        <p>익명</p>
                      </div>
                      <p>{Review["content"]}명</p>
                    </UserBox>
                  </>
                );
              })}
              {consultantReivews.length === 0 ? (
                <p>아직 후기가 존재하지 않습니다..</p>
              ) : (
                <></>
              )}
            </UserList>

            <LottieBox
              onClick={() => {
                setReviewModal((prev) => !prev);
              }}
            >
              <div>
                <Player
                  autoplay
                  loop
                  speed={0.9}
                  src="https://assets4.lottiefiles.com/packages/lf20_cYWJg2.json"
                  style={{ height: "50px", width: "600px" }}
                />
                <p>후기 남기러 가기</p>
              </div>
            </LottieBox>
            {reivewModal ? <RateModal onClose={handleCloseModal} /> : <></>}
          </MainBox>
        </>
      </FindpsyPage>
    </>
  );
}

const UserBox = styled.div`
  display: flex;
  align-items: center;
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
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 60%;
  height: 20rem;
  padding: 3rem;
  background-color: #ebebeb;
  overflow: scroll;
`;
const RateBox = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 10px;
  margin-top: 3rem;
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
  & > div {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

const LottieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > div {
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    height: fit-content;
    width: fit-content;
    box-shadow: 1px 1px 13px #c9c9c9;
    & > p {
      font-size: 1.3rem;
    }
    &:hover {
      background-color: #d0d0d011;
      box-shadow: 1px 1px 5px #c9c9c9;
    }
  }
  margin: 1rem auto 3rem;
`;
