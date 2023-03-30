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
      <Option>
        <DetailOption onClick={() => selectMember("member")}>
          내담자
        </DetailOption>
        <DetailOption onClick={() => selectMember("counselor")}>
          상담사
        </DetailOption>
      </Option>
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
const Option = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

const DetailOption = styled.div`
  width: 4rem;
  border-radius: 3px;

  text-align: center;
  background-color: #767a79;
  color: white;
  
  &:hover {
    background-color:  #48c400;
    cursor: pointer;
  }
`;
