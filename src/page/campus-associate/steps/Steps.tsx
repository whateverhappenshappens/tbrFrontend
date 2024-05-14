import React from "react";
import "./Steps.css";
import Circles from "./circles/Circles";
import book from "../../../assets/homework--2--10@1x.png";

const Steps: React.FC = () => {
  return (
    <div className="steps">
      <p className="steps-head1 vr-bold">Steps involved</p>
      <hr className="steps-hr" />
      <div className="circles">
        <Circles color="#6D87F5" image={book} heading="Online registration" />

        <Circles color="#FFEDB6" image={book} heading="Shortlisting" />

        <Circles color="#B2E2C6" image={book} heading="Interview" />

        <Circles color="#FECBC4" image={book} heading="Let's Get Started!" />
      </div>
    </div>
  );
};

export default Steps;
