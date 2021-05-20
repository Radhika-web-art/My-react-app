import React from 'react';
import "./donorship.css";

function App() {
  return <DonorShip {...donorShipData} />;
}

export default App;

function DonorShip(props) {
  const {
    rectangle392,
    subtract,
    text2,
    text1,
    ellipse4,
    csp,
    bxBxsDonateHeart,
    text3,
    text4,
    spanText,
    spanText2,
    biEmojiSmile,
    mdiHandshakeOutline,
    text14,
    doubleYourImpact,
    recognition,
    text8,
    fluentPeopleCommunity20Regular,
    makeDifference,
    text11,
    text9,
    notoManStudent,
    text7,
    text12,
    text6,
    text13,
    notoV13RdPlaceMedal,
    taxBreaks,
    text10,
    group,
    rectangle441,
    rectangle442,
    donors,
    group409,
    number,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    vector17,
    vector18,
    vector19,
    vector20,
    vector21,
    vector22,
    vector23,
    vector24,
    vector25,
    vector26,
    vector27,
    vector28,
    text16,
    number2,
    ourDonors,
    uiqTpl,
    studentsActivities,
    rectangle4,
    rectangle6,
    rectangle5,
    OJ4ELY,
    supportUs,
    text5,
    viewMore,
    vector29,
    ourCsrDonors,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    viewMore2,
    whatOurDonorsSay,
    group399,
    group400,
    group401,
    text15,
    overlapGroup2,
    ellipse5,
    text19,
    spanText3,
    spanText4,
    spanText5,
    quickLinks,
    place,
    aboutUs,
    mentorship,
    donors2,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    vector30,
    vector31,
    vector32,
    vector33,
    vector34,
    image32,
    image31,
    image35,
    image33,
    image34,
    ellipse15,
    frame4Props,
    frame20Props,
    contactProps,
    loginProps,
    frame42Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="donorship screen">
        <div className="hero">
          <div className="overlap-group2">
            <img className="rectangle-392" src={rectangle392} />
            <div className="hero-section-content">
              <div className="overlap-group4">
                <div className="overlap-group3">
                  <img className="subtract" src={subtract} />
                  <h1 className="text-2">{text2}</h1>
                </div>
                <div className="text-1">{text1}</div>
              </div>
              <Frame4 donateNow={frame4Props.donateNow} />
            </div>
          </div>
          <div className="header">
            <img className="ellipse-4" src={ellipse4} />
            <div className="csp merriweather-black-white-72px">{csp}</div>
            <Frame20
              place={frame20Props.place}
              whoWeAre={frame20Props.whoWeAre}
              mentorship={frame20Props.mentorship}
              donors={frame20Props.donors}
            />
            <Contact>{contactProps.children}</Contact>
            <Login>{loginProps.children}</Login>
          </div>
        </div>
        <div className="group-404">
          <div className="overlap-group4-1">
            <img className="bxbxs-donate-heart" src={bxBxsDonateHeart} />
            <div className="group-396">
              <div className="overlap-group2-1">
                <div className="text-3 lato-black-blue-zodiac-40px">{text3}</div>
                <div className="text-4 lato-normal-nepal-21px">{text4}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group1">
          <div className="group-407">
            <div className="flex-col-3">
              <div className="benefits-you-get">
                <span className="span0-2 lato-black-blue-zodiac-40px">{spanText}</span>
                <span className="span1-1 ">{spanText2}</span>
              </div>
              <div className="overlap-group2-4">
                <img className="biemoji-smile" src={biEmojiSmile} />
                <img className="mdihandshake-outline" src={mdiHandshakeOutline} />
                <div className="text-14 lato-normal-nepal-21px">{text14}</div>
              </div>
            </div>
            <div className="flex-row-2">
              <div className="flex-col-4">
                <div className="overlap-group3-2">
                  <div className="double-your-impact poppins-bold-blue-zodiac-20px">{doubleYourImpact}</div>
                  <div className="recognition poppins-bold-blue-zodiac-20px">{recognition}</div>
                </div>
                <div className="flex-row">
                  <div className="flex-col-1">
                    <div className="text-8 lato-normal-nepal-21px">{text8}</div>
                    <img className="fluentpeople-co-nity-20-regular" src={fluentPeopleCommunity20Regular} />
                    <div className="make-difference poppins-bold-blue-zodiac-20px">{makeDifference}</div>
                    <div className="text-11 lato-normal-nepal-21px">{text11}</div>
                  </div>
                  <div className="flex-col-6">
                    <div className="text-9 lato-normal-nepal-21px">{text9}</div>
                    <img className="notoman-student" src={notoManStudent} />
                    <div className="text-7 poppins-bold-blue-zodiac-20px">{text7}</div>
                    <div className="text-12 lato-normal-nepal-21px">{text12}</div>
                  </div>
                </div>
              </div>
              <div className="flex-col-5">
                <div className="text-6 poppins-bold-blue-zodiac-20px">{text6}</div>
                <div className="text-13 lato-normal-nepal-21px">{text13}</div>
                <img className="noto-v13rd-place-medal" src={notoV13RdPlaceMedal} />
                <div className="tax-breaks poppins-bold-blue-zodiac-20px">{taxBreaks}</div>
                <div className="text-10 lato-normal-nepal-21px">{text10}</div>
              </div>
            </div>
          </div>
          <img className="group-3" src={group} />
        </div>
        <div className="group-476">
          <div className="overlap-group6">
            <img className="rectangle-441" src={rectangle441} />
            <img className="rectangle-442" src={rectangle442} />
            <div className="group-472">
              <div className="group-469">
                <div className="overlap-group7">
                  <div className="donors merriweather-black-blue-zodiac-24px">{donors}</div>
                  <img className="group-409-1" src={group409} />
                </div>
                <div className="number">{number}</div>
              </div>
              <div className="group-470">
                <div className="overlap-group2-5">
                  <img
                    className="vector-13"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-2@2x.svg"
                  />
                  <img className="vector-16" src={vector2} />
                  <img className="vector-5" src={vector3} />
                  <img className="vector-23" src={vector4} />
                  <img className="vector-30" src={vector5} />
                  <img className="vector-6" src={vector6} />
                  <img className="vector-22" src={vector7} />
                  <img className="vector-26" src={vector8} />
                  <img className="vector-10" src={vector9} />
                  <div className="group-2">
                    <img className="vector-28" src={vector10} />
                    <img className="vector-20" src={vector11} />
                  </div>
                  <img className="vector-27" src={vector12} />
                  <img className="vector-12" src={vector13} />
                  <img className="vector-18" src={vector14} />
                  <img className="vector-25" src={vector15} />
                  <img className="vector-19" src={vector16} />
                  <div className="group-1">
                    <div className="overlap-group3-1">
                      <img className="vector-1" src={vector17} />
                      <img className="vector-11" src={vector18} />
                      <img className="vector-14" src={vector19} />
                      <img className="vector-3" src={vector20} />
                      <div className="group">
                        <div className="overlap-group4-2">
                          <img className="vector-1" src={vector21} />
                          <img className="vector-29" src={vector22} />
                          <img className="vector-21" src={vector23} />
                          <img className="vector-9" src={vector24} />
                        </div>
                      </div>
                      <img className="vector-7" src={vector25} />
                    </div>
                    <div className="group-4">
                      <div className="overlap-group5">
                        <img className="vector-8" src={vector26} />
                        <img className="vector-24" src={vector27} />
                        <img className="vector-15" src={vector28} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-16 merriweather-black-blue-zodiac-24px">{text16}</div>
                <div className="number-1">{number2}</div>
              </div>
            </div>
          </div>
          <div className="our-donors lato-black-blue-zodiac-40px">{ourDonors}</div>
        </div>
        <div className="group-387">
          <img className="x" src={uiqTpl} />
          <div className="group-383">
            <div className="students-activities lato-black-blue-zodiac-40px">{studentsActivities}</div>
            <div className="frame-79">
              <img className="rectangle-4" src={rectangle4} />
              <img className="rectangle-6" src={rectangle6} />
              <img className="rectangle-5" src={rectangle5} />
            </div>
          </div>
          <img className="x-1" src={OJ4ELY} />
        </div>
        <div className="group-397">
          <div className="group-387-1">
            <div className="support-us lato-black-blue-zodiac-40px">{supportUs}</div>
            <div className="overlap-group2-3">
              <div className="text-5 lato-normal-nepal-21px">{text5}</div>
              <div className="view-more-1">{viewMore}</div>
            </div>
            <img className="vector-4" src={vector29} />
          </div>
          <Frame4 donateNow={frame42Props.donateNow} className="frame-5" />
        </div>
        <div className="our-csr-donors lato-black-blue-zodiac-40px">{ourCsrDonors}</div>
        <div className="overlap-group">
          <div className="rectangle-15"></div>
          <img className="image-50" src={image50} />
          <img className="image-51" src={image51} />
          <img className="image-52" src={image52} />
          <img className="image-53" src={image53} />
          <img className="image-54" src={image54} />
          <img className="image-55" src={image55} />
          <div className="view-more">{viewMore2}</div>
        </div>
        <div className="group-409">
          <div className="what-our-donors-say lato-black-blue-zodiac-40px">{whatOurDonorsSay}</div>
          <div className="overlap-group5-1">
            <div className="group-402">
              <div className="overlap-group2-2">
                <img className="group-399" src={group399} />
                <img className="group-400" src={group400} />
                <img className="group-401" src={group401} />
              </div>
            </div>
            <div className="text-15 lato-normal-nepal-21px">{text15}</div>
          </div>
        </div>
        <div className="group-490">
          <div className="overlap-group8">
            <div className="footer">
              <div className="overlap-group2-6" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="footer-1">
                  <div className="flex-col-2">
                    <div className="flex-row-1">
                      <img className="ellipse-5" src={ellipse5} />
                      <div className="text-19">{text19}</div>
                    </div>
                    <div className="text-18 merriweather-normal-zircon-18px">
                      <span className="span0-1 merriweather-normal-zircon-18px">{spanText3}</span>
                      <span className="span1-2 merriweather-normal-zircon-18px">{spanText4}</span>
                      <span className="span2-1 merriweather-normal-zircon-16px">{spanText5}</span>
                    </div>
                  </div>
                  <div className="flex-row-4">
                    <div className="flex-col">
                      <div className="quick-links">{quickLinks}</div>
                      <div className="frame-37">
                        <div className="place merriweather-normal-white-16px">{place}</div>
                        <div className="frame-37-item merriweather-normal-white-16px">{aboutUs}</div>
                        <div className="frame-37-item merriweather-normal-white-16px">{mentorship}</div>
                        <div className="frame-37-item merriweather-normal-white-16px">{donors2}</div>
                      </div>
                    </div>
                    <div className="text-17 merriweather-normal-zircon-18px">
                      <span>{spanText6}</span>
                      <span className="span1 ">{spanText7}</span>
                      <span className="span2 merriweather-normal-zircon-16px">{spanText8}</span>
                      <span className="span3 ">{spanText9}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-489">
              <img className="vector" src={vector30} />
              <img className="vector-2" src={vector31} />
              <img className="vector-2" src={vector32} />
              <img className="vector-2" src={vector33} />
              <div className="codicontwitter">
                <img className="vector-17" src={vector34} />
              </div>
            </div>
          </div>
        </div>
        <img className="image-32" src={image32} />
        <div className="flex-row-3">
          <img className="image-31" src={image31} />
          <img className="image-35" src={image35} />
          <img className="image-33" src={image33} />
          <img className="image-34" src={image34} />
          <img className="ellipse-15" src={ellipse15} />
        </div>
      </div>
    </div>
  );
}


