import React, { useState } from "react";
import "./Program.css";
import FridaySale from "./black-friday-sale/FridaySale";
import Development from "./development-box/Development";
import Course from "./course-container/Course";

const Programs: React.FC = () => {
  const [value, setValue] = useState<string>("all");

  return (
    <div className="mentor">
      <FridaySale />
      <Development value={[value, setValue]} />
      <Course value={value} />
    </div>
  );
};
export default Programs;
