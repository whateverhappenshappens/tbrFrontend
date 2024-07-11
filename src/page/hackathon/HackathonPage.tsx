import React, { useState } from "react";
import "./HackathonPage.css";
import Biggest from "./biggest/Biggest";
import Buttons from "./buttons/Buttons";
import FiltersListings from "./filters-listings/Filters-Listings";
import Upcoming from "../events-detail/upcoming/Upcoming";

interface HackathonPageProps {
  Pastdata: any;
  Activedata: any;
  setEnroll: any;
  enroll: any;
  latestevent: any;
}

const HackathonPage: React.FC<HackathonPageProps> = ({
  Pastdata,
  Activedata,
  setEnroll,
  enroll,
  latestevent,
}) => {
  const [isactive, setIsactive] = useState<boolean>(true);

  const activeCallback = () => {
    setIsactive(!isactive);
    setEnroll(!enroll);
  };

  return (
    <div className="hackathon-page mt-[-14rem]">
      {/* <Biggest /> */}
      <Upcoming data={latestevent} enroll={enroll} />
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
