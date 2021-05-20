import "./squad.css";
import styled, { css } from 'styled-components';
import student from "./students.svg";
import donor from "./donors.svg";
import cohort from "./cohorts.svg";
function Squad() {
  return (
    <div class="container-center-horizontal">
      <div className="frame-247 screen">
        <Title>Our Squad</Title>
        <FlexRow>
          <OverlapGroup2>
            <Group137 src={student} />
            <Students>Students</Students>
          </OverlapGroup2>
          <OverlapGroup1>
            <Mentors>Mentors</Mentors>
          </OverlapGroup1>
          <OverlapGroup>
            <Group137 src={cohort} />
            <Group1371 src={donor} />
            <Cohorts>Cohorts</Cohorts>
            <IndividualDonors>Individual Donors</IndividualDonors>
          </OverlapGroup>
        </FlexRow>
        <FlexRow1>
          <Number>177</Number>
          <Number1>166</Number1>
          <Number2>6</Number2>
          <Number3>37</Number3>
        </FlexRow1>
      </div>
    </div>
  );
}

export default Squad;
const Title = styled.h1`
color: var(--blue-zodiac);
font-family: var(--font-family-lato);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 605px;
  min-height: 64px;
  margin-right: 37.06px;
  min-width: 605px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const FlexRow = styled.div`
  height: 234px;
  display: flex;
  align-items: flex-end;
  min-width: 1105px;
  align-self: flex-start;
  margin-top: 14px;
  margin-left: -43.1px;
`;

export const OverlapGroup2 = styled.div`
  width: 255px;
  height: 232px;
  position: relative;
`;

export const Group137 = styled.img`
  position: absolute;
  width: 239px;
  height: 232px;
  top: 0;
  left: 0;
`;

export const Students = styled.div`
color: var(--nepal);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-l);
font-weight: 900;
font-style: normal;

  position: absolute;
  width: 212px;
  top: 177px;
  left: 43px;
  mix-blend-mode: normal;
  letter-spacing: 3.36px;
  line-height: 33.2px;
  white-space: nowrap;
`;

export const OverlapGroup1 = styled.div`
  height: 232px;
  align-self: flex-start;
  margin-left: 38px;
  display: flex;
  padding: 24.2px 4px;
  align-items: flex-end;
  min-width: 239px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/609a4ab758aa80813ef29783/releases/609feb26e13417bccb8c4f68/img/group-137-1@2x.svg);
  background-size: 100% 100%;
`;

export const Mentors = styled.div`
color: var(--nepal);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-l);
font-weight: 900;
font-style: normal;

  width: 212px;
  min-height: 29px;
  min-width: 212px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 3.36px;
  line-height: 33.2px;
  white-space: nowrap;
`;

export const OverlapGroup = styled.div`
  width: 497px;
  height: 232px;
  position: relative;
  margin-left: 75px;
`;

export const Group1371 = styled.img`
  position: absolute;
  width: 239px;
  height: 232px;
  top: 0;
  left: 258px;
`;

export const Cohorts = styled.div`
color: var(--nepal);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-l);
font-weight: 900;
font-style: normal;

  position: absolute;
  width: 212px;
  top: 177px;
  left: 0;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 3.36px;
  line-height: 33.2px;
  white-space: nowrap;
`;

export const IndividualDonors = styled.div`
color: var(--nepal);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-l);
font-weight: 900;
font-style: normal;

  position: absolute;
  width: 212px;
  top: 177px;
  left: 223px;
  mix-blend-mode: normal;
  text-align: right;
  letter-spacing: 3.36px;
  line-height: 33.2px;
  white-space: nowrap;
`;

export const FlexRow1 = styled.div`
  height: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 957px;
  margin-top: 9px;
  margin-right: 7.37px;
`;

export const Number = styled.div`
color: var(--cerise);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 90px;
  min-height: 49px;
  min-width: 90px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const Number1 = styled.div`
color: var(--azure-radiance);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 106px;
  min-height: 49px;
  margin-left: 203px;
  min-width: 106px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const Number2 = styled.div`
color: var(--cerise);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 82px;
  min-height: 49px;
  margin-left: 212px;
  min-width: 82px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const Number3 = styled.div`
color: var(--azure-radiance);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  width: 82px;
  min-height: 49px;
  margin-left: 179px;
  min-width: 82px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const MerriweatherBlackNepal24px = css`
  color: var(--nepal);
  font-family: var(--font-family-merriweather);
  font-size: var(--font-size-l);
  font-weight: 900;
  font-style: normal;
`;

export const MerriweatherBlackCerise40px = css`
  color: var(--cerise);
  font-family: var(--font-family-merriweather);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;

export const MerriweatherBlackAzureRadiance40px = css`
  color: var(--azure-radiance);
  font-family: var(--font-family-merriweather);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;

export const LatoBlackBlueZodiac40px = css`
  color: var(--blue-zodiac);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;
