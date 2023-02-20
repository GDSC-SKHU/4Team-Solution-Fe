import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <LoginBox>
        <InputBox>
          <div></div>
          <div>
            <OptionBox>
              <label htmlFor="term">회원 </label>
              <input type="radio" value="member"></input>
              <label htmlFor="term"> 상담사 </label>
              <input type="radio" value="counselor"></input>
            </OptionBox>
          </div>
          <p>ID</p> <IdBox placeholder="ID를 입력하시오."></IdBox>
          <p>PW</p> <PwBox placeholder="PW를 입력하시오"></PwBox>
          <div></div>
          <div>
            <Submit>로그인하기</Submit>
          </div>
        </InputBox>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 18rem;

  border: solid 0.5rem #ccff99a0;
  border-radius: 5%;
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 4rem 15rem;
  grid-template-rows: 2rem 2rem 2rem 4rem;

  gap: 1rem;
`;

const OptionBox = styled.div`
  float: right;
`;
const IdBox = styled.input``;

const PwBox = styled.input``;

const Submit = styled.button`
  float: right;
`;
