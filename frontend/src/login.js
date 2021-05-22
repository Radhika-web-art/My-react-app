import React, { useState } from "react";
import "./login.css";

function App() {
  const [token, setToken] = useState();
  return <LOGIN {...lOGINData} setToken={setToken} />;
}

export default App;

function LOGIN(props) {
  const {
    vector3,
    rectangle421,
    undraw_Login_Re_4Vu21,
    rectangle18,
    text1,
    vector2,
    vector4,
    emailId,
    password,
    wantToBeADonar,
    spanText,
    spanText2,
    spanText3,
    place,
    login,
    bxBxArrowBack,
    vector5,
    saly6,
    login2,
    ellipse4,
    title,
    place2,
    whoWeAre,
    mentorship,
    donors,
    contactUs,
    login3,
  } = props;
  const [username, setUserName] = useState();
  const [pwd, setPassword] = useState();
  const handleClick = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email: username,
      password: pwd,
    });
    console.log(token);
    props.setToken(token.token);
  };
  async function loginUser(credentials) {
    return fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
  return (
    <div class="container-center-horizontal">
      <div className="login screen">
        <div className="overlap-group">
          <img className="vector-3" src={vector3} />
          <img className="rectangle-421" src={rectangle421} />
          <img className="undraw-loginre4vu2-1" src={undraw_Login_Re_4Vu21} />
          <div className="group-215">
            <div className="overlap-group1">
              <img className="rectangle-18" src={rectangle18} />
              <p className="text-1">{text1}</p>
              <div className="rectangle-19"></div>
              <div className="rectangle-20"></div>
              <div className="rectangle-24"></div>
              <div className="carbonpassword">
                <div className="overlap-group2">
                  <img
                    className="vector-4"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/vector@2x.svg"
                  />
                  <img className="vector-2" src={vector2} />
                </div>
              </div>
              <div className="rectangle-23"></div>
              <div className="rectangle-21"></div>
              <div className="rectangle-26"></div>
              <div className="rectangle-22"></div>
              <div className="evaemail-outline">
                <img className="vector-1" src={vector4} />
              </div>
              <div className="email-id valign-text-middle merriweather-normal-nepal-15px">
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="password valign-text-middle merriweather-normal-nepal-15px">
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="want-to-be-a-donar merriweather-normal-blue-zodiac-12px">
                {wantToBeADonar}
              </p>
              <p className="text-2">
                <span className="span merriweather-normal-nepal-12px">
                  {spanText}
                </span>
                <span className="span merriweather-normal-blue-zodiac-12px">
                  {spanText2}
                </span>
                <span className="span merriweather-normal-nepal-12px">
                  {spanText3}
                </span>
              </p>
              <div className="place">{place}</div>
              <div className="login-4">
                <input type="button" value="login" onClick={handleClick} />
              </div>
              <div
                className="bxbx-arrow-back"
                style={{ backgroundImage: `url(${bxBxArrowBack})` }}
              >
                <img className="vector" src={vector5} />
              </div>
              <img className="saly-6" src={saly6} />
              <div className="login-3">{login2}</div>
            </div>
          </div>
          <div className="header">
            <img className="ellipse-4" src={ellipse4} />
            <h1 className="title">{title}</h1>
            <div className="frame-20">
              <div className="place-1">{place2}</div>
              <div className="who-we-are merriweather-bold-blue-zodiac-20px">
                {whoWeAre}
              </div>
              <div className="mentorship merriweather-bold-blue-zodiac-20px">
                {mentorship}
              </div>
              <div className="donors merriweather-bold-blue-zodiac-20px">
                {donors}
              </div>
            </div>
            <div className="contact">
              <div className="contact-us merriweather-light-blue-zodiac-16px">
                {contactUs}
              </div>
            </div>
            <div className="login-1">
              <div className="login-2 merriweather-light-blue-zodiac-16px">
                {login3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const lOGINData = {
  vector3:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/vector-3-1@1x.svg",
  rectangle421:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/rectangle-421@1x.png",
  undraw_Login_Re_4Vu21:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/undraw-login-re-4vu2-1-1@1x.svg",
  rectangle18:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/rectangle-18@1x.svg",
  text1: "sign in to your account",
  vector2:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/vector-1@2x.svg",
  vector4:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/vector-2@2x.svg",
  emailId: "email id",
  password: "password",
  wantToBeADonar: "want to be a Donar",
  spanText: "forgot password ",
  spanText2: "Click here",
  spanText3: " to reset",
  place: "Register",
  login: "Login",
  bxBxArrowBack:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/ellipse-2-1@2x.svg",
  vector5:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/vector-4@2x.svg",
  saly6:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/saly-6@2x.png",
  login2: "Login",
  ellipse4:
    "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a64084364c1639fc9855b5/img/ellipse-4@2x.png",
  title: "csp",
  place2: "Home",
  whoWeAre: "Who we are",
  mentorship: "Mentorship",
  donors: "Donors",
  contactUs: "Contact us",
  login3: "Login",
};
