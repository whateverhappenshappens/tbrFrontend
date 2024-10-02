import React, { useEffect } from "react";
import "./CampusAssociate.css";
import Represent from "./represent/Represent";
import Associate from "./associate/Associate";
import Experience from "./experience/Experience";
import Steps from "./steps/Steps";
import Skills from "./skills/Skills";
import Roles from "./roles/Roles";
import Benefits from "./benefits/Benefits";
import Connected from "./connected/Connected";
import StudentSaying from "./studentssaying/studentsayingcards/StudentSaying";

const CampusAssociate: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="container1 mt-[5rem]">
      <Represent />
      <Associate />
      <Experience />
      <Steps />
      <Skills />
      <Roles />
      <Benefits />
      <StudentSaying />
      <Connected />
    </div>
  );
};

export default CampusAssociate;
