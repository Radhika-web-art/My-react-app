import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"; //Include Heder
import Footer from "./Footer"; //Include Footer
import HomeAbout from "./home-about";
import Body from "./body.js";
import Profile from "./profile.js";
import App from "./donor-say";
import styled, { css } from 'styled-components';
//import Support from "./support-us.js";
//import Squad from "./squad.js";


import pic from "./mypic.jpg";
import Pinkbar from "./left-pink.svg";
import Aboutpic from "./about us.png";
import Bluebar from "./right-blue.svg";
import VisitsVector from "./visits vector.png";
import Visits from "./industrial visit.jpg";
import Caf from "./caf.jpg";
import CafVector from "./caf vector.png";
import Mentorship from "./mentorship.jpg";
import Rightpink from "./right-pink.svg";
import AssistanceVector from "./assistance vector.png";
import CampVector from "./camps vector.png";
import Camps from "./camps.png";
import ConferenceVector from "./selection vector.png";
import Conference from "./conference.png";
import Line from "./timeline.png";
import Read from "./girl-reading.png";
import History from "./our-history.png";


class Home2 extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <Header></Header>
        <HomeAbout></HomeAbout>
        <Profile></Profile>
        <br></br>
        <br></br>
        <App/>
        {/*<img id="studentReading" className="pic" src={Read} alt="pic" />*/}
       {/* <div class="container-center-horizontal">
        <div className="frame-247 screen">
          <Historytext>
            <Group>
              <Title>Our History</Title>
              <Text>
              The idea of serving the underprivileged has been the seed for Nirmaan.Where people hesitate to tread 
              their steps towards service, a group of students from BITS Pilani initiated the voluntary 
              efforts to serve the needy people from the lower strata. They started teaching to the children
               of mess workers and construction labor and used to visit local villagers. One day, Kashiram Ka, their 
               regular student, who worked as a Rikshawala, didn’t appear in the gathering. Wondered, the students
                visited his home and ended up with an epiphany on the conditions of life in the village of Pilani. 
                The Riskshawala had met with an accident and was bed ridden. His girl child had to drop out to help 
                her mother in day to day work, they couldn't afford medical care nor proper food - they were eating 
                roti that is cooked days ago.This encounter left a lasting impact on the students and motivated them 
                to explore deeper on one’s responsibility for a better tomorrow for others and the nation. 
              </Text>
              <br></br>
              <p className="Subtext">View more &gt; &gt;</p>
            </Group>
            <OverlapGroup1>
              <Image src={History}/>
            </OverlapGroup1>
          </Historytext>
      </div>
    </div>*/}

        <Footer></Footer>
      </div>
    );
  }
}
export default Home2;

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

export const Historytext = styled.div`

width: 774px;
height: 516px;
position: relative;
margin-left: 25px;
margin-top: -13.07px;

  

  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1436px;
`;

export const Group = styled.div`
  
  width: 774px;
  height: 516px;
  position: relative;
  margin-left: 25px;
  margin-top: -13.07px;
  left: 800px;
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
 
  width: 637px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 492px;
`;

export const FancyPlantsPlantAndPot = styled.img`
  position: absolute;
  width: 315px;
  height: 276px;
  top: 149px;
  left: 459px;
  mix-blend-mode: normal;
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


