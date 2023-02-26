import styled, { keyframes } from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { FiUser } from "react-icons/fi";

// const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
//   const dom = useRef();

//   const handleDirection = (name:any) => {
//     switch (name) {
//       case 'up':
//         return 'translate3d(0, 50%, 0)';
//       case 'down':
//         return 'translate3d(0, -50%, 0)';
//       case 'left':
//         return 'translate3d(50%, 0, 0)';
//       case 'right':
//         return 'translate3d(-50%, 0, 0)';
//       default:
//         return;
//     };
//   };
//   const handleScroll = useCallback(
//     ([entry]:any) => {
//       const { current } = element;
//       if (entry.isIntersecting) {
//         current.style.transitionProperty = 'all';
//         current.style.transitionDuration = `${duration}s`;
//         current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
//         current.style.transitionDelay = `${delay}s`;
//         current.style.opacity = 1;
//         current.style.transform = 'translate3d(0, 0, 0)';
//       };
//     },
//     [delay, duration],
//   );
//   useEffect(() => {
//     let observer:any;
//     const { current } = dom;

//     if (current) {
//       observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
//       observer.observe(current);
//     }

//     return () => observer && observer.disconnect();
//   }, [handleScroll]);

//   return {
//     ref: dom,
//     style: {
//       opacity: 0,
//       transform: handleDirection(direction),
//     },
//   };
// };
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
    return fetch("https://mintalk.duckdns.org/counselors/2", {
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
  }, []);

  console.log(topReviews);

  // console.log('?',topReviews);
  //! 이게 6번이나 찍히는 이유는 랜더링을 할때마다 실행하기 때문인데 이 횟수가 많아질 수록 불리하다.
  // 랜더링 횟수를 줄이는 방법은 상태 변경 등의 사항을 줄이는 것.

  return (
    <>
      <MainBox>
        <ServicePosterBox>
          <Poster>
            <PostTextBox>
              <span>from minTalk</span>
              <p>나의 스트레스... 정말 괜찮은 걸까?</p>
            </PostTextBox>
            <TestBtn>지금 테스트 하러 가기</TestBtn>
          </Poster>
        </ServicePosterBox>
        <IntroduceBox>
          <p>MinTalk의 service를 소개합니다</p>
          <IntrosubBox>
            <div>상담사와의 실시간 채팅을 지원합니다</div>
            <div>심리테스트를 지원합니다.</div>
            <div>이용자들끼리 고민을 나눌 수 있는 소통의 장을 제공합니다.</div>
          </IntrosubBox>
        </IntroduceBox>
        <Hr />
        <ServiceBox>
          <span>MinTalk 이용자 후기</span>
          {topReviews.map((reviewlist) => {
            return (
              <>
                <UserReviewList>
                  <div>
                    <FiUser size={40} />
                  </div>
                  <ListBox>
                    <p>익명</p>
                    <div>{reviewlist["content"]}</div>
                  </ListBox>
                </UserReviewList>
              </>
            );
          })}
        </ServiceBox>
      </MainBox>
      <Footer>
        <p>개발자 소개</p>
        <div>
          <p>BE. 조성우</p>
          <p>BE. 임정연</p>
          <p>FE. 이예슬</p>
          <p>FE. 백세희</p>
        </div>
      </Footer>
    </>
  );
}

const Hr = styled.div`
  width: 60%;
  height: 1px;
  background-color: #dddddd;
`;
const IntrosubBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;
  & > div {
    width: 20rem;
    height: 13rem;
    border-radius: 15px;
    background-color: #4bff0063;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-size: 1rem;
    font-weight: 600;
  }
`;
const TestBtn = styled.button`
  width: 16rem;
  padding: 5px;
  font-size: 1.3rem;
  color: white;
  background-color: #48c400;
  border-radius: 10px;
  outline: none;
  animation: ${fade};
  animation-duration: 3s;
  box-shadow: 0px 0px 7px #48c400;
  &:hover {
    box-shadow: 0px 0px 0px #48c400;
    background-color: #348e00;
    transition: all 0.2s;
  }
`;

const UserReviewList = styled.div`
  display: flex;
  width: 50%;
  margin: 2rem auto;
  align-items: center;
  & > div {
    margin: 3px;
  }
`;

const Footer = styled.div`
  background-color: #444444;
  height: max-content;
  width: 100%;
  color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0px;
  & > p {
    margin: 2rem;
    font-size: 1.2rem;
  }
  &>div{
    display: flex;
    gap: 3rem;
    margin-left: 2rem;
  }
`;
const ServiceBox = styled.div`
  height: max-content;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  & > span {
    font-size: 2rem;
    margin: 3rem;
  }
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const IntroduceBox = styled.div`
  height: 30rem;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 400;
  & > p {
    margin-bottom: 3rem;
  }
`;

const Poster = styled.div`
  width: 60%;
  margin: auto;
  height: 16rem;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ServicePosterBox = styled.div`
  background-image: url("/stressguy.jpeg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  height: 40rem;
  animation: ${fade};
  animation-duration: 2.5s;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
