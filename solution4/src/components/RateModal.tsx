import styled from "styled-components";
import RatingSection from "@/components/RatingSection";
import { useState } from "react";

export default function RateModal({ onClose }) {
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
    console.log(reviewData);
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
          {viewAlert && <div>댓글을 입력해주세요</div>}
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
        width: 4rem;
        font-size: 1.1rem;
        margin: 0.5rem;
      }
      & > input {
        width: 35rem;
        outline: none;
        border: none;
        border-bottom: 3px solid;
        margin: 1rem;
        font-size: 1.1rem;
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
`;
