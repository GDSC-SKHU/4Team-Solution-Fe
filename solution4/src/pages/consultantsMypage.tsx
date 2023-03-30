import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { fieldList, careerlist } from "../constants";
import PhotoUpload from "@/components/PhotoUpload";

//추가코드
interface Props {
  onFileChange: (file: File) => void; // onFileChange 함수 props 타입 정의
}
//추가 코드

export default function ConsultantsMypage() {
  const [consultant, setConsultant] = useState<any>([]);

  const [file, setFile] = useState<File | null>(null);
  console.log(file);
  const handleFileChange = (selectedFile: File) => {
    setFile(selectedFile);
  };
  //추가 코드

  //!상담사용 자기소개 조회
  const consultantsPage = () => {
    return fetch(`https://mintalk.duckdns.org/counselors/my-page`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setConsultant(res?.data);
      });
  };
  useEffect(() => {
    const url = "https://mintalk.duckdns.org/counselors/my-page";

    const data = {
      name: name,
      email: email,
      shortIntroduction: shortIntroduction,
      introduction: introduction,
      contact: contact,
      location: location,
      careers: [careers],
      fields: [fields],
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        consultantsPage().then((res) => {
          console.log(res);
        });
      });
  }, []);

  console.log(consultant);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [shortIntroduction, setShortIntroduction] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [careers, setCareers] = useState([]);
  const [fields, setFields] = useState([]);
  const [Files, setFiles] = useState("");

  return (
    <form>
      <ConMypageMain>
        <Title>상담자용 마이페이지</Title>
        <ConsultantImgBox>
          <div>
            <PhotoUpload onFileChange={handleFileChange} />
            {/* //onFileChange 속성이 Props 인터페이스에서 필수가 아닌 optional 속성으로 변경되거나, PhotoUpload 컴포넌트 호출 시 onFileChange 속성이 전달되어 오류가 발생하지 않게 됩니다. */}
          </div>
          <FixSimpleIntro>
            <div>
              <p>이름</p>
              <input className="InputBox"></input>
            </div>
            <div>
              <p>이메일</p>
              <input className="InputBox"></input>
            </div>
            <div>
              <p>연락처</p>
              <input className="InputBox"></input>
            </div>
            <div>
              <p>근무지</p>
              <input className="InputBox"></input>
            </div>
          </FixSimpleIntro>
        </ConsultantImgBox>
        <IntoBox>
          <div className="Textarea">
            <p className="SubTitle">한줄로 자신을 소개해주세요 </p>
            <textarea
              cols={90}
              rows={2}
              placeholder="한줄로 자신의 소개를 입력해주세요..."
              className="IntroBox1"
            ></textarea>
          </div>
          <div className="Textarea">
            <p className="SubTitle">긴 자기 소개서</p>
            <textarea
              cols={90}
              rows={20}
              placeholder="자신의 소개를 입력해주세요..."
              className="IntroBox2"
            ></textarea>
          </div>
          <ListBox>
            <div className="SubList">
              상담분야
              <SelectList>
                {/* onChange={handleChangeSelect} */}
                <option value="우울감">우울감</option>
                <option value="노인">노인</option>
                <option value="청소년">청소년</option>
                <option value="인간관계">인간관계</option>
                <option value="불안" selected={true}>
                  불안
                </option>
              </SelectList>
            </div>
            <div className="SubList">
              학력 및 경력
              <input></input>
            </div>
          </ListBox>
        </IntoBox>
      </ConMypageMain>
    </form>
  );
}
const SelectList = styled.select`
  width: 10rem;
  height: 2rem;
  border-radius: 10px;
  margin: 1rem;
  border: none;
  outline: none;
  background-color: #3acc00a4;
  font-size: 1.1rem;
  padding: 0px 5px;
  &:hover {
    background-color: #2c9a00a3;
    transition: all 1s;
  }
  option {
    width: 10rem;
    height: 3rem;
    padding: 5px;
  }
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .SubList {
    display: flex;
    flex-direction: column;
    width: 30%;
    font-size: 1.2rem;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    & > input {
      width: 100%;
      padding: 5px 10px;
      font-size: 1.1rem;
      margin: 1rem;
      outline: none;
      border: none;
      border-radius: 10px;
      background-color: #3acc00a4;
      text-align: center;
      &:focus {
        background-color: #2c9a00a3;
        transition: all 1s;
      }
    }
  }
`;
const IntoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #21dd0043;
  border-radius: 10px;
  .Textarea {
    padding: 1rem;
  }
  .SubTitle {
    padding-left: 2rem;
    font-size: 1.2rem;
  }
  .IntroBox1 {
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1.2rem;
    overflow: scroll;
    outline: none;
    border: none;
    border-radius: 10px;
  }
  .IntroBox2 {
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1.2rem;
    overflow: scroll;
    outline: none;
    border: none;
    border-radius: 10px;
  }
`;
const FixSimpleIntro = styled.div`
  display: flex;
  font-size: 1.3rem;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .InputBox {
    margin: 0.5rem;
    font-size: 1.5rem;
    width: 20rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #3acc00a4;
    font-size: 1.1rem;
    padding: 0px 10px;
    &:focus {
      background-color: #2c9a00a3;
      transition: all 1s;
    }
  }
`;
const ConsultantImgBox = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  align-items: center;
  height: 332px;
  & > div {
    display: flex;
    flex-direction: column;
    margin: auto;
    & > input {
      height: 2rem;
    }
  }
`;

const Title = styled.p`
  font-size: 1.5em;
  margin: 1rem;
  font-weight: 500;
`;
const ConMypageMain = styled.div`
  width: 60%;
  margin: auto;
`;
