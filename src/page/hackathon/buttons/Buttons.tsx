import React from "react";
import "./Buttons.css";
import { useState } from "react";

interface HackathonPageProps {
  Pastdata: any;
  Activedata: any;
  activeCallback: any;
}

const Buttons: React.FC<HackathonPageProps> = ({
  Activedata,
  Pastdata,
  activeCallback,
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const upcomingBackgroundColor = isToggled ? "white" : "#6D87F5";
  const pastBackgroundColor = isToggled ? "#6D87F5" : "white";
  const upcomingTextColor = isToggled ? "#6D87F5" : "white";
  const pastTextColor = isToggled ? "white" : "#6D87F5";

  const makeTrue = async () => {
    setIsToggled(false);
    activeCallback();
  };

  const makeFalse = async () => {
    setIsToggled(true);
    activeCallback();
  };
  return (
    <div className="events-buttons-container">
      <div className="events-buttons">
        <button
          style={{
            backgroundColor: upcomingBackgroundColor,
            color: upcomingTextColor,
          }}
          onClick={makeTrue}
          className="events-button-upcoming"
        >
          <p className="visbyroundCF bold">
            Active <br />
            Events
          </p>
        </button>

        <button
          style={{ backgroundColor: pastBackgroundColor, color: pastTextColor }}
          onClick={makeFalse}
          className="events-button-past"
        >
          <p className="visbyroundCF bold">
            Past <br /> Events
          </p>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
