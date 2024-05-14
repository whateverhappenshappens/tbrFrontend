import React from "react";
import HomeWork from "../homwork/HomeWork";
import "../../styles/components/HowWeAreDifferent.css";

interface Diff {
  color: string;
  text: string;
}

const HowWeAreDifferent: React.FC = () => {
  const diffs: Diff[] = [
    { color: "#6D87F5", text: "Affordable Quality Learning" },
    { color: "#FFEDB6", text: "Internship Opportunities" },
    { color: "#B2E2C6", text: "Community Based Learning" },
    { color: "#FECBC4", text: "Live Projects" },
  ];
  return (
    <div className="how-we-are-different-box">
      <p className="heading-text">How we are different</p>
      <div className="ellipse-box">
        {diffs.map((diff: Diff) => (
          <HomeWork key={diff.text} color={diff.color} text={diff.text} />
        ))}
      </div>
    </div>
  );
};

export default HowWeAreDifferent;
