import Link from "next/link";
import styled from "styled-components";

interface IConsultant {
  href: string;
  portrait: string;
  name: string;
  introduce: string;
}

const consultant: IConsultant[] = [
  { href: "", portrait: "portrait.png", name: "조성우", introduce: "친절함" },
  { href: "", portrait: "portrait.png", name: "이예슬", introduce: "집중함" },
  { href: "", portrait: "portrait.png", name: "임정연", introduce: "고민함" },
  { href: "", portrait: "portrait.png", name: "백세희", introduce: "좋음좋음" },
];

function List() {
  return (
    <Box>
      <div>소개</div>
      <div>소개</div>
      <ConsultantBox>
        {consultant.map((each, index) => {
          return (
            <Consultant key={index}>
              <Link href={each.href}>
                <StyledGrid>
                  <StyledImgWrap>
                    <StyledImg src={each.portrait} alt="상담사 사진" />
                  </StyledImgWrap>
                  <Styledinformation>
                    <StyledSpan>{each.name}</StyledSpan>
                    <p>평점</p>
                    <p>키워드</p>
                    <StyledP>{each.introduce}</StyledP>
                  </Styledinformation>
                </StyledGrid>
              </Link>
            </Consultant>
          );
        })}
      </ConsultantBox>
    </Box>
  );
}

export default List;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConsultantBox = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  width: 44rem;
`;

const Consultant = styled.div`
  padding: 1.5rem;
  width: 25rem;
  height: 14rem;

  border: solid 1px gray;

  border-radius: 5px;

  background-color: aliceblue;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 8rem 15rem;
  grid-template-rows: 12rem;

  /* background-color: pink; */
`;

const StyledImgWrap = styled.div`
  width: 8rem;
  height: 8rem;
`;

const StyledImg = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
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
