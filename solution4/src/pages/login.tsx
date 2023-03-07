// import axios from "axios";
// import { METHODS } from "http";
import LoginC from "@/components/LoginC";
import LoginM from "@/components/LoginM";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styled from "styled-components";
// import Checkbox from "./Checkbox";

export default function Login() {
  return (
    <Container>
      <LoginC />
      <LoginM />
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
