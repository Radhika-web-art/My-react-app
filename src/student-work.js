import styled, { css } from 'styled-components';
import './student-work.css';
import work1 from "./work1.png";
import work2 from "./work2.png";
import work3 from "./work3.png";


function Work() {
  return (
    <Group383>
      <Title>Students Activities</Title>
      <Frame79>
        <Rectangle4 src={work1} />
        <Rectangle6 src={work2} />
        <Rectangle5 src={work3} />
      </Frame79>
    </Group383>
  );
}

export default Work;
export const Group383 = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 366px;
`;

export const Title = styled.h1`
color: var(--blue-zodiac);
font-family: var(--font-family-lato);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 600px;
  min-height: 64px;
  margin-right: 8.15px;
  min-width: 600px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const Frame79 = styled.div`
  height: 254px;
  margin-top: 48px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 998px;
`;

export const Rectangle4 = styled.img`
  width: 324px;
  height: 234px;
  mix-blend-mode: normal;
  object-fit: cover;
`;

export const Rectangle6 = styled.img`
  width: 249px;
  height: 241px;
  margin-left: 40px;
  mix-blend-mode: normal;
  object-fit: cover;
`;

export const Rectangle5 = styled.img`
  width: 345px;
  height: 246px;
  margin-left: 40px;
  mix-blend-mode: normal;
  object-fit: cover;
`;

export const LatoBlackBlueZodiac40px = css`
  color: var(--blue-zodiac);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;
