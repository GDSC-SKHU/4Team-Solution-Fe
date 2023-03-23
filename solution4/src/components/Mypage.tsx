import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { RoleContext } from "./LoginContext";

export default function Mypage() {
  const { role, setRole } = useContext(RoleContext);
  return (
    <div>
      {role === "COUNSELOR" ? (
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
