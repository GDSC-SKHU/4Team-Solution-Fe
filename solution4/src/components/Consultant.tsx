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
      {/* <ul>
        <li> */}
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
                </Styledinformation>
              </StyledGrid>
              <StyledIntroduceWrap>
                <StyledP>{each.introduce}</StyledP>
              </StyledIntroduceWrap>
            </Link>
          </Consultant>
        );
      })}
      {/* </li>
      </ul> */}
    </ConsultantBox>
  );
}

export default List;

const ConsultantBox = styled.ul`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background-color: orangered;

  width: 50rem;
  height: 100%;
`;

const Consultant = styled.li`
  padding: 2rem;
  width: 20rem;
  height: 10rem;

  background-color: green;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 5rem 15rem;
  grid-template-rows: 5rem;
`;

const StyledImgWrap = styled.div`
  width: 5rem;
  height: 5rem;
`;

const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const Styledinformation = styled.div`
  padding-left: 2rem;
  width: 10rem;
  height: 5rem;
`;
const StyledIntroduceWrap = styled.div`
  padding-top: 2rem;
  width: 20rem;
  height: 5rem;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  color: white;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: white;
`;
