import Link from "next/link";
import styled from "styled-components";

export default function signup() {
  return (
    <Container>
      <Title>
        <StyledSpan>minTalk</StyledSpan> 회원가입
      </Title>
      <Signup>
        <StyledDiv>
          <StyledLink href="singupM">
            <div>:) 내담자</div>
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink href="signupC">
            <div>:) 상담사</div>
          </StyledLink>
        </StyledDiv>
      </Signup>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: #f7faf5; */
`;

const Title = styled.p`
  font-size: 2em;
  color: #535756;
`;

const StyledSpan = styled.span`
  font-size: 3em;
  color: #48c400;
  font-weight: 500;
`;
const Signup = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 2.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const StyledDiv = styled.div`
  width: 15rem;

  display: block;
  position: relative;
  float: left;
  padding: 0;
  margin: 20px 10px 20px 0;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  border-radius: 5px;
  transition: all 0.2s;

  background-color: #48c400;
  box-shadow: 0px 10px 0px 0px #3ca002;

  &:hover {
    margin-top: 30px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 0px 0px #3ca002;
  }

  text-align: center;
  font-size: 2rem;
`;
