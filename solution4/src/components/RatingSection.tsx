import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react";

// line 26 까지는 css
const RatingContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 13px 0px;
  .inactive {
    color: #cfcfcf;
  }
  .active {
    color: coral;
  }
`;

// AiFillStar는 react-icon 인데요 이거를 하트나 동그라미등 원하는거로 커스텀 가능합니다.
const RatingStar = styled(FaStar)`
  cursor: pointer;
`;

const PIndex = styled.p`
  margin: 0 5px;
`;

interface RatingSectionProps {
  ratingIndex: number;
  setRatingIndex: Dispatch<SetStateAction<number>>;
}

function RatingSection({ ratingIndex, setRatingIndex }: RatingSectionProps) {
  // map를 사용하려고 급조한 array 입니다;;
  const ArrayIndexes = [1, 2, 3, 4, 5];
  return (
    <RatingContainer>
      {ArrayIndexes.map((arrayindex, index) => (
        <RatingStar
          size={35}
          key={`rating_${index}`}
          // 여기가 핵심
          className={arrayindex <= ratingIndex ? "active" : "inactive"}
          onClick={() => setRatingIndex(arrayindex)}
        />
      ))}
      <PIndex>
        {ratingIndex === 5
          ? "아주 좋아요"
          : ratingIndex === 4
          ? "좋아요"
          : ratingIndex === 3
          ? "보통이에요"
          : ratingIndex === 2
          ? "아쉬워요"
          : "별로에요"}
      </PIndex>
    </RatingContainer>
  );
}
export default RatingSection;
