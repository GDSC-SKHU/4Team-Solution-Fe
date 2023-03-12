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

    axios
      .post(
        "https://mintalk.duckdns.org/counselors",
        { name: name, gender: gender, email: email, password: password },
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Title>상담사 회원가입</Title>
      <Information onSubmit={onSubmit}>
        <StyledP>이름</StyledP>
        <div>
          <StyledInput
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder={" 이름"}
          ></StyledInput>
        </div>

        <StyledP>성별</StyledP>
        <div>
          <StyledInput
            type="text"
            value={gender}
            onChange={onChangeGender}
            placeholder={" male 또는 female"}
          ></StyledInput>
        </div>

        <StyledP>이메일</StyledP>
        <div>
          <StyledInput
            type="text"
            value={email}
            onChange={onChangeEmail}
            placeholder={" ex) 1234@gmail.com"}
          ></StyledInput>
        </div>

        <StyledP>비밀번호</StyledP>
        <div>
          <StyledInput
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder={" 4자 이상 20자 이하"}
          ></StyledInput>
        </div>

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
  color: #535756;
`;
const Information = styled.form`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 7rem 11rem;
  grid-template-rows: 5rem 5rem 5rem 5rem;

  border: 15%;
`;

const StyledInput = styled.input`
  width: 11rem;
  height: 2rem;

  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

const StyledP = styled.div`
  font-weight: 800;
`;

const Summit = styled.button`
  margin-left: 10rem;

  width: 8rem;
  height: 2rem;

  text-align: center;

  border-radius: 5rem;

  background:white;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;

  z-index: 1;

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #48c400;
    border-radius: 5rem;
    transition: all 0.3s ease;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }

  active {
    top: 2px;
  }
`;
