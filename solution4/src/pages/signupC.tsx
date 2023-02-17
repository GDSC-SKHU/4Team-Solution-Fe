import styled from "styled-components";

//상담사회원가입 페이지
export default function SignupC() {
  return (
    <Container>
      <Title>상담사 회원가입</Title>
      <Information>
        <InformationDetailBox>
          <StyledP>ID</StyledP>
          <StyledInput></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>비밀번호</StyledP>
          <StyledInput></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>이름</StyledP>
          <StyledInput></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>이메일</StyledP>
          <StyledInput></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>성별</StyledP>
          <StyledInput></StyledInput>
        </InformationDetailBox>
        <Summit>상담사 회원가입</Summit>
      </Information>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: 900;
  color: orange;
`;
const Information = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  width: 70rem;
  height: 30rem;

  border: 15%;
`;

const InformationDetailBox = styled.div`
  padding-top: 0.5rem;
  width: 12rem;
  height: 14rem;

  border: solid 1px #c0b3b3;
  border-radius: 5px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  color: orange;
`;

const StyledInput = styled.input`
  margin-left: 0.5rem;
  margin-top: 2rem;

  width: 11rem;
  height: 2rem;
 
  border: solid 1px #c0b3b3;
  border-radius: 5px;
`;

const StyledP = styled.p`
  padding-left: 0.5rem;
  font-weight: 800;
`;

const Summit = styled.div`
  padding-top: 0.3rem;
  margin-left: 60rem;
  width: 8rem;
  height: 2rem;

  text-align: center;

  color: orange;
  border: solid 1px orange;
  border-radius: 5rem;
`;
