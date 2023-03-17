import styled, { keyframes } from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { FiUser } from "react-icons/fi";

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

export default function Home() {
  // const animatedItem = useScrollFadeIn();
  const [topReviews, setTopReviews] = useState([]);

  const postReview = () => {
    let num = 1;
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
    postReview().then((res) => setTopReviews(res.reviews.slice(0, 4)));
  });

  // console.log('?',topReviews);
  //! 이게 6번이나 찍히는 이유는 랜더링을 할때마다 실행하기 때문인데 이 횟수가 많아질 수록 불리하다.
  // 랜더링 횟수를 줄이는 방법은 상태 변경 등의 사항을 줄이는 것.
  
  
  return (
    <>
      <MainBox>
        <ServicePosterBox>
          <Poster>
            <div>
              <PostTextBox>
                <span>from minTalk</span>
                <p>당신의 스트레스는 괜찮은 상태인가요..?</p>
                <div>How about measuring your stress?</div>
              </PostTextBox>
              <TestBtn>
                지금 테스트 하러 가기
                <br />
                Psychological test button
              </TestBtn>
            </div>
          </Poster>
        </ServicePosterBox>
        <IntroduceBox>
          <p>Introduce MinTalk</p>
          <IntrosubBox>
            <div>
              상담사와 실시간 상담이 가능합니다
              <br />
              You can consult in real time.
            </div>
            <div>
              심리테스트를 지원합니다.
              <br />
              You can do a psychological test.
            </div>
            <div>
              소통을 위한 서비스가 제공됩니다.
              <br />
              There is a board where you can talk about your inner thoughts.
            </div>
          </IntrosubBox>
        </IntroduceBox>
        <ServiceBox>
          <span>Site Review</span>
          <div>
            {topReviews.map((reviewlist) => {
              return (
                <>
                  <UserReviewList key={reviewlist["rate"]}>
                    <Anony>
                      <FiUser size={35} />
                      <p>익명</p>
                    </Anony>
                    <ListBox>
                      <div>{reviewlist["content"]}</div>
                    </ListBox>
                  </UserReviewList>
                </>
              );
            })}
          </div>
        </ServiceBox>
      </MainBox>
    </>
  );
}

const IntrosubBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;
  & > div {
    width: 18rem;
    height: 8rem;
    border-radius: 15px;
    background-color: #9bd58b;
    border: 0.1px solid gray;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 2rem;
    &:hover {
      font-size: 1.3rem;
      width: 20rem;
      margin-right: 1rem;
      margin-left: 1rem;
      background-color: #dcffda;
      transition: all 0.2s;
    }
  }
`;

const fade = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;
const PostTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  & > p {
    font-size: 3rem;
    font-weight: 600;
  }
  & > span {
    font-size: 1.2rem;
    font-weight: 600;
  }
  & > div {
    font-size: 2rem;
  }
`;
const TestBtn = styled.button`
  width: 27rem;
  height: 5rem;
  padding: 10px;
  font-size: 1.3rem;
  background-color: #48c400;
  box-shadow: 0px 10px 0px 0px #3ca002;
  color: white;
  border-radius: 15px;
  outline: none;
  border: none;
  animation: ${fade};
  animation-duration: 3s;
  &:hover {
    margin-top: 10px;
    box-shadow: none;
  }
`;

const ServiceBox = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
  background-color: #e4ffd2;
  & > span {
    font-size: 2rem;
    font-family: "Courier New", Courier, monospace;
    margin: 3rem;
  }
  & > div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const UserReviewList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 0.1px solid gray;
  border-radius: 20px;
  width: 16rem;
  height: 14rem;
  background-color: #e8ffe2;
  margin: 1rem;
  &:hover {
    width: 17rem;
    height: 15rem;
    margin: 0.5rem;
    background-color: #2ecf347a;
    transition: all 1s;
    & > span {
      background-color: #e8ffe2;
      transition: all 1s;
    }
  }
`;
const Anony = styled.div`
  margin-top: 2rem;
  display: flex;
  font-size: 1.4rem;
`;
const ListBox = styled.span`
  display: flex;
  margin: 2rem 1rem;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #2ecf347a;
  border-radius: 10px;
  & > div {
    font-size: 1.2rem;
  }
`;

const IntroduceBox = styled.div`
  height: 30rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 400;
  & > p {
    margin-bottom: 3rem;
    height: 1rem;
    font-family: "Courier New", Courier, monospace;
  }
`;

const Poster = styled.div`
  width: 100%;
  margin: auto;
  height: 45rem;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url("/stressguy.jpeg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  &>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
`;
const ServicePosterBox = styled.div`
  height: 45rem;
  animation: ${fade};
  animation-duration: 2.5s;
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
`;
const MainBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
