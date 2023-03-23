import Image from "next/image";
import styled from "styled-components";
import React, { useContext, useEffect, useState, useRef } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { VscArrowUp } from "react-icons/vsc";
import Googlemaps from "@/components/Googlemaps";
import { Player } from "@lottiefiles/react-lottie-player";
import { num } from "@/components/Consultant";
import RateModal from "@/components/RateModal";
import { RoleContext } from "@/components/LoginContext";

export default function ClientsConsultantPage({}) {
  const homeRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const Arraystar = [1, 2, 3, 4, 5];
  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onTopClick = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onMapClick = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onReviewClick = () => {
    reviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [consultant, setConsultant] = useState<any>({});
  const [consultantReivews, setConsultantReivews] = useState([]);
  const [career, setCareer] = useState([]);
  const [fields, setFields] = useState([]);
  const [location, setLocation] = useState("");
  const [allRate, setAllRate] = useState<number>(0);
  const [reivewModal, setReviewModal] = useState(false);

  const handleCloseModal = () => {
    setReviewModal(false);
  };
  // 모달을 닫을 때 수행할 로직
  const handleOpenModal = () => {
    {
      role === "CLIENT"
        ? setReviewModal((prev) => !prev)
        : alert("내담자만 리뷰 등록이 가능합니다.");
    }
  };
  //모달 열 때 수행할 로직
  const { role, setRole } = useContext(RoleContext);
  //내담자가 아니면 modal을 열 수 없게 적용

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
  console.log(typeof allRate);
  console.log(allRate);
  return (
    <>
      <FindpsyPage ref={topRef}>
        <>
          <ProfileBox>
            <ProfileImg>
              <Image
                className={consultant?.name}
                src={consultant?.profileImageUrl}
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </ProfileImg>
            <ProfileTextBox>
              <ConsultantName>{consultant?.name} 상담사</ConsultantName>
              <StarBox>
                {allRate !== 0 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        margin: "0px 10px",
                        color: "#ffa352",
                        height: "2rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <RatingContainer>
                        <FaStar size={25} />
                      </RatingContainer>
                    </div>
                    {allRate}점
                  </div>
                ) : (
                  <p style={{ color: "#cccc" }}>
                    아직 평균점수가 존재하지 않습니다.
                  </p>
                )}
              </StarBox>
              <ReviewBox>
                <span>
                  <span>Recent</span> 후기
                </span>
                {consultantReivews?.length > 0 ? (
                  <div>{consultantReivews[0]["content"]}</div>
                ) : (
                  <div style={{ color: "#cccc" }}>
                    아직 후기가 존재하지 않습니다.
                  </div>
                )}
                <div></div>
              </ReviewBox>
              <IntroBox>
                <p>{consultant?.shortIntroduction}</p>
              </IntroBox>
            </ProfileTextBox>
          </ProfileBox>

          <SubMenuBox>
            <div onClick={onHomeClick}>상담사 소개</div>
            <div onClick={onMapClick}>병원 위치</div>
            <div onClick={onReviewClick}>후기</div>
          </SubMenuBox>
          <Main ref={homeRef}>
            <IntroMain>
              <HeadBox id="a">
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
            </IntroMain>
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
            <HospitalBox ref={mapRef}>
              <CareerBoxHeader>
                <div>
                  <BsFillPinMapFill />
                </div>
                병원 위치
              </CareerBoxHeader>
              <span>{location}</span>
              <HospitalImage>
                <Googlemaps />
              </HospitalImage>
            </HospitalBox>
            <HrLine />
            {consultantReivews?.length !== 0 ? (
              <>
                <ReviewMainBox ref={reviewRef}>
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
                </UserList>
              </>
            ) : (
              <></>
            )}

            <LottieBox
              onClick={() => {
                handleOpenModal();
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
          </Main>
          <UpBtn onClick={onTopClick}>
            <VscArrowUp size={20} />
          </UpBtn>
        </>
      </FindpsyPage>
    </>
  );
}
const IntroMain = styled.div`
  width: 100%;
`;
const RatingContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 13px 0px;
  .inactive {
    color: #cfcfcf;
  }
  .active {
    color: coral;
  }
`;

const UpBtn = styled.button`
  color: #009809;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  box-shadow: 0px 5px 8px #d6d6d6;
  border: none;
  background-color: #e8ffe3;
`;
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
  align-items: flex-start;
  gap: 1rem;

  height: 20rem;
  padding: 3rem;
  background-color: #00dc073d;
  overflow: scroll;
  border-radius: 15px;
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
  margin: 5rem 0px;
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
  & > div {
    color: #229d00;
    margin-right: 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bolder;
`;

const HrLine = styled.div`
  background-color: #b4b4b4;
  height: 1px;
  margin: 4rem 0px;
`;
const HeadSubBox = styled.div`
  margin: auto;
  font-size: 1.2rem;
  width: fit-content;
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

const IntroBox = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1.2rem;
  align-items: center;
  height: 2rem;
  margin-bottom: 1rem;
  & > p {
    color: black;
    font-size: 1.3rem;
    background-color: #0ed20081;
    border-radius: 15px;
    padding: 10px;
  }
  & > div {
    color: #ffa352;
  }
`;
const ReviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin: 1rem 0px;
  height: 5rem;
  & > div {
    height: 2rem;
  }
  & > span {
    height: 2rem;
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
`;
const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35rem;
  font-size: 1.2rem;
  padding: 2rem;
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
const Main = styled.div`
  width: 60%;
`;
