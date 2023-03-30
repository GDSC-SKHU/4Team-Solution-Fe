import List from "@/components/Consultant";
import styled from "styled-components";

interface Props {
  setSearchUrl: React.Dispatch<React.SetStateAction<string>>;
  searchUrl: string;
  onSearchUrlChange: (searchUrl: string) => void;
}

export default function Findpsy({
  setSearchUrl,
  searchUrl,
  onSearchUrlChange,
}: Props) {
  return (
    <Container>
      {/* <Condition>
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
            <label htmlFor="term"> 무관 </label>
            <input type="radio"></input>
          </Gender>
          <Day>분야</Day>
          <label htmlFor="term">학생 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 청년 </label>
          <input type="radio"></input>
          <label htmlFor="term"> 노인 </label>
          <input type="radio"></input>
          <Reset>초기화</Reset>
        </DetailBox>
      </Condition> */}
      <List
        setSearchUrl={setSearchUrl}
        searchUrl={searchUrl}
        onSearchUrlChange={onSearchUrlChange}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
`;

// const Condition = styled.aside`
//   position: sticky;
//   top: 150px;
//   left: 150px;

//   margin-right: 5rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   border-radius: 15px;
//   background-color: #ccff99a0;

//   width: 14rem;
//   height: 23rem;
// `;

// const Search = styled.input`
//   margin-bottom: 1rem;

//   background-color: white;

//   width: 12rem;
//   height: 3rem;

//   border: solid 1px green;
//   border-radius: 15px;

//   text-align: center;
// `;

// const Location = styled.div`
//   margin-bottom: 1rem;
//   padding: 0.5rem;

//   background-color: white;

//   width: 11rem;
//   height: 4rem;

//   border: solid 1px green;
//   border-radius: 15px;
// `;

// const SelectBox = styled.select`
//   background-color: white;
//   width: 10rem;
//   height: 2rem;
// `;
// const DetailBox = styled.div`
//   padding: 0.5rem;

//   background-color: white;

//   width: 11rem;
//   height: 9rem;
//   border: solid 1px green;
//   border-radius: 15px;
// `;

// const Gender = styled.div`
//   background-color: white;
// `;

// const Day = styled.div`
//   padding-top: 0.5rem;
//   background-color: white;
// `;

// const Reset = styled.div`
//   margin-left: 8rem;
//   margin-top: 1rem;

//   width: 3rem;
//   height: 1.5rem;

//   border: solid 1px green;
//   border-radius: 5px;

//   text-align: center;
// `;