function Frame4(props) {
  const { donateNow, className } = props;

  return (
    <div className={`frame-4 ${className || ""}`}>
      <div className="fa-soliddonate">
        <img
          className="vector-31"
          src="https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector@2x.svg"
        />
      </div>
      <div className="donate-now merriweather-bold-white-20px2">{donateNow}</div>
    </div>
  );
}


function Frame20(props) {
  const { place, whoWeAre, mentorship, donors } = props;

  return (
    <div className="frame-20">
      <div className="place-1 merriweather-bold-cerise-20px">{place}</div>
      <div className="who-we-are merriweather-bold-white-20px-22">{whoWeAre}</div>
      <div className="mentorship merriweather-bold-white-20px-22">{mentorship}</div>
      <div className="donors-1 merriweather-bold-white-20px-22">{donors}</div>
    </div>
  );
}


function Contact(props) {
  const { children } = props;

  return (
    <div className="contact">
      <div className="contact-us merriweather-light-tory-blue-16px">{children}</div>
    </div>
  );
}


function Login(props) {
  const { children } = props;

  return (
    <div className="login">
      <div className="login-1 merriweather-light-tory-blue-16px">{children}</div>
    </div>
  );
}

const frame4Data = {
    donateNow: "Donate Now",
};

const frame20Data = {
    place: "Home",
    whoWeAre: "Who we are",
    mentorship: "Mentorship",
    donors: "Donors",
};

