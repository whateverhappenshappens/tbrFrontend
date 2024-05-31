import React from "react";
import "./Cards.css";

interface props {
  image: string;
  color: string;
  para: string;
}
const Cards: React.FC<props> = (props) => {
  return (
    <div className="roles-cards">
      <div
        style={{ backgroundColor: props.color }}
        className="roles-colorful-bg"
      >
        <img src={props.image} alt="" />
      </div>
      <div className="roles-cards-paragraph">
        <p className="vr-regular">{props.para}</p>
      </div>
    </div>
  );
};

export default Cards;
