import React from "react";
import "./HomeWork.css";
import bookLogo from "../../assets/homework--2--10@1x.png";

interface HomeWorkProp {
  color: string;
  text: string;
}

const HomeWork: React.FC<HomeWorkProp> = ({ color, text }) => {
  return (
    <div className="homework-box">
      <div className="circle" style={{ backgroundColor: color }}>
        <img className="book-logo" src={bookLogo} alt="book-logo" />
      </div>
      <p className="ellipse-description">{text}</p>
    </div>
  );
};

export default HomeWork;

