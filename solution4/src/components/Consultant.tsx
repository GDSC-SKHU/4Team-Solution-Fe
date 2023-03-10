import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

interface Record {
  id: number;
  name: string;
  shortIntroduction: string;
  location: string;
  fields: [{ desc: string }];
}

export let num = 1;

const List = () => {
  const [data, setData] = useState<Record[]>([]);
  const [id, setId] = useState<Number>();
  num = Number(id);

  const counselor = useCallback(async () => {
    axios
      .get("https://mintalk.duckdns.org")
      .then((response) => {
        setData(response.data.data); //받아온 데이터를 data에 저장
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    counselor();
  }, [counselor]);

  console.log(num);
  // };

  return (
    <Box>
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
      <Link href="./clientsConsultantPage">
        <ConsultantBox>
          {data.map((Record) => {
            return (
              <Consultant key={Record.id} onClick={() => setId(Record.id)}>
                <StyledGrid>
                  <Styledinformation>
                    <StyledSpan>{Record.name}</StyledSpan>
                    <p>소개: {Record.shortIntroduction}</p>
                    <StyledP>{Record.location}</StyledP>
                    {Record.fields.map((f, h) => (
                      <div key={h}>{f.desc}</div>
                    ))}
                  </Styledinformation>
                </StyledGrid>
              </Consultant>
            );
          })}
        </ConsultantBox>
      </Link>
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
  height: 14rem;

  border-radius: 5px;

  background-color: aliceblue;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 8rem 15rem;
  grid-template-rows: 12rem;

  /* background-color: pink; */
`;

const Styledinformation = styled.div`
  padding-left: 2rem;
  width: 12rem;
  height: 10rem;

  /* background-color: #93daf6; */
`;

const StyledSpan = styled.span`
  font-size: 2em;
  color: gray;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: white;
`;
