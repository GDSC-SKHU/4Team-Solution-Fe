import Image from "next/image";
import styled from "styled-components";
import styles from "@/styles/Find.module.css";
import { FaStar } from "react-icons/fa";

interface Consultant{
  name:string;
  review:string;
  score:number;
  intro:string;
  
}
export default function Findpsy() {
  return (
    <>
      <ProfileBox>
        <div>
          <Image
            className={styles.profile}
            src="/고먐미.jpeg"
            alt="Picture of the author"
            width={100}
            height={100}
          />{" "}
        </div>
        <ProfileTextBox>
          <div>고먐미 심리 상담사</div>
          <StarBox>
            <div>후기</div>
            {/* 이부분 api통해서 후기별로 별 퍼센트 조절하는거 해야됨
            https://jae04099.tistory.com/entry/React-svg%EB%A1%9C-%EB%B9%84%EC%9C%A8-%EC%A0%95%ED%99%95%ED%95%9C-%EB%B3%84%EC%A0%90-%EA%B5%AC%ED%98%84 */}
            <Stars>
              {Array.from({ length: 5 }, (__, i) => (
                <div key={i}>
                  <FaStar />
                </div>
              ))}
            </Stars>
            {/* 숫자 부분 처리 하는 방법 => 별 퍼센트별로 4점, 4.5점 써야됨 */}
            <div>5점</div>
          </StarBox>
          <div>고양이 심리 치료사 고먐미 상담사 입니다</div>
        </ProfileTextBox>
      </ProfileBox>
    </>
  );
}

const ProfileBox = styled.div`
  display: flex;
`;
const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Stars = styled.div`
  display: flex;
  color: #ffa352;
`;
const StarBox = styled.div`
  display: flex;
  gap: 0.5rem;
>>>>>>> Stashed changes
`;
