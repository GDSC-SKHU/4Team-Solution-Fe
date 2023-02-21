import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect } from "react";



export default function Home(this: any) {
  return (
    <>
      <MainBox>
        <ServicePosterBox>
          <Poster>
            <p >내 스트레스... 정말 괜찮은 걸까?</p>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_YH7zo3.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
          </Poster>
        </ServicePosterBox>
        <div>mimTalk 이란?</div>
        <div>service 후기</div>
      </MainBox>
      <footer>개발자 소개</footer>
    </>
  );
}
const Poster = styled.div`
  width: 60%;
  margin: auto;
  height: 16rem;
  display: flex;
  & > p {
    font-size: 1.6rem;
  }
`;
const ServicePosterBox = styled.div`
  background-color: #ccffb5;
  height: 20rem;
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
