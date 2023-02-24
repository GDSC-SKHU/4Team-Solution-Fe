import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Link href="/">
          <HomeLink>
            <Image src="/임의로고.png" alt="임의로고" width={180} height={40} />
          </HomeLink>
        </Link>
        <Headerbox>
          <Menu>
            <div>
              <Link href="/findpsy">
                <NavTxt>상담사 목록</NavTxt>
              </Link>
            </div>
            <div>
              <Link href="/findpsy">
                <NavTxt>상담실 위치</NavTxt>
              </Link>
            </div>
            <div>
              <Link href="/findpsy">
                <NavTxt>자가 분석 테스트</NavTxt>
              </Link>
            </div>
            <div>
              <Link href="/findpsy">
                <NavTxt>소통의 공간</NavTxt>
              </Link>
            </div>
          </Menu>
          <LoginNav>
            <div>
              <Link href="/login">로그인</Link>
            </div>
            <div>
              <Link href="/signup">회원가입</Link>
            </div>
          </LoginNav>
        </Headerbox>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #d6d6d6;
  
`;
const HomeLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: max-content;
  padding-left: 10rem;
`;
const Headerbox = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 18rem 0rem 3rem;

`;
const Menu = styled.nav`
  & > div {
    list-style: none;
    float: left;
    margin: 1rem;
    height: 5rem;
    display: flex;
    align-items: center;
  }
`;
const LoginNav = styled.nav`
  height: 3rem;
  display: flex;
  & > div {
    padding: 10px;
    &:hover {
      color: white;
      transition: all 0.2s;
    }
  }
`;

const NavTxt = styled.div`
  padding-right: 1rem;
  text-decoration-line: none;
  border-right: 1px solid #d6d6d6;
  &:hover {
    color: white;
    transition: all 0.2s;
  }
`;
