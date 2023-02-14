import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  //메뉴 hover 하면 드러나게 하기 위해서
  const [SearchDoc, setSearchDoc] = useState(true);
  const [TestList, setTestList] = useState(true);
  const [Talkground, setTalkground] = useState(true);
  return (
    <>
      <Headerbox>
        <nav>
          <div>
            <NavTxt
              onMouseOver={() => {
                setSearchDoc((prev) => !prev);
                setTalkground(true);
                setTestList(true);
              }}
            >
              상담사 찾기
            </NavTxt>
            {SearchDoc ? (
              <></>
            ) : (
              <HideList1
                onMouseLeave={() => {
                  setSearchDoc((prev) => !prev);
                }}
              >
                <div>
                  <Link href="/findpsy">
                    <StyledLink>상담사 보기</StyledLink>
                  </Link>
                </div>
                <div>
                  <Link href="/HospitalMap">
                    <StyledLink>병원 모아보기</StyledLink>
                  </Link>
                </div>
              </HideList1>
            )}
          </div>
          <div>
            <NavTxt
              onMouseOver={() => {
                setTestList((prev) => !prev);
                setTalkground(true);
                setSearchDoc(true);
              }}
            >
              자가 분석 테스트
            </NavTxt>
            {TestList ? (
              <></>
            ) : (
              <HideList1
                onMouseLeave={() => {
                  setTestList((prev) => !prev);
                }}
              ></HideList1>
            )}
          </div>
          <div>
            <NavTxt
              onMouseOver={() => {
                setTalkground((prev) => !prev);
                setTestList(true);
                setSearchDoc(true);
              }}
            >
              소통의 공간
            </NavTxt>
            {Talkground ? (
              <></>
            ) : (
              <HideList1
                onMouseLeave={() => {
                  setTalkground((prev) => !prev);
                }}
              ></HideList1>
            )}
          </div>
        </nav>
        <nav>
          <LoginBox><Link href="/login">로그인</Link></LoginBox>
          <LoginBox><Link href="/signup">회원가입</Link></LoginBox>
        </nav>
      </Headerbox>
      <Component {...pageProps} />
    </>
  );
}
const Headerbox = styled.div`
  background-color: #ccff99a0;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > nav > div {
    list-style: none;
    float: left;
    margin: 1rem;
    font-size: 1.2rem;
    border-radius: 15px;
    &:hover {
      background-color: #91d196;
    }
  }
`;
const HideList1 = styled.div`
  background-color: #91d196;
  position: fixed;
  top: 4rem;
  text-decoration: none;
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > div {
    padding: 5px;
    border-radius: 15px;
    &:hover {
      background-color: white;
      text-decoration: none;
      transition: all 0.2s;
    }
  }
`;
const NavTxt = styled.div`
  height: 2rem;
  padding: 0.6rem;
  text-decoration-line: none;
  &:hover {
    color: white;
    transition: all 0.2s;
  }
`;
const StyledLink = styled.a`
  text-decoration-line: none;
`;

const LoginBox = styled.div`
  padding: 10px;
  &:hover{
    color: white;
    transition: all 0.2s;
  }
`