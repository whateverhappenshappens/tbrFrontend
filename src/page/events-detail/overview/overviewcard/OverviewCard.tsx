import React from "react";
import "./OverviewCard.css";

interface props {
  image: string;
  text: string;
}

const OverviewCard: React.FC<props> = (props) => {
  return (
    <div className="overviewcard-card">
      <img src={props.image}></img>
      <p className="vr-medium">{props.text}</p>
    </div>
  );
};

export default OverviewCard;
