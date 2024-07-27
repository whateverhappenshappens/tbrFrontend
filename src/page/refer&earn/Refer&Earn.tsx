import React from "react";
import Steps from "../campus-associate/steps/Steps";
import ReferExplore from "./ReferExplore";
import ReferFaq from "./faq/Faq";

const Refer = () => {
  return (
    <div className="pt-[10rem]">
      <ReferExplore />
      <Steps />
      <ReferFaq />
    </div>
  );
};

export default Refer;
