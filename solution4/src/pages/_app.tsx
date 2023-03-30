import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Login from "../components/Login";
import Signup from "../components/Signup";
import React from "react";
import Logout from "@/components/Logout";
import Mypage from "@/components/Mypage";
import Cookies from "js-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const Isrole = Cookies.get("role");
  const IsloggedIn = Cookies.get("loggedIn");

  return (
    <>
      <Head>
        <HomeLink>
          <Link href="/">
            <Image src="/minTalk.png" alt="logo" width={100} height={30} />
          </Link>
        </HomeLink>
        <Headerbox>
          <Menu>
            <div>
              <NavTxt href="/conSearch">상담사 목록</NavTxt>
            </div>
            <div>
              <NavTxt href="/consultantsMypage">자가테스트</NavTxt>
            </div>
            <div>
              <NavTxt href="/clientsConsultantPage">소통의 공간</NavTxt>
            </div>
          </Menu>
          <LoginNav>
            {IsloggedIn ? (
              <>
                <Logout />
                <Mypage />
              </>
            ) : (
              <>
                <Login />
                <Signup />
              </>
            )}
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
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  font-size: 1.2rem;
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
const Menu = styled.div`
  & > div {
    list-style: none;
    float: left;
    margin: 1rem;
    height: 2rem;
    display: flex;
    align-items: center;
    border-right: 1px solid #d6d6d6;
  }
`;

const NavTxt = styled(Link)`
  padding: 5px;
  margin: 10px;
  text-decoration-line: none;
  color: black;
  &:hover {
    border-bottom: 3px solid green;
    color: #0b1d00d0;
    transition: all 0.2s;
  }
`;

const LoginNav = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
`;
