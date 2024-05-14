import React, { useState } from "react";
import "./HackathonPage.css";
import Biggest from "./biggest/Biggest";
import Buttons from "./buttons/Buttons";
import FiltersListings from "./filters-listings/Filters-Listings";

interface HackathonPageProps {
  Pastdata: any;
  Activedata: any;
}

const HackathonPage: React.FC<HackathonPageProps> = ({
  Pastdata,
  Activedata,
}) => {
  const [isactive, setIsactive] = useState<boolean>(true);

  const activeCallback = () => {
    setIsactive(!isactive);
  };

  return (
    <div className="hackathon-page">
      <Biggest />
      <Buttons
        activeCallback={activeCallback}
        Pastdata={Pastdata}
        Activedata={Activedata}
      />
      <FiltersListings
        isactive={isactive}
        Pastdata={Pastdata}
        Activedata={Activedata}
      />
    </div>
  );
};

export default HackathonPage;
