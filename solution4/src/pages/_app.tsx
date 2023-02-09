import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const [NavListState, setNavListState] = useState(true);
  return (
    <>
      <Headerbox>
        <nav>
          <div>
            <p
              onMouseOver={() => {
                setNavListState((prev) => !prev);
              }}
              onMouseLeave={() => {
                setNavListState((prev) => !prev);
              }}
            >
              상담사 찾기
            </p>
            {NavListState ? (
              <></>
            ) : (
              <HideList1>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </HideList1>
            )}
          </div>
          <div>자가 분석 테스트</div>
          <div>소통의 공간</div>
        </nav>
      </Headerbox>
    </>
  );
}
const Headerbox = styled.div`
  background-color: #ccff99a0;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  & > nav > div {
    list-style: none;
    float: left;
    margin: 1rem;
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 20px;
    &:hover {
      background-color: #91d196;
      transition: all 0.5s;
    }
    >p{
      &:hover{
        color: white;
        transition: all 0.5s;

      }
    }
  }
`;
const HideList1 = styled.div`
  background-color: #ccff99a0;
  position: fixed;


`
