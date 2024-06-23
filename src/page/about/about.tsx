import React from "react";
import Enroll from "./head/Head";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Presence from "./MediaPresence/MediaPresence"
import yourstory from "../../assets/media-presence/yourstory1.png";
import Content from "./content/Content";

const About: React.FC = () => {
  return (
    <div className="hire mentor">
      <Enroll />
      <Gig />
      <Experience />
      <Presence mediaItems={[
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
        ]} />
        <Content />
    </div>
  );
};

export default About;
