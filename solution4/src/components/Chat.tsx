import { useState } from "react";
import styled from "styled-components";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = () => {
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  const handleMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  return (
    <Container>
      <ChatBox>
        <Who>누구랑</Who>
        <HR></HR>
        <MainChat>
          {messages.map((message, index) => (
            <Bubble key={index}>{message}</Bubble>
          ))}
        </MainChat>
        <SubmitBox>
          <SubmitInput
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="메시지를 입력하세요."
          ></SubmitInput>
          <Submit onClick={handleMessageSubmit}>전송</Submit>
        </SubmitBox>
      </ChatBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: #9bd58b;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50rem;
  height: 100vh;

  background-color: beige;
  /* border-left: solid 1px #ddd36e;
  border-right: solid 1px #ddd36e; */
`;

const Who = styled.div`
  margin-left: 3rem;
  margin-top: 2vh;

  height: 4vh;

  color: green;

  font-size: 2em;
  font-weight: 600;
`;

const HR = styled.hr`
  margin-top: 4vh;

  width: 50rem;
  height: 3px;

  background-color: white;

  border: none;
`;

const MainChat = styled.div`
  width: 50rem;
  height: 80vh;

  overflow-y: scroll;
`;

const Bubble = styled.div`
  padding: 2rem;
  margin-left: auto;
  margin-right: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  width: 17.5rem;
  height: auto;

  background-color: white;

  border: none;
  border-radius: 2rem;

  text-align: center;

  word-wrap: break-word; // 줄바꿈
`;

const SubmitBox = styled.div`
  margin-bottom: 2vh;

  display: flex;
  justify-content: center;
`;

const SubmitInput = styled.input`
  padding-right: 3rem;

  width: 35rem;
  height: 8vh;

  border: none;
  border-radius: 15px;

  text-align: right;
  font-size: 1em;

  &:focus {
    outline: none;
    border: none;
  }
`;

const Submit = styled.button`
  margin-left: 2.5rem;

  width: 5rem;
  height: 8.2vh;

  background-color: yellow;
  color: green;

  border: none;
  border-radius: 15px;

  font-size: 1.3em;
  font-weight: 600;
`;
