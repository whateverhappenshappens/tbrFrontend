import React from "react";
import "./Overview.css";
import OverviewCard from "./overviewcard/OverviewCard";
import writing from "../../../../assets/writing1.png";

const Overview: React.FC = () => {
  return (
    <div className="overview">
      <div className="overview-head">
        <p className="vr-bold">Program Overview</p>
      </div>
      <div className="overview-card">
        <OverviewCard
          image={writing}
          text="Industry recognized certification
"
        />
        <OverviewCard
          image={writing}
          text="Experience industry relative work"
        />
        <OverviewCard
          image={writing}
          text="Gain industry-relevant experience
"
        />
        <OverviewCard
          image={writing}
          text="Exclusive doubt clearing sessions
"
        />
        <OverviewCard image={writing} text="Over 6 projects completed" />
        <OverviewCard
          image={writing}
          text="Paid internships for selected students"
        />
        <OverviewCard
          image={writing}
          text="One-on-one interactive sessions
"
        />
        <OverviewCard image={writing} text="Community learning platform" />
      </div>
    </div>
  );
};

export default Overview;
