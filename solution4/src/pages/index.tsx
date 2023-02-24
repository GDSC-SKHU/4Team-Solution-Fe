import styled, {keyframes} from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect } from "react";

export default function Home(this: any) {
  return (
    <>
      <MainBox>
        <ServicePosterBox>
          <Poster>
            <PostTextBox>
            <span>from minTalk</span>
            <p>내 스트레스... 정말 괜찮은 걸까?</p>
            </PostTextBox>
            <TestBtn>지금 테스트 하러 가기</TestBtn>
            {/* <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_YH7zo3.json"
              style={{ height: "100px", width: "100px" }}
            ></Player> */}
          </Poster>
        </ServicePosterBox>
        <IntroduceBox>mimTalk 이란?</IntroduceBox>
        <ServiceBox>service 후기</ServiceBox>
      </MainBox>
      <Footer>개발자 소개</Footer>
    </>
  );
}

const slidein = keyframes`
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`
const fade = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`
const PostTextBox = styled.div`
  animation: ${slidein};
  animation-duration: 2.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  &>p{
    font-size: 3rem;
    font-weight: 600;
    text-shadow: #5eff00 1px 0 6px;
  }
  &>span{
    font-size: 1rem;
    font-weight: 600;
    text-shadow: #5eff00 1px 0 6px;
  }

`
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
  &:hover{
    box-shadow: 0px 0px 0px #48c400;
    transition: all 0.2s;
    
  }
`
const Footer = styled.div`
  background-color: blueviolet;
  height: 20rem;
  width: 100%;
`;
const ServiceBox = styled.div`
  background-color: blanchedalmond;
  height: 40rem;
  width: 100%;
`;
const IntroduceBox = styled.div`
  background-color: beige;
  height: 40rem;
  width: 100%;
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
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`;
function props(props: any) {
  throw new Error("Function not implemented.");
}
