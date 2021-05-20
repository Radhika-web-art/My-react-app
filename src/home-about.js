import "./about-us.css";
import styled, { css } from 'styled-components';
import Aboutus from "./about us.png";
import Plant from "./fancy-plant.png";
import { Button } from "react-bootstrap";
import Aboutpic from "./home-about.png";

function HomeAbout() {
  return (
    <div class="container-center-horizontal">
      <div className="frame-247 screen">
          <AboutUs>
            <Group>
              <Title>About Us</Title>
              <Text>
                Career Saathi Program is a selective student support program for meritorious students who come from
                financially stressed backgrounds. CSP handpicks world-beating minds at young age’s, mentors &amp;
                assists them with all kinds of support, tracking their growth all along until they’re successfully
                employed. The support to each child ranges from administering a psychometric test, aiding in admission
                into the course of their choice, various bridge programs for a medium switch, assistance in applications
                for higher studies, entrance exams, scholarships and much more, while also equipping with next-gen
                employability skills.
              </Text>
              <br></br>
            </Group>
            <OverlapGroup1>
              <Image src={Aboutpic}/>
            </OverlapGroup1>
          </AboutUs>
      </div>
    </div>
  );
}

export default HomeAbout;
const OverlapGroup = styled.div`
  width: 1436px;
  height: 899px;
  position: relative;
`;

export const OpenDoodlesFocused = styled.img`
  position: absolute;
  width: 568px;
  height: 453px;
  top: 0;
  left: 722px;
  mix-blend-mode: normal;
`;

export const AboutUs = styled.div`


  width: 1436px;
  height: 899px;
  position: relative;

  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1436px;
`;

export const Group = styled.div`
  width: 637px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 492px;
`;

export const Title = styled.h1`
color: var(--celeste);
font-family: var(--font-family-lato-black);
font-size: var(--font-size-xl);
font-weight: 900;
font-style: normal;

  min-height: 46px;
  mix-blend-mode: normal;
  letter-spacing: 3.6px;
  line-height: 55.4px;
  white-space: nowrap;
`;

export const Text = styled.div`
  width: 635px;
  min-height: 197px;
  margin-top: 37px;
  mix-blend-mode: normal;
  font-family: var(--font-family-lato-regular);
  color: var(--nepal);
  font-size: var(--font-size-m);
  letter-spacing: 1.05px;
  line-height: 28.5px;
`;

export const Frame189 = styled.div`
  height: 30px;
  margin-top: 30px;
  display: flex;
  padding: 0 11.1px;
  justify-content: flex-end;
  align-items: center;
  min-width: 166px;
  background-color: var(--cerise);
  border-radius: 10px;
  mix-blend-mode: normal;
`;

export const LearnMore = styled.div`
  min-height: 25px;
  min-width: 142px;
  mix-blend-mode: normal;
  font-family: var(--font-family-poppins-medium);
  font-weight: 500;
  color: var(--white-2);
  font-size: var(--font-size-xs);
  letter-spacing: 2.52px;
  line-height: 24.9px;
  white-space: nowrap;
`;

export const OverlapGroup1 = styled.div`
  width: 774px;
  height: 516px;
  position: relative;
  margin-left: 25px;
  margin-top: -13.07px;
`;


export const Image = styled.img`
  position: absolute;
  width: 715px;
  height: 516px;
  top: 0;
  left: 0;
  mix-blend-mode: normal;
  object-fit: cover;
`;

export const LatoBlackCeleste40px = css`
  color: var(--celeste);
  font-family: var(--font-family-lato-black);
  font-size: var(--font-size-xl);
  font-weight: 900;
  font-style: normal;
`;


