import List from "@/components/Consultant";
import styled from "styled-components";

export default function Findpsy() {
  return (
    <Container>
      <Condition>
        <Search placeholder="상담사 이름 검색"></Search>
        <Location>
          지역
          <br />
          <SelectBox>
            <option>지역</option>
            <option>서울</option>
            <option>인천</option>
            <option>경기도</option>
          </SelectBox>
        </Location>
        <DetailBox>
          <Sex>
            성별
            <br />
            <label htmlFor="term">남자 </label>
            <input type="radio"></input>
            <label htmlFor="term"> 여자 </label>
            <input type="radio"></input>
          </Sex>
          <Day>요일 선택</Day>
          <label htmlFor="term">월 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 화 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 수 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 목 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 금</label>
          <input type="radio"></input>
          <br />
          <label htmlFor="term">토 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 일 </label>
          <input type="radio"></input>
          <License>자격증</License>
          <label htmlFor="term">2급 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 1급 </label>
          <input type="radio"></input>
        </DetailBox>
      </Condition>
      <List></List>
      <div></div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: pink;

  gap: 5rem;
`;

const Condition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: yellow;

  width: 14rem;
  height: 25rem;
`;

const Search = styled.input`
  background-color: green;
  width: 12rem;
  height: 3rem;

  border: solid 1px yellow;
`;

const Location = styled.div`
  padding: 0.5rem;
  background-color: green;
  width: 11rem;
  height: 4rem;

  border: solid 1px yellow;
`;

const SelectBox = styled.select`
  background-color: beige;

  width: 10rem;
  height: 2rem;
`;
const DetailBox = styled.div`
  padding: 0.5rem;
  background-color: green;
  width: 11rem;
  height: 14rem;
  border: solid 1px yellow;
`;

const Sex = styled.div``;

const Day = styled.div`
  padding-top: 0.5rem;
`;

const License = styled.div`
  padding-top: 0.5rem;
`;