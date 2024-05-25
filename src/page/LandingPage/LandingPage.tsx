import { useEffect, useRef } from "react";

import Alumni from "../../components/Alumini/Alumni";
import Events from "../events/Events";
import DarkBanner from "../../components/main/DarkBanner/DarkBanner";
import ExplorePrograms from "../../components/main/explore-programs/ExplorePrograms";
import Explore from "../../components/main/explore/Explore";
import KeyAttribute from "../../components/main/explore/KeyAttribute";
import HowWeAreDifferent from "../../components/main/HowWeAreDifferent";
import MediaPresence from "../../components/MediaPresence/MediaPresence";

import "../../styles/pages/LandingPage.css";

// COMPANY ICONS
import adobe from "../../assets/companies/adobe.png";
import amazon_img from "../../assets/companies/amazon.png";
import bosch from "../../assets/companies/bosch.png";
import directi from "../../assets/companies/directi.png";
import hotstar from "../../assets/companies/hotstar.png";
import ibm from "../../assets/companies/ibm.png";
import paypal from "../../assets/companies/paypal.png";
import redhat from "../../assets/companies/red-hat.png";
import samsung from "../../assets/companies/samsung.png";
import celebal from "../../assets/companies/celebal.png";
import clear from "../../assets/companies/clear.png";

import yourstory from "../../assets/media-presence/yourstory1.png";

const logos: string[] = [
  amazon_img,
  adobe,
  bosch,
  directi,
  hotstar,
  paypal,
  redhat,
  samsung,
  ibm,
  celebal,
  clear,
];
function LandingPage({ headerHeight, handle_login, activedata }: any) {
  const landingPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    landingPage.current!.style.paddingTop = `${headerHeight}px`;
  }, [headerHeight]);
  return (
    <div className="landing-page" ref={landingPage}>
      <Explore handle_login={handle_login} />
      <KeyAttribute />
      <HowWeAreDifferent />
      <ExplorePrograms />
      <DarkBanner
        title="Instructors are from"
        subtitle="All of our instructors are from renowned companies with a vast knowledge on this subject matter."
        logos={logos}
      />
      <Events activedata={activedata} />
      <DarkBanner
        title="Collaborations"
        subtitle="Some subtitle will be provided later about our collaborations"
        logos={logos}
      />
      <MediaPresence
        mediaItems={[
          {
            title: "YOURSTORY",
            para: "Heading of the Story, The first top line that will attract a lot of people to click on this, so that we can get some engagement",
            image: yourstory,
            link: "/",
          },
          {
            title: "YOURSTORY",
            para: "Heading of the Story, The first top line that will attract a lot of people to click on this, so that we can get some engagement",
            image: yourstory,
            link: "/",
          },
          {
            title: "YOURSTORY",
            para: "Heading of the Story, The first top line that will attract a lot of people to click on this, so that we can get some engagement",
            image: yourstory,
            link: "/",
          },
          {
            title: "YOURSTORY",
            para: "Heading of the Story, The first top line that will attract a lot of people to click on this, so that we can get some engagement",
            image: yourstory,
            link: "/",
          },
          {
            title: "YOURSTORY",
            para: "Heading of the Story, The first top line that will attract a lot of people to click on this, so that we can get some engagement",
            image: yourstory,
            link: "/",
          },
        ]}
      />
      <Alumni />
      {/* <StudentReviews
        reviewItems={[
          {
            name: "John Doe",
            program_name: "Program Name",
            review:
              "Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean.",
            rating: 3,
            social: "https://www.linkedin.com/in/john-doe",
          },
          {
            name: "John Doe",
            program_name: "Program Name",
            review:
              "Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean.",
            rating: 3,
            social: "https://www.linkedin.com/in/john-doe",
          },
          {
            name: "John Doe",
            program_name: "Program Name",
            review:
              "Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean.",
            rating: 3,
            social: "https://www.linkedin.com/in/john-doe",
          },
          {
            name: "John Doe",
            program_name: "Program Name",
            review:
              "Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean.",
            rating: 3,
            social: "https://www.linkedin.com/in/john-doe",
          },
          {
            name: "John Doe",
            program_name: "Program Name",
            review:
              "Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean.",
            rating: 3,
            social: "https://www.linkedin.com/in/john-doe",
          },
        ]}
      /> */}
    </div>
  );
}

export default LandingPage;
