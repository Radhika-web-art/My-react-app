import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"; //Include Heder
import Footer from "./Footer"; //Include Footer
import About from "./about-us";
import Body from "./body.js";
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


class App extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <Header></Header>
        <img id="studentReading" className="pic" src={Read} alt="pic" />
        <About></About>
      
        {/*<img id="studentReading" className="pic" src={Read} alt="pic" />*/}
        {/* <div className="container mb-5 mt-5">
        
          <h2>About Us</h2>
          <img className="pic imageRight" src={Aboutpic} alt="pic" />
          <h6>
            Career Saathi Program is a selective student support program for
            meritorious students who come from financially stressed backgrounds.
            CSP handpicks world-beating minds at young age’s, mentors & assists
            them with all kinds of support, tracking their growth all along
            until they’re successfully employed. The support to each child
            ranges from administering a psychometric test, aiding in admission
            into the course of their choice, various bridge programs for a
            medium switch, assistance in applications for higher studies,
            entrance exams, scholarships and much more, while also equipping
            with next-gen employability skills.
          </h6>
          <button type="button" onClick="red">
            Learn more
         </button>
    </div>*/}
        <div className="container">
          <h4 id="timelineHeading">
            How we achieve <br />
            The <span style={{ color: "#8890AA" }}>Im</span>possible?{" "}
          </h4>
          <br/>
          <br/>
          <br/>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    {/* <i className="fa fa-globe"></i> */}
                    <img
                      src={Conference}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">SELECTION CONFERENCE</h3>
                    <p className="description">
                      Career Saathi Program conducts selection conference to the
                      select the meritorious yet underprivilized students from
                      governament schools every year after completion of their
                      tenth standard. They conducts written test, group
                      discussion and interviews for selection.
                    </p>
                    <p className="Subtext">Attend our next selection campaign &gt; &gt;</p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                {/*    <i className="fa fa-rocket"></i>*/}
                    <img
                      src={Camps}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">RESIDENTIAL CAMPS</h3>
                    <p className="description">
                    Career Saathi Program conducts residential camps for selected students once 
                    in every six months. Various skill development programs like time management, 
                    motivational and skill enhacement sessions would be conducted in that. 
                    10 residential camps were conducted till date.
                    </p>
                    <p className="Subtext">View more &gt; &gt;</p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    {/* <i className="fa fa-globe"></i> */}
                    <img
                      src={Caf}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">CAREER ADVANCEMENT FUND</h3>
                    <p className="description">
                    Career Advancement Fund is the finacial assistance to the selected students
                    who are financially poor and unable to pay their college/coaching fees. 
                    It would be provided based on their academic performance and active participation 
                    in residential camps.
                    </p>
                    <p className="Subtext">View more &gt; &gt;</p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                {/*    <i className="fa fa-rocket"></i>*/}
                    <img
                      src={Caf}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">CAREER ASSISTANCE</h3>
                    <p className="description">
                    Career Assistance would be provided to the selected students who really needs support. 
                    which includes college admissions, hostels support, scholorships and relevant 
                    entrance exam coaching. it would be provided based on their active participation 
                    in academic and camp activities.
                    </p>
                    <p className="Subtext">View more &gt; &gt;</p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    {/* <i className="fa fa-globe"></i> */}
                    <img
                      src={Mentorship}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                    <h3 className="title">MENTORSHIP</h3>
                    <p className="description">
                    Career Saathi Program supports mentorship program. 
                    It is the one-to-one mentorship where every student would be connected with individual mentor. 
                    The connected mentor teaches and guides the students to their goal. 
                    </p>
                    <p className="Subtext">View more &gt; &gt;</p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                {/*    <i className="fa fa-rocket"></i>*/}
                    <img
                      src={Visits}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                 
                    <h3 className="title">INDUSTRIAL VISITS</h3>
                    <p className="description">
                    Career Saathi Program also conducts industrial visits to the selected students. 
                    From these visits students explore new things and learn various things. 
                    Till date CSP students visited various places like Microsoft campus, T-Hub, Google, 
                    SEBI, AILA&CONSTELLI and TEDx talks etc.. 
                    </p>
                    <p className="Subtext">View more &gt; &gt;</p>
                  </div>
                </a>
                <a href="#" className="timeline">
                  <div className="timeline-icon">
                    {/* <i className="fa fa-globe"></i> */}
                    <img
                      src={Caf}
                      alt="Conference 1"
                      height="300px"
                      width="364px"
                    />
                  </div>
                  <div className="timeline-content">
                
                    <h3 className="title">CAREER GUIDANCE/MONITORING STUDENT’S GROWTH</h3>
                    <p className="description">
                    CSP provides career guidance to the students who are in a confusion 
                    about their career. Career Saathi Program Students are continously 
                    monitored and tracked by the cohort leads in academics and in every 
                    activities.
                    </p>
                    <p className="Subtext">View more &gt; &gt;</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
         
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
