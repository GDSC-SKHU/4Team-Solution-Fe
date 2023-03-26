import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch("https://mintalk.duckdns.org/sign-out", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        Cookies.remove("role");
        Cookies.remove("password");
        Cookies.remove("loggedIn");
        router.push("/");
      } else {
        alert("로그아웃 실패");
      }
    } catch (error) {
      console.error(error);
      alert("로그아웃 실패");
    }
  };
  return (
    <>
        <NavTxt href="/">
          <button onClick={logout}>로그아웃</button>
        </NavTxt>
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
  & > button {
    outline: none;
    border: none;
    background-color: white;
    font-size: 1.2rem;
  }
`;
