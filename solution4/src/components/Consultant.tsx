import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Search from "./CheckBoxSearch";
import { VscArrowUp } from "react-icons/vsc";

interface Record {
  id: number;
  name: string;
  shortIntroduction: string;
  location: string;
  fields: [{ desc: string }];
  profileImageUrl: string;
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
  const [loading, setLoading] = useState<boolean>(true); //로딩 상태 추가
  const topRef = useRef<HTMLDivElement>(null);

  const onTopClick = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchUrlChange = (newUrl: string) => {
    setSearchUrl(newUrl);
  };

  const counselor = useCallback(async () => {
    setLoading(true); // 로딩 중 상태 업데이트
    axios
      .get(`${searchUrl}`)
      .then((response) => {
        setData(response.data.data); //받아온 데이터를 data에 저장
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // 로딩 상태 업데이트
      });
  }, [searchUrl]);

  useEffect(() => {
    counselor();
  }, [counselor, searchUrl]);

  num = Number(id);
  console.log(num);

  return (
    <Box ref={topRef}>
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ResultNum>{data.length}명의 상담사가 검색되었습니다.</ResultNum>
          <StyledLink href="./clientsConsultantPage">
            <ConsultantBox>
              {data.map((Record, counselor) => {
                return (
                  <Consultant key={counselor} onClick={() => setId(Record.id)}>
                    <StyledGrid>
                      <div>
                        <ImageWrap>
                          <Image
                            src={Record.profileImageUrl}
                            width={240}
                            height={320}
                            alt="상담사 사진"
                          />
                        </ImageWrap>
                      </div>
                      <Styledinformation>
                        <StyledSpan>{Record.name}</StyledSpan>
                        <StyledP>소개: {Record.shortIntroduction}</StyledP>
                        <StyledP>위치: {Record.location}</StyledP>
                        <StyledP>
                          분야
                          {Record.fields.map((f, h) => (
                            <Field key={h}>{f.desc}</Field>
                          ))}
                        </StyledP>
                      </Styledinformation>
                    </StyledGrid>
                  </Consultant>
                );
              })}
            </ConsultantBox>
          </StyledLink>
          <UpBtn onClick={onTopClick}>
            <VscArrowUp size={30} />
          </UpBtn>
        </>
      )}
    </Box>
  );
};

export default List;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const ConsultantBox = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const Consultant = styled.div`
  padding: 1.5rem;
  width: 41rem;
  height: 20rem;

  border-radius: 15px;

  background-color: #e4ffeb;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 15rem 15rem;
  grid-template-rows: 20rem;

  border-radius: 5px;
`;

const ImageWrap = styled.div`
  width: 15rem;
  height: 20rem;
`;

const Styledinformation = styled.div`
  padding-left: 2rem;
  width: 26rem;
  height: 10rem;
`;

const StyledSpan = styled.span`
  margin-bottom: 0.6rem;

  font-size: 2.1em;
  color: black;
`;

const StyledP = styled.div`
  font-size: 1.1em;
  color: gray;
`;

const Field = styled.div`
  width: 5rem;
  height: 2rem;
  margin-top: 0.4rem;

  text-align: center;

  background-color: white;

  border-radius: 5rem;
`;

const ResultNum = styled.p`
  font-size: 1.5rem;
  color: gray;
  margin-bottom: 1rem;
`;

const UpBtn = styled.button`
  color: #009809;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  position: fixed;
  right: 7rem;
  bottom: 2rem;
  box-shadow: 0px 5px 8px #d6d6d6;
  border: none;
  background-color: #e8ffe3;
`;
