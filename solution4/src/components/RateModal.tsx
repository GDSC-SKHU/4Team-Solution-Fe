import styled from "styled-components";
import RatingSection from "@/components/RatingSection";
import { useState } from "react";
import { CiWarning } from "react-icons/ci";
import { num } from "@/components/Consultant";

interface RateModalProps {
  onClose: () => void;
}

export default function RateModal({ onClose }: RateModalProps) {
  const [ratingIndex, setRatingIndex] = useState(1);
  // ratingIndex가 평점
  const [comment, setComment] = useState("");
  // comment가 댓글
  const [isComment, setIsComment] = useState(false);
  //댓글 없을때 알리기 위해
  const [viewAlert, setViewAlert] = useState(false);

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
    setIsComment(!!e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!isComment) {
      setViewAlert(true);
      return;
    }

    const reviewData = {
      rating: ratingIndex,
      comment: comment,
    };
    fetch(`https://mintalk.duckdns.org/counselors/${num}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // 데이터베이스에 저장된 후기 데이터 확인
    })
    .catch((error) => {
      console.error(error);
    });
    // 서버로 보내기

    onClose();
  };
  return (
    <>
      <ModalBackground>
        <ReviewModal>
          <StarZone>
            <RatingSection
              ratingIndex={ratingIndex}
              setRatingIndex={setRatingIndex}
            />
          </StarZone>
          <div className="Write">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="댓글 작성하기..."
                onChange={handleCommentChange}
                value={comment}
              ></input>
              <button type="reset" onClick={() => setComment("")}>
                초기화
              </button>
              <button type="submit">작성</button>
            </form>
          </div>
          {viewAlert && (
            <div className="writeIn">
              <CiWarning size={25}/> 댓글을 입력해주세요
              <CiWarning size={25}/>
            </div>
          )}
        </ReviewModal>
      </ModalBackground>
    </>
  );
}
const StarZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBackground = styled.div`
  background-color: #8282828d;
  width: 100%;
  height: 61rem;
  position: fixed;
  top: 0%;
  left: 0%;
  .Write {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > form {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      & > button {
        height: inherit;
        width: 5rem;
        font-size: 1.1rem;
        margin: 0.5rem;
        border: none;
        background-color: #83da00;
        border-radius: 10px;
        &:hover {
          background-color: #67ac00;
          transition: 0.2s;
          transform: translateY(-3px);
        }
      }
      & > input {
        width: 35rem;
        outline: none;
        border: none;
        border-bottom: 3px solid #83da00;
        margin: 1rem;
        font-size: 1.1rem;
        padding: 0.3rem;
      }
    }
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .writeIn {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #83da00;
    font-weight: 600;
  }
`;
