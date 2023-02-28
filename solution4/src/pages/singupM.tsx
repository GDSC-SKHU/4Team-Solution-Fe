import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function SignupC() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onChangeGender = (e: ChangeEvent<HTMLInputElement>) =>
    setGender(e.target.value);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const CounselorData = {
      name: name,
      gender: gender,
      email: email,
      password: password,
    };

    axios
      .post("https://mintalk.duckdns.org/clients", {
        CounselorData,
      })
      .then((response) => {
        console.log(response.data);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Title>내담자 회원가입</Title>
      <Information onSubmit={onSubmit}>
        <InformationDetailBox>
          <StyledP>이름</StyledP>
          <StyledInput
            type="text"
            value={name}
            onChange={onChangeName}
          ></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>성별</StyledP>
          <StyledInput
            type="text"
            value={gender}
            onChange={onChangeGender}
          ></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>이메일</StyledP>
          <StyledInput
            type="text"
            value={email}
            onChange={onChangeEmail}
          ></StyledInput>
        </InformationDetailBox>
        <InformationDetailBox>
          <StyledP>비밀번호</StyledP>
          <StyledInput
            type="password"
            value={password}
            onChange={onChangePassword}
          ></StyledInput>
        </InformationDetailBox>

        <Summit type="submit">상담사 회원가입</Summit>
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

  width: 55rem;
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

const Summit = styled.button`
  padding-top: 0.3rem;
  margin-left: 45rem;
  width: 8rem;
  height: 2rem;

  text-align: center;

  color: orange;
  border: solid 1px orange;
  border-radius: 5rem;
`;
