import React from "react";
import "./Benefits-Card.css";

interface props {
  image: string;
  text: string;
}

const BenefitsCard: React.FC<props> = (props) => {
  return (
    <div className="benefit-card">
      <img src={props.image}></img>
      <p className="vr-medium">{props.text}</p>
    </div>
  );
};

export default BenefitsCard;
