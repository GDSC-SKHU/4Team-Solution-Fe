import Career from "@/components/Career";
import PhotoUpload from "@/components/PhotoUpload";
import styled from "styled-components";

export default function CRegistration() {
  return (
    <Container>
      <Title>상담사 정보 등록 페이지</Title>
      <CRegistrationForm>
        <div>
          **사진 불러오기(사진불러오기기능)**
          <PhotoUpload />
        </div>
        <div>이름.이거는 회원가입 시 등록했던 정보 연결</div>
        <div>id.이거는 회원가입 시 등록했던 정보 연결</div>
        <div>나이.이거는 회원가입 시 등록했던 정보 연결</div>
        <div>성별 (선택)</div>
        <div>전화번호(상담소 전화번호 작성)</div>
        <div>이메일.이거는 회원가입 시 등록했던 정보 연결</div>
        <div>
          **경력(todo list 형식으로)**
          <Career />
        </div>
        <div>위치(선택)</div>
        <div>분야(선택)</div>
      </CRegistrationForm>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CRegistrationForm = styled.form`
  width: 40rem;
  height: 100rem;
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: 900;
  color: orange;
`;
