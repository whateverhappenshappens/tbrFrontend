import React from "react";
import "./AboutEvents.css";
import AboutEventsCard from "./abouteventscard/AboutEventsCard";
import writing from "../../../assets/writing.png";

interface Props {
  data: any;
}

const AboutEvents: React.FC<Props> = (props) => {
  console.log(props.data);

  return (
    <div className="aboutevents">
      <div className="aboutevents-head">
        <p className="vr-bold">About Events</p>
      </div>
      <p>{props.data?.description}</p>
      {/* <div className="aboutevents-card">
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
        <AboutEventsCard
          image={writing}
          text="You will get a fixed amount of money for each referral from your student referral code."
        />
      </div> */}
    </div>
  );
};

export default AboutEvents;
