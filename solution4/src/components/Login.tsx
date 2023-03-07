import styled from "styled-components";

export default function Login() {
  return (
    <>
      <LoginNav>
        <div>
          <NavTxt href="/login">로그인</NavTxt>
        </div>
        <div>
          <NavTxt href="/signup">회원가입</NavTxt>
        </div>
      </LoginNav>
    </>
  );
}

const LoginNav = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
`;