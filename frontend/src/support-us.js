import styled, { css } from 'styled-components';
import './support-us.css';
import support from "./support us vector.png";
import donate from "./donate-now.png";
function Support() {
  return (
    <div class="container-center-horizontal">
      <div className="frame-247 screen">
        <OverlapGroup1>
          <Title>Support Us</Title>
          <OverlapGroup>
            <Text1>
              Donar place a crucial role in student’s life.Donar is a person who makes students life colourful with his
              valuable donations.Donar trust his/her student,donar trust can make a student responsible and committed.
            </Text1>
            <ViewMore>View more&gt;&gt;</ViewMore>
          </OverlapGroup>
          <Vector src={support} />
        </OverlapGroup1>
        <Frame1>
          <FaSoliddonate>
            <Vector1 src={donate} />
          </FaSoliddonate>
          <DonateNow>Donate Now</DonateNow>
        </Frame1>
      </div>
    </div>
  );
}

export default Support;
const OverlapGroup1 = styled.div`
  width: 1047px;
  height: 306px;
  position: relative;
  margin-left: 2px;
`;

export const Title = styled.h1`
color: var(--blue-zodiac);
font-family: var(--font-family-lato);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  position: absolute;
  width: 764px;
  top: 0;
  left: 195px;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 5.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const OverlapGroup = styled.div`
  position: absolute;
  width: 1047px;
  height: 306px;
  top: 0;
  left: 0;
`;

export const Text1 = styled.div`
color: var(--nepal);
font-family: var(--font-family-lato);
font-size: var(--font-size-m);
font-weight: 400;
font-style: normal;

  position: absolute;
  width: 994px;
  top: 176px;
  left: 0;
  mix-blend-mode: normal;
  text-align: center;
  letter-spacing: 1.05px;
  line-height: 28.5px;
`;

export const ViewMore = styled.div`
color: var(--blue-zodiac);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-m);
font-weight: 400;
font-style: normal;

  position: absolute;
  width: 560px;
  top: 271px;
  left: 486px;
  mix-blend-mode: normal;
  text-align: justify;
  letter-spacing: 1.89px;
  line-height: 33px;
  text-decoration: underline;
  white-space: nowrap;
`;

export const Vector = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 95px;
  left: 523px;
  mix-blend-mode: normal;
`;

export const Frame1 = styled.div`
  height: 53px;
  margin-top: 80px;
  margin-left: 51.46px;
  display: flex;
  padding: 0 43px;
  justify-content: flex-end;
  align-items: center;
  min-width: 270px;
  background-color: var(--cerise);
  border-radius: 10px;
  mix-blend-mode: normal;
`;

export const FaSoliddonate = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  mix-blend-mode: normal;
`;

export const Vector1 = styled.img`
  width: 22px;
  height: 23px;
  margin-top: -0.5px;
  mix-blend-mode: normal;
`;

export const DonateNow = styled.div`
color: var(--white-2);
font-family: var(--font-family-merriweather);
font-size: var(--font-size-s);
font-weight: 700;
font-style: normal;

  min-height: 28px;
  margin-left: 10px;
  min-width: 150px;
  mix-blend-mode: normal;
  letter-spacing: 2.8px;
  line-height: 27.7px;
  white-space: nowrap;
`;

export const LatoBlackBlueZodiac40px = css`
  color: var(--blue-zodiac);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;

export const LatoNormalNepal21px = css`
  color: var(--nepal);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

export const MerriweatherNormalBlueZodiac21px = css`
  color: var(--blue-zodiac);
  font-family: var(--font-family-merriweather);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

export const MerriweatherBoldWhite20px2 = css`
  color: var(--white-2);
  font-family: var(--font-family-merriweather);
  font-size: var(--font-size-s);
  font-weight: 700;
  font-style: normal;
`;
