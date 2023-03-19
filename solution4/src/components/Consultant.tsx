import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./CheckBoxSearch";

interface Record {
  id: number;
  name: string;
  shortIntroduction: string;
  location: string;
  fields: [{ desc: string }];
}

interface Props {
  setSearchUrl: React.Dispatch<React.SetStateAction<string>>;
  searchUrl: string;
  onSearchUrlChange: (searchUrl: string) => void;
}

export let num = 1;

const List = (Prop: Props) => {
  const [data, setData] = useState<Record[]>([]);
  const [id, setId] = useState<Number>();
  const [searchUrl, setSearchUrl] = useState<string>(
    "https://mintalk.duckdns.org/counselors"
  );

  num = Number(id);

  const handleSearchUrlChange = (newUrl: string) => {
    setSearchUrl(newUrl);
  };

  const counselor = useCallback(async () => {
    axios
      .get(`${searchUrl}`)
      .then((response) => {
        setData(response.data.data); //받아온 데이터를 data에 저장
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchUrl]);

  useEffect(() => {
    counselor();
  }, [counselor, searchUrl]);

  console.log(num);
  // };
  return (
    <Box>
      <Search
        setSearchUrl={setSearchUrl}
        searchUrl={searchUrl}
        onSearchUrlChange={handleSearchUrlChange}
      />
      {/* {data.map((Record, number) => {
        return (
          <div key={number}>
            <h2>{Record.name}</h2>
            <div>{Record.shortIntroduction}</div>
            <div>{Record.location}</div>
            {Record.fields.map((f, h) => (
              <div key={h}>{f.desc}</div>
            ))}
          </div>
        );
      })} */}
      <StyledLink href="./clientsConsultantPage">
        <ConsultantBox>
          {data.map((Record, counselor) => {
            return (
              <Consultant key={counselor} onClick={() => setId(Record.id)}>
                <StyledGrid>
                  <div>
                    <ImageWrap></ImageWrap>
                  </div>
                  <Styledinformation>
                    <StyledSpan>{Record.name}</StyledSpan>
                    <StyledP>
                      <br />
                      소개: {Record.shortIntroduction}
                    </StyledP>
                    <StyledP>{Record.location}</StyledP>
                    <StyledP>
                      분야:
                      {Record.fields.map((f, h) => (
                        <div key={h}>{f.desc}</div>
                      ))}
                    </StyledP>
                  </Styledinformation>
                </StyledGrid>
              </Consultant>
            );
          })}
        </ConsultantBox>
      </StyledLink>
    </Box>
  );
};

export default List;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConsultantBox = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const Consultant = styled.div`
  padding: 1.5rem;
  width: 25rem;
  height: 20rem;

  border-radius: 5px;

  background-color: aliceblue;
  /* border: 2px solid gray; */
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 12rem 15rem;
  grid-template-rows: 20rem;

  /* background-color: pink; */
`;
const ImageWrap = styled.div`
  width: 12rem;
  height: 20rem;
  background-color: white;
  /* 
  border: 2px solid gray; */
`;

const Styledinformation = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;
  width: 12rem;
  height: 10rem;

  /* background-color: #93daf6; */
`;

const StyledSpan = styled.span`
  font-size: 2em;
  color: black;
`;

const StyledP = styled.div`
  font-size: 15px;
  color: gray;
`;