const contactData = {
    children: "Contact us",
};

const loginData = {
    children: "Login",
};

const frame42Data = {
    donateNow: "Donate Now",
};

const donorShipData = {
    rectangle392: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/rectangle-392-1@1x.svg",
    subtract: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/subtract-1@1x.svg",
    text2: "EVERYONE COULD BE A HERO",
    text1: "We are looking for your support",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    csp: "csp",
    bxBxsDonateHeart: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/bx-bxs-donate-heart@1x.jpg",
    text3: "Importance of Donorship",
    text4: "Donar place a crucial role in student’s life.Donar is a person who makes students life colourful with his valuable donations.Donar trust his/her student,donar trust can make a student responsible and committed.student is very transparent to the donar.student accustomed to, true to his word with his donar,which is an exceptional quality.",
    spanText: "Benefits ",
    spanText2: "You Get",
    biEmojiSmile: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/bi-emoji-smile@1x.jpg",
    mdiHandshakeOutline: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/mdi-handshake-outline@1x.jpg",
    text14: "Career Saathi Program is a selective student support program for the meritorious",
    doubleYourImpact: "Double Your Impact",
    recognition: "Recognition",
    text8: "Career Saathi Program is a selective student support program for the meritorious",
    fluentPeopleCommunity20Regular: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/fluent-people-community-20-regular@1x.jpg",
    makeDifference: "Make difference",
    text11: "Career Saathi Program is a selective student support program for the meritorious",
    text9: "Career Saathi Program is a selective student support program for the meritorious",
    notoManStudent: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/noto-man-student@1x.jpg",
    text7: "lmpact Student’s Life",
    text12: "Career Saathi Program is a selective student support program for the meritorious",
    text6: "Become More Thankful",
    text13: "Career Saathi Program is a selective student support program for the meritorious",
    notoV13RdPlaceMedal: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/noto-v1-3rd-place-medal@1x.jpg",
    taxBreaks: "Tax Breaks",
    text10: "Career Saathi Program is a selective student support program for the meritorious",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/group@1x.jpg",
    rectangle441: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/rectangle-441@1x.svg",
    rectangle442: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/rectangle-442@2x.svg",
    donors: "Donors",
    group409: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/group-409@2x.svg",
    number: "100",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-3@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-4@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-5@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-7@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-8@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-9@2x.svg",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-10@2x.svg",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-16@2x.svg",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-17@2x.svg",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-11@2x.svg",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-12@2x.svg",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-13@2x.svg",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-14@2x.svg",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-15@2x.svg",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector@2x.png",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-19@2x.svg",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-20@2x.svg",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-21@2x.svg",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector@2x.png",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-24@2x.svg",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-25@2x.svg",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-26@2x.svg",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-22@2x.svg",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-27@2x.svg",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-28@2x.svg",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-29@2x.svg",
    text16: "Single Student Donors",
    number2: "25",
    ourDonors: "Our Donors",
    uiqTpl: "",
    studentsActivities: "Students Activities",
    rectangle4: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/rectangle-4@2x.png",
    rectangle6: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/rectangle-6@2x.png",
    rectangle5: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/rectangle-5@2x.png",
    OJ4ELY: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/-@2x.svg",
    supportUs: "Support Us",
    text5: "Donar place a crucial role in student’s life.Donar is a person who makes students life colourful with his valuable donations.Donar trust his/her student,donar trust can make a student responsible and committed.",
    viewMore: "View more>>",
    vector29: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector@1x.jpg",
    ourCsrDonors: "Our CSR Donors",
    image50: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-50@1x.jpg",
    image51: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-51@1x.jpg",
    image52: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-52@1x.jpg",
    image53: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-53@1x.jpg",
    image54: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-54@1x.jpg",
    image55: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-55@1x.jpg",
    viewMore2: "View more>>",
    whatOurDonorsSay: "What Our Donors Say",
    group399: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/group-399@2x.svg",
    group400: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/group-400@2x.svg",
    group401: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/group-401@2x.svg",
    text15: "Donar place a crucial role in student’s life.Donar is a person who makes students life colourful with his valuable donations.Donar trust his/her student",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/footer-background-1@1x.svg",
    ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/ellipse-5@2x.png",
    text19: "CAREER SATHI PROGRAM",
    spanText3: "ABOUT US",
    spanText4: <><br /><br /></>,
    spanText5: "Over the last 15 years, Nirmaan Organization has impacted 1+ million beneficiaries through Education, Livelihoods and Social Leadership initiatives across 8 states of India",
    quickLinks: "QUICK LINKS",
    place: "Home",
    aboutUs: "About us",
    mentorship: "Mentorship",
    donors2: "Donors",
    spanText6: <>CONTACT US<br /></>,
    spanText7: <><br /></>,
    spanText8: <>Phone : +91 9000276903<br />Email : contact@nirmaan.org<br />Address : H.No. 1-98/9/3, Flat No. 401, Plot No. 3, Jaihind Enclave, Madhapur, Hyderabad - 500081</>,
    spanText9: ".",
    vector30: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-32@2x.svg",
    vector31: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-31@2x.svg",
    vector32: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-30@2x.svg",
    vector33: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-33@2x.svg",
    vector34: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-34@2x.svg",
    image32: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    image31: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    image35: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    image33: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    image34: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    ellipse15: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    frame4Props: frame4Data,
    frame20Props: frame20Data,
    contactProps: contactData,
    loginProps: loginData,
    frame42Props: frame42Data,
};

