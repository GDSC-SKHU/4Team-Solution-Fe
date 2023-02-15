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
          <Gender>
            성별
            <br />
            <label htmlFor="term">남자 </label>
            <input type="radio"></input>
            <label htmlFor="term"> 여자 </label>
            <input type="radio"></input>
          </Gender>
          <Day>분야</Day>
          <label htmlFor="term">학생 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 청년 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 노인 </label>
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
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
`;

const Condition = styled.aside`
  margin-right: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ccff99a0;

  width: 14rem;
  height: 27rem;
`;

const Search = styled.input`
  margin-bottom: 1rem;

  background-color: white;

  width: 12rem;
  height: 3rem;

  border: solid 1px gray;
`;

const Location = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;

  background-color: white;

  width: 11rem;
  height: 4rem;

  border: solid 1px gray;
`;

const SelectBox = styled.select`
  background-color: white;
  width: 10rem;
  height: 2rem;
`;
const DetailBox = styled.div`
  padding: 0.5rem;

  background-color: white;

  width: 11rem;
  height: 14rem;
  border: solid 1px gray;
`;

const Gender = styled.div`
  background-color: white;
`;

const Day = styled.div`
  padding-top: 0.5rem;
  background-color: white;
`;
