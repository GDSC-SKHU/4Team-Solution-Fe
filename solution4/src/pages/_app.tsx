import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Link href="/">
          <HomeLink>
            <Image src="/minTalk.png" alt="logo" width={100} height={30} />
          </HomeLink>
        </Link>
        <Headerbox>
          <Menu>
            <div>
              <NavTxt href="/conSearch">상담 찾기</NavTxt>
            </div>
            <div>
              <NavTxt href="/consultantsMypage">상담실 위치</NavTxt>
            </div>
            <div>
              <NavTxt href="/clientsConsultantPage">상담실 위치</NavTxt>
            </div>
            <div>
              <NavTxt href="/consultantsMypage">상담실 위치</NavTxt>
            </div>
          </Menu>
          
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
const Menu = styled.nav`
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

export const NavTxt = styled(Link)`
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
