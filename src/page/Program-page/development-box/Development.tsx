import React from "react";
import "./Development.css";

interface Props {
  value: any;
}

const Development: React.FC<Props> = ({ value }) => {
  const [data, setData] = value;

  const handleAll = () => {
    setData("all");
  };

  const handleWeb = () => {
    setData("web");
  };

  const handleMl = () => {
    setData("ml");
  };

  const handleCode = () => {
    setData("code");
  };

  const handleIot = () => {
    setData("iot");
  };

  return (
    <div className="development-box">
      <div className="all-box">
        <button onClick={handleAll}>All</button>
      </div>
      <div className="web-development-box">
        <button onClick={handleWeb}>Web Development</button>
      </div>
      <div className="machine-learning-box">
        <button onClick={handleMl}>Machine Learning</button>
      </div>
      <div onClick={handleCode} className="machine-learning-box">
        <button>Coding</button>
      </div>
      <div onClick={handleIot} className="machine-learning-box">
        <button>IOT</button>
      </div>
    </div>
  );
};
export default Development;
