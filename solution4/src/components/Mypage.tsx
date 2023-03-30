import Cookies from "js-cookie";
import Link from "next/link";
import styled from "styled-components";

export default function Mypage() {
  
  const Isrole = Cookies.get("role");
  const IsloggedIn = Cookies.get("loggedIn");
  return (
    <div>
      {Isrole === "COUNSELOR" ? (
        <>
          <MypageBtn href="/consultantsMypage">마이페이지</MypageBtn>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

const MypageBtn = styled(Link)`
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
