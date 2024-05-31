import React from "react";
import "./Overview.css";
import OverviewCard from "./overviewcard/OverviewCard";
import writing from "../../../assets/writing.png";

const Overview: React.FC = () => {
  return (
    <div className="overview">
      <div className="overview-head">
        <p className="vr-bold">About Events</p>
        <p className="overview-para">
          Engage in a post-event Q&A session with the instructor What will they
          gain from the webinar Connect with fellow participants through a
          dedicated networking platform, facilitating meaningful connections
          with like-minded individuals. Enjoy special discounts on upcoming
          programs or events, extending the learning journey beyond the current
          webinar.
        </p>
      </div>
      <div className="overview-card">
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code.
"
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code.
"
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code.
"
        />
        <OverviewCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
      </div>
    </div>
  );
};

export default Overview;
