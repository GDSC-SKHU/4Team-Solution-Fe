import Link from "next/link";
import styled from "styled-components";

export default function signup() {
  return (
    <Container>
      <Title>회원 가입</Title>
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

const Title = styled.p`
  font-size: 2em;
  font-weight: 900;
  color: orange;
`;

const Signup = styled.div`
  margin-top: 5rem;

  display: flex;

  gap: 3rem;
`;

const StyledDiv = styled.div`
  padding-top: 2rem;

  width: 10rem;
  height: 6rem;

  background-color: #ccff99a0;
  color: orange;

  border: 3px solid pink;
  border-radius: 25%;

  text-align: center;
  font-size: 2rem;
  font-weight: 800;
`;
