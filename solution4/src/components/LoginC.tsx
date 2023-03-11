// import axios from "axios";
// import { METHODS } from "http";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styled from "styled-components";
// import Checkbox from "./Checkbox";

export default function LoginC() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const data = { email: username, password: password };
  const onFinish = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://mintalk.duckdns.org/sign-in/counselors", {
      method: "POST", // no-cors, *cors, same-origin //메소드 지정
      // mode: 'no-cors',
      headers: {
        //데이터 타입 지정
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      //실제 데이터 파싱하여 body에 저장
      credentials: `include`,
    })
      // .then((res) => res.json()) //이것이 필요한 것인가?
      //
      // .then((res) => {
      //   console.log(res);
      //   router.push("/");
      // })
      .then((res) => {
        res;
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginBoxC onSubmit={onFinish}>
      <MemberType>상담사</MemberType>
      <InputBox>
        <p>이메일</p>
        <EmailBox
          placeholder="email"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></EmailBox>
        <p>비밀번호</p>
        <PasswordBox
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></PasswordBox>
        <Submit type="submit">로그인</Submit>
      </InputBox>
    </LoginBoxC>
  );
}

const LoginBoxC = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 22rem;
  background-color: #f6faf7;
`;

const MemberType = styled.p`
 padding-right: 12rem;
 padding-bottom: 2rem;

 font-size: 2rem;
 font-weight: 600;
 
 color: gray;
`

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 4rem 12rem;
  grid-template-rows: 2rem 2rem;

  gap: 1rem;
`;


const EmailBox = styled.input`
  width: 12rem;
`;

const PasswordBox = styled.input`
  width: 12rem;
`;

const Submit = styled.button`
  width: 17.2rem;
  height: 2rem;
`;
