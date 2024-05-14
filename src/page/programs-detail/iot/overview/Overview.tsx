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
          text="More than 6 projects


"
        />
        <OverviewCard
          image={writing}
          text=" Paid Internship to selected students after completion of program

"
        />
        <OverviewCard
          image={writing}
          text="One-on-one interactive session
"
        />
        <OverviewCard
          image={writing}
          text="Community learning platform
          "
        />
        <OverviewCard
          image={writing}
          text=" Placement preparation program

"
        />
        <OverviewCard
          image={writing}
          text="Regular assessment
"
        />
      </div>
    </div>
  );
};

export default Overview;
