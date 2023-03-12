import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export const starArray = [0, 1, 2, 3, 4];

function StarRate() {
  const [rate, setRate] = useState<number>(0);
  return (
    <>
    <FaStar></FaStar>
      </>
  );
}

export default StarRate;

const StarRateWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  .star_icon {
    display: inline-flex;
  }
`;
