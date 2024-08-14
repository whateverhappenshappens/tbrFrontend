import React, { useEffect } from "react";
import "./CodeSlayer.css";
import Details from "./details/Details";
import Overview from "./overview/Overview";
import Projects from "./projects/Projects";
import Roadmap from "./roadmap/Roadmap";
import Certificate from "./certificate/Certificate";
import Concepts from "./concepts/Concepts";
import Instructor from "./instructor/Instructor";
import StudentSaying from "./studentssaying/StudentSaying";
import Faq from "./faq/Faq";
import Help from "./help/Help";

const CodeSlayer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="programs">
      <Details star={4} rating={4999} students={10000} />
      <Roadmap />
      <Overview />
      <Projects />
      <Concepts />
      <Certificate />
      <Instructor />
      <StudentSaying />
      <Faq />
      <Help />
    </div>
  );
};
export default CodeSlayer;
