import Link from "next/link";
import styled from "styled-components";


export default function Signup() {
  return (
    <>
      <NavTxt href="/signup">회원가입</NavTxt>
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
