import styled, { css } from 'styled-components';
import './achievements.css';
import Lscroll from "./left-scroll.png";
import Rscroll from "./right-scroll.png";

function Achievements() {
  return (
    <div class="container-center-horizontal">
      <div className="frame-247 screen">
        <OverlapGroup>
          <Group385>
            <Title>Accomplishments</Title>
            <Group380>
              <OverlapGroup1>
                <Group370 src="https://anima-uploads.s3.amazonaws.com/projects/609a4ab758aa80813ef29783/releases/609f64934a5b8cd6aa2fac19/img/group-370@2x.svg" />
                <Group372 src="https://anima-uploads.s3.amazonaws.com/projects/609a4ab758aa80813ef29783/releases/609f64934a5b8cd6aa2fac19/img/group-372@2x.svg" />
                <Group378 src="https://anima-uploads.s3.amazonaws.com/projects/609a4ab758aa80813ef29783/releases/609f64934a5b8cd6aa2fac19/img/group-378@2x.svg" />
              </OverlapGroup1>
            </Group380>
          </Group385>
          <Group492>
            <Vector src={Lscroll} />
          </Group492>
          <Group493>
            <Vector1 src={Rscroll} />
          </Group493>
        </OverlapGroup>
      </div>
    </div>
  );
}

export default Achievements;
const OverlapGroup = styled.div`
  width: 1052px;
  height: 364px;
  position: relative;
`;

export const Group385 = styled.div`
  position: absolute;
  width: 1000px;
  top: 0;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 364px;
`;

export const Title = styled.h1`
color: var(--blue-zodiac);
font-family: var(--font-family-lato);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 620px;
  min-height: 64px;
  margin-left: 84px;
  min-width: 620px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const Group380 = styled.div`
  height: 250px;
  margin-top: 50px;
  margin-right: 2px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 998px;
`;

export const OverlapGroup1 = styled.div`
  width: 1112px;
  height: 450px;
  position: relative;
  margin-top: -100px;
`;

export const Group370 = styled.img`
  position: absolute;
  width: 454px;
  height: 331px;
  top: 63px;
  left: 0;
`;

export const Group372 = styled.img`
  position: absolute;
  width: 390px;
  height: 346px;
  top: 56px;
  left: 722px;
`;

export const Group378 = styled.img`
  position: absolute;
  width: 574px;
  height: 450px;
  top: 0;
  left: 297px;
`;

export const Group492 = styled.div`
  position: absolute;
  height: 50px;
  top: 202px;
  left: 0;
  display: flex;
  padding: 9.1px 12.7px;
  align-items: flex-start;
  min-width: 50px;
  background-color: var(--mist-gray);
  border-radius: 25px;
`;

export const Vector = styled.img`
  width: 22px;
  height: 31px;
  mix-blend-mode: normal;
`;

export const Group493 = styled.div`
  position: absolute;
  height: 50px;
  top: 201px;
  left: 1001px;
  display: flex;
  padding: 9.1px 12.2px;
  align-items: flex-start;
  min-width: 50px;
  background-color: var(--mist-gray);
  border-radius: 25px;
  transform: rotate(179.37deg);
`;

export const Vector1 = styled.img`
  width: 23px;
  height: 31px;
  transform: rotate(-179.37deg);
  mix-blend-mode: normal;
`;

export const LatoBlackBlueZodiac40px = css`
  color: var(--blue-zodiac);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;
