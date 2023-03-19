import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useContext } from 'react';
import LoginContext from './LoginContext';

export default function Login() {
  const { setIsLogin } = useContext(LoginContext);
  const router = useRouter();

  const handleLogout = () => {
    setIsLogin(false);
  }
  const logout = async () => {
    fetch("https://mintalk.duckdns.org/sign-out", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        handleLogout();
        router.push("/");
        console.log(res);
      }).catch((error) => {alert("로그아웃 실패");});
  };
  return (
    <>
      <form>
        <NavTxt href="/">
          <button onClick={logout}>로그아웃</button>
        </NavTxt>
      </form>
    </>
  );
}

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
