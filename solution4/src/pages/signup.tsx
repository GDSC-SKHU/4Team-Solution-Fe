import Link from "next/link";
import styled from "styled-components";

export default function signup() {
  return (
    <Container>
      <p>회원 가입</p>
      <Signup>
        <StyledDiv>일반 회원</StyledDiv>
        <StyledDiv>
          <Link href="signupC">상담사</Link>
        </StyledDiv>
      </Signup>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Signup = styled.div`
  margin-top: 5rem;

  display: flex;

  gap: 1rem;
`;

const StyledDiv = styled.div`
  background-color: #ccff99a0;
  width: 10rem;
  height: 8rem;
`;
