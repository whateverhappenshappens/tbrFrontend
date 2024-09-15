import React from "react";
import Enroll from "./head/Head";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Presence from "./MediaPresence/MediaPresence"
import yourstory from "../../assets/iaf.jpg";
import Content from "./content/Content";
import times from "../../assets/The-Economic_TOI_Logo_Website.jpg";
import bus from "../../assets/images.jpeg";
import startup from "../../assets/930c25d5814cff37094e38d67a48566d.jpeg";
import company from "../../assets/yourstory.png"
import connect from "../../assets/connect.png";
import extra from "../../assets/78.jpeg"

const About: React.FC = () => {
  return (
    <div className="hire mentor">
      <Enroll />
      <Gig />
      <Experience />
      <Presence mediaItems={[
          {
            title: "",
            para: "TechBairn was highlighted by Economic Times as a leading innovator in technology, praised for its groundbreaking solutions and significant impact .",
            image: times,
            link: "https://economictimes.indiatimes.com/small-biz/sme-sector/engineering-colleges-government-anchor-bhubaneswars-edtech-ecosystem/articleshow/106690269.cms?from=mdr",
          },
          {
            title: "",
            para: "Named Best E-Learning Company of the Year 2022 by BW Business World, we are honored for our innovative approach .",
            image: bus,
            link: "https://currentaffairs.adda247.com/bw-businessworld-awards-edutech-2022-check-the-complete-list-of-winners/",
          },
          {
            title: "",
            para: "Recognized as one of the 20 Most Promising Startups to Watch in 2023 by Business Connect Magazine, showcasing our innovation and potential.",
            image: connect,
            link: "https://businessconnectindia.in/techbairn/",
          },
          {
            title: "",
            para: "TechBairn was lauded by YourStory for its innovative technology solutions, recognized as a key player with a significant impact on the industry.",
            image: company,
            link: "https://yourstory.com/companies/techbairn",
          },
          {
            title: "",
            para: "TechBairn started in a garage, where dedicated engineers created innovative software, growing into a top tech company revolutionizing various industries.",
            image: extra,
            link: "https://startupstorymedia.com/stories-2022-08-techbairn-startup-story/",
          },
          {
            title: "",
            para: "TechBairn was praised by StartupUrban as a top innovator, recognized for its groundbreaking technology solutions and substantial impact on the industry.",
            image: startup,
            link: "https://www.startupurban.com/techbairn-company-that-transposed-the-tech-education-fortuity/",
          },
          {
            title: "",
            para: "TechBairn was acclaimed by IAF India for its pioneering technology solutions, recognized as a key innovator with a substantial impact on the industry.",
            image: yourstory,
            link: "https://www.iafindia.com/mr-ashutosh-kumar-shandilya/",
          }
        ]} />
        <Content />
    </div>
  );
};

export default About;
