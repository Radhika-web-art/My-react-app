import React from 'react';
import "./our-donor.css";

function App() {
  return (
    <div className="group-510">
      <div className="group-508">
        <Group469
          donors="Donors"
          group409="https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/group-409@2x.svg"
          number="100"
        />
      </div>
      <div className="group-509">
        <Group470 {...group470Data} />
      </div>
    </div>
  );
}

export default App;

function Group469(props) {
  const { donors, group409, number } = props;

  return (
    <div className="group-469">
      <div className="overlap-group">
        <div className="donors merriweather-black-blue-zodiac-24px">{donors}</div>
        <img className="group-409" src={group409} />
      </div>
      <h1 className="number merriweather-black-cerise-40px">{number}</h1>
    </div>
  );
}


function Group470(props) {
  const {
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
    text1,
    number,
  } = props;

  return (
    <div className="group-470">
      <div className="overlap-group-1">
        <img
          className="vector-19"
          src="https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-2@2x.svg"
        />
        <img className="vector-17" src={vector2} />
        <img className="vector-10" src={vector3} />
        <img className="vector-18" src={vector4} />
        <img className="vector-23" src={vector5} />
        <img className="vector" src={vector6} />
        <img className="vector-7" src={vector7} />
        <img className="vector-25" src={vector8} />
        <img className="vector-15" src={vector9} />
        <div className="group-2">
          <img className="vector-6" src={vector10} />
          <img className="vector-12" src={vector11} />
        </div>
        <img className="vector-22" src={vector12} />
        <img className="vector-16" src={vector13} />
        <img className="vector-2" src={vector14} />
        <img className="vector-21" src={vector15} />
        <img className="vector-14" src={vector16} />
        <div className="group-3">
          <div className="overlap-group1">
            <img className="vector-1" src={vector17} />
            <img className="vector-3" src={vector18} />
            <img className="vector-24" src={vector19} />
            <img className="vector-9" src={vector20} />
            <div className="group-1">
              <div className="overlap-group2">
                <img className="vector-1" src={vector21} />
                <img className="vector-8" src={vector22} />
                <img className="vector-4" src={vector23} />
                <img className="vector-20" src={vector24} />
              </div>
            </div>
            <img className="vector-11" src={vector25} />
          </div>
          <div className="group">
            <div className="overlap-group3">
              <img className="vector-5" src={vector26} />
              <img className="vector-13" src={vector27} />
              <img className="vector-26" src={vector28} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-1 merriweather-black-blue-zodiac-24px">{text1}</div>
      <div className="number-1 merriweather-black-azure-radiance-40px">{number}</div>
    </div>
  );
}

const group470Data = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-3@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-4@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-5@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-7@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-8@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-9@2x.svg",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-10@2x.svg",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-16@2x.svg",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/vector-15@2x.svg",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-11@2x.svg",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-12@2x.svg",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-13@2x.svg",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-14@2x.svg",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-15@2x.svg",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a645e330b3043cccd32e0b/img/vector-17@2x.svg",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/vector-20@2x.svg",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/vector-19@2x.svg",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a643ba364c1639fc9855cf/img/image-31-1@2x.png",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a645e330b3043cccd32e0b/img/vector-22@2x.svg",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/vector-23@2x.svg",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/vector-24@2x.svg",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a645e330b3043cccd32e0b/img/vector-20@2x.svg",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a645e330b3043cccd32e0b/img/vector-25@2x.svg",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/vector-26@2x.svg",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/60a63e93364c1639fc9855aa/releases/60a648022c73dd1c94c9137f/img/vector-27@2x.svg",
    text1: "Single Student Donors",
    number: "25",
};

