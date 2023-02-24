import axios from "axios";
import router, { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinish = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://mintalk.duckdns.org/sign-in/counselor", {
      method: "POST", // no-cors, *cors, same-origin //메소드 지정
      // mode: 'no-cors',
      headers: {
        //데이터 타입 지정
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({email:username , password})
      //실제 데이터 파싱하여 body에 저장
    }).then((res) => console.log(res));
  };

  return (
    <Container>
      <LoginBox onSubmit={onFinish}>
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
          <p>ID</p>{" "}
          <IdBox
            placeholder="ID를 입력하시오."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></IdBox>
          <p>PW</p>{" "}
          <PwBox
            placeholder="PW를 입력하시오"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></PwBox>
          <div></div>
          <div>
            <Submit type="submit">로그인하기</Submit>
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
