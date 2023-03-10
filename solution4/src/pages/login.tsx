import LoginC from "@/components/LoginC";
import LoginM from "@/components/LoginM";
import { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [memberType, setMemberType] = useState("");

  const selectMember = (type: string) => {
    setMemberType(type);
  };

  return (
    <Container>
      <ul>
        <li onClick={() => selectMember("member")}>내담자</li>
        <li onClick={() => selectMember("counselor")}>상담사</li>
      </ul>
      {memberType === "member" ? (
        <LoginM />
      ) : memberType === "counselor" ? (
        <LoginC />
      ) : (
        <LoginM />
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 2rem;
`;
