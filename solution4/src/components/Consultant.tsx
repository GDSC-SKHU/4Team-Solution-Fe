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
  );
}

export default List;

const ConsultantBox = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  width: 44rem;
  height: 100%;
`;

const Consultant = styled.div`
  padding: 2rem;
  width: 40rem;
  height: 10rem;
  

  border: solid 1px gray;

  border-radius: 5px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 10rem 30rem;
  grid-template-rows: 10rem;
`;

const StyledImgWrap = styled.div`
  width: 10rem;
  height: 10rem;
`;

const StyledImg = styled.img`
  width: 10rem;
  height: 10rem;

  border-radius: 50%;
`;

const Styledinformation = styled.div`
  padding-left: 2rem;
  width: 10rem;
  height: 5rem;
`;

const StyledSpan = styled.span`
  font-size: 2.5rem;
  color: gray;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: white;
`;
