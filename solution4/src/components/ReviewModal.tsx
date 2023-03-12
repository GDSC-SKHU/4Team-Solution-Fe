import styled from "styled-components";

export default function reviewModal() {
  return (
    <>
      <ModalBackground><ReviewModal></ReviewModal></ModalBackground>
    </>
  );
}
const ModalBackground = styled.div`
  background-color: #8282828d;
  width: 100%;
  height: 61rem;
  position: fixed;
  top: 0%;
  left: 0%;
`;
const ReviewModal = styled.div`
  background-color: white;
  width: 60%;
  height: 20rem;
  position: fixed;
  top: 30%;
  right: 20%;
  border-radius: 15px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
