import React, { useState, useEffect } from "react";
import "./Program.css";
import FridaySale from "./black-friday-sale/FridaySale";
import Development from "./development-box/Development";
import Course from "./course-container/Course";
import Helmet from "react-helmet";
import Help from '../../components/Help'
const Programs: React.FC = () => {
  const [value, setValue] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="mentor">
      <Helmet>
        <title>TechBairn - Programs </title>
        <meta
          name="Programs content"
          content="TechBairn Programs page."
        />
      </Helmet>
      <Help />
      <FridaySale />
      <Development value={[value, setValue]} />
      <Course value={value} />
    </div>
  );
};
export default Programs;
