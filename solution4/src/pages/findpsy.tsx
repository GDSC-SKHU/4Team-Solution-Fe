import Image from "next/image";
import styled from "styled-components";
import styles from "@/styles/Find.module.css";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { instance } from "../libs/api";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { consultantlist, fieldList, careerlist } from "../constants";

// const a = 1;
// "222" + a + "222"
// `222${a}222`

export default function Findpsy() {
  const [consultant, setConsultant] = useState([]);
  const postReview = () => {
    let num = 2;
    return fetch(`https://mintalk.duckdns.org/counselors/${num}`, {
      method: "GET",
      mode: "cors",
      cache: "default",
    })
      .then((res) => res.json())
      .then((res) => {
        return res.data;
      });
  };
  useEffect(() => {
    postReview().then((res) => setConsultant(res));
    //id 을 num으로 받는다. 위에 postReview 선언한 부분에서 num을 받아오는데 그것은 conSearch에서 상담사 box를 클릭했을때 num의 값을 상담사 id로 보내줘야함.
  }, []);

  console.log(consultant);
  return (
    <>
      <FindpsyPage>
        {consultantlist.map(
          ({
            id,
            name,
            recentReview,
            review,
            score,
            intro,
            imagesrc,
            introLong,
          }) => {
            return (
              <>
                <ProfileBox key={id}>
                  <ProfileImg>
                    <Image
                      className={styles.profile}
                      src={imagesrc}
                      alt="Picture of the author"
                      width={200}
                      height={200}
                    />{" "}
                  </ProfileImg>
                  <ProfileTextBox>
                    <ConsultantName>{name} 상담사</ConsultantName>
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
                      <div>{recentReview}</div>
                    </ReviewBox>
                    <IntroBox>
                      <div>
                        <FaQuoteLeft />
                      </div>

                      <p>{intro}</p>
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
                      {intro}
                      <div>
                        <FaQuoteRight />
                      </div>
                    </div>
                  </HeadBox>
                  <HeadSubBox>{introLong}</HeadSubBox>
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
                        {" "}
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
                      <Image
                        src="/map.png"
                        alt="hospitalmap"
                        width={860}
                        height={500}
                      />
                    </HospitalImage>
                  </HospitalBox>
                  <HrLine />
                  <ReviewMainBox>
                    <CareerBoxHeader># 후기</CareerBoxHeader>

                    <RateBox>
                      <p>평점</p>
                      <Stars>
                        {Array.from({ length: 5 }, (__, i) => (
                          <div key={i}>
                            <FaStar />
                          </div>
                        ))}
                      </Stars>
                      <div>{score}점</div>
                    </RateBox>
                  </ReviewMainBox>
                  <UserList>
                    <UserBox>
                      <AiOutlineUser /> <p>익명</p>
                    </UserBox>
                  </UserList>
                </MainBox>
              </>
            );
          }
        )}
      </FindpsyPage>
    </>
  );
}
const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10rem;
  font-size: 1.2rem;
`;
const UserList = styled.div``;
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

const ProfileImg = styled.div`
  width: 200px;
  height: 200px;
  padding: 5rem;
  border-radius: 50%;
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
