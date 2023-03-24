import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function PhotoUpload() {
  const [file, setFile] = useState<File | null>(null); //파일 상태 타입
  const [preview, setPreview] = useState<string | null>(null); // 미리보기 상태 타입

  const onLoadFile = (e: any) => {
    const selectedFile = e.target.files?.[0]; 
    // `?.` 연산자는 선택적 연산자로, 'files' 객체가 'null' 또는 'undefined'인 경우 'undefined'를 반환
    setFile(selectedFile);

    if (selectedFile) {
      const fileReader = new FileReader(); 
      //FileReader는 파일의 내용을 비동기적으로 읽는 데 사용
      fileReader.onloadend = (event: ProgressEvent<FileReader>) => {
        //event.target 속성을 FileReader 타입으로 캐스팅
        const previewUrl = event.target?.result as string;
        setPreview(previewUrl); 
        //event.target?.result가 string으로 정의된 'preview' 상태 타입과 맞추기 위해서 코드 변환
      };
      fileReader.readAsDataURL(selectedFile); 
      //readAsDataURL 메서드는 파일을 읽어서 데이터 URL을 생성함
    } else {
      setFile(null);
      setPreview(null); 
      //`fileREader.readAsDateURL(selectedFile);` 코드가 실행될 때, 파일을 읽어들이기 전에 `setPreview`이 null인 경우 예외처리
    }
  }; // 프리뷰코드

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return; //file이 null인 경우 함수 종류
    }
    const formData = new FormData(); 
    // fetch를 활용해 파일을 업로드하기 위해서 FormData를 꼭 써야 한다는 글을 본 것 같아요
    formData.append("profileImage", file);

    fetch("url", {
      //url은 임의 url
      method: "PATCH",
      mode: "cors", //예슬언니 코드에서 가지고 옴
      cache: "default", //예슬언니 코드에서 가지고 옴
      headers: {
        "Content-Type": "multipart/form-data",
         //파일 업로드를 위해 FormData를 사용해서 Content-Type에 multipart/form-data를 써야 한다고 하네요
      },
      body: formData,
      credentials: `include`,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log(formData);
  };

  const consultPage =()=>{
    
  }

  return (
    <Form onSubmit={onSubmit}>
      {preview ? (
        <Image src={preview} width={300} height={300} alt="file preview" />
      ) : (
        <ChoseDiv>이미지파일을 선택해 주세요.</ChoseDiv>
        // <Image src={preview} width={300} height={300} alt="file preview" />
      )}
      <ButtonBox>
        <StyledInput
          accept="png, jpeg, image/*" 
          //확장자 png, jpeg 만 받게 하기. 그리고 단일 선택을 위해서  image/*이걸 넣었습니당.
          type="file"
          onChange={onLoadFile}
        ></StyledInput>
        <label htmlFor="file-upload"></label>
        <button type="submit">저장</button>
      </ButtonBox>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

const ChoseDiv = styled.div`
  width: 300px;
  height: 300px;

  border: 1px solid black;

  text-align: center;
`;

const StyledInput = styled.input``;

const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;
