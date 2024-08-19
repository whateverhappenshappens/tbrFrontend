import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import Alumni from "../../components/Alumini/Alumni";
import Events from "../events/Events";
import DarkBanner from "../../components/main/DarkBanner/DarkBanner";
import ExplorePrograms from "../../components/main/explore-programs/ExplorePrograms";
import Explore from "../../components/main/explore/Explore";
import KeyAttribute from "../../components/main/explore/KeyAttribute";
import HowWeAreDifferent from "../../components/main/HowWeAreDifferent";
import MediaPresence from "../../components/MediaPresence/MediaPresence";
import times from "../../assets/The-Economic_TOI_Logo_Website.jpg";
import bus from "../../assets/images.jpeg";
import startup from "../../assets/930c25d5814cff37094e38d67a48566d.jpeg";
import company from "../../assets/yourstory.png";
import connect from "../../assets/connect.png";
import yourstory from "../../assets/iaf.jpg";
import extra from "../../assets/78.jpeg";
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
//Hiring companies
import encrupt from "../../assets/hiring_partner/encryptarx-01.png";
import coding from "../../assets/hiring_partner/thecodinghour logo-01.png";
import casa from "../../assets/hiring_partner/casa altair-01.png";
import marqberry from "../../assets/hiring_partner/Marquee Berry-01.png";
import karkhana from "../../assets/hiring_partner/karkhana-01.png";
import sudolearn from "../../assets/hiring_partner/sudolearn-01.png";
import skill from "../../assets/hiring_partner/Fidset Skill-01.png";
//college_images
import army from "../../assets/college/Army Institute of Technology(AIT Pune)-01.png";
import birla from "../../assets/college/Birla_Institute_of_Technology_Mesra-01.png";
import christ from "../../assets/college/Christ University-01.png";
import vit from "../../assets/college/VIT LOGO transparent-01.png";
import dtu from "../../assets/college/DTU(Delhi Technical University) 1.png";
import iit_B from "../../assets/college/IIT_Bombay_logo white-01.png";
import sambal from "../../assets/college/Indian_Institute_of_Management_Sambalpur_Logo white-01.png";
import bhuv from "../../assets/college/Indian_Institute_of_Technology_Bhubaneswar_Logo white 1-01.png";
import roorkee from "../../assets/college/Indian_Institute_of_Technology_Roorkee_logo-01.png";
import kiit from "../../assets/college/KIIT_logo white-01.png";
import kj from "../../assets/college/KJ Somaiya College of Engineering1-01.png";
import nit from "../../assets/college/NIT_Durgapur_Logo 1-01.png";
import nmims from "../../assets/college/NMIMS Bangalore 1-01-01.png";
import skit from "../../assets/college/SKIT-01.png";
import soa from "../../assets/college/SOA-PNG-01.png";
import ssu from "../../assets/college/SSU-LOGO1-1-scaled-01-01-01.jpg";
import shriram from "../../assets/college/The_Official_Logo_of_Shri_Ram_College_of_Commerce(SRCC)-01.png";
import tmsl from "../../assets/college/tmsl-logo white-01.png";
import Biggest from "../hackathon/biggest/Biggest";
import DisplayEvent from "./DisplayEvent";
const logos = [
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
const logo_college = [
    army,
    birla,
    christ,
    vit,
    dtu,
    iit_B,
    sambal,
    bhuv,
    roorkee,
    kiit,
    kj,
    nit,
    nmims,
    skit,
    soa,
    ssu,
    shriram,
    tmsl,
];
const logo = [
    encrupt,
    coding,
    casa,
    marqberry,
    karkhana,
    sudolearn,
    skill,
];
function LandingPage({ headerHeight, handle_login, pastdata, activedata, }) {
    const landingPage = useRef(null);
    useEffect(() => {
        landingPage.current.style.paddingTop = `${headerHeight}px`;
    }, [headerHeight]);
    return (_jsxs("div", { className: "landing-page", ref: landingPage, children: [_jsx(Explore, { handle_login: handle_login }), _jsx(KeyAttribute, {}), _jsx(HowWeAreDifferent, {}), _jsx(ExplorePrograms, {}), _jsx(DarkBanner, { title: "Collaborations", subtitle: "Some subtitle will be provided later about our collaborations", logos: logo_college }), _jsx(DisplayEvent, {}), _jsx(Biggest, { ActiveData: activedata }), _jsx(Events, { pastdata: pastdata }), _jsx(DarkBanner, { title: "Instructors are from", subtitle: "All of our instructors are from renowned companies with a vast knowledge on this subject matter.", logos: logos }), _jsx("hr", { className: "h-[10rem]" }), _jsx("hr", {}), _jsx(DarkBanner, { title: "Hiring Partner ", subtitle: "our partners are", logos: logo }), _jsx(MediaPresence, { mediaItems: [
                    {
                        title: "",
                        para: "TechBairn was highlighted by Economic Times as a leading innovator in technology, praised for its groundbreaking solutions and significant impact on the industry.",
                        image: times,
                        link: "https://economictimes.indiatimes.com/small-biz/sme-sector/engineering-colleges-government-anchor-bhubaneswars-edtech-ecosystem/articleshow/106690269.cms?from=mdr",
                    },
                    {
                        title: "",
                        para: "Named Best E-Learning Company of the Year 2022 by BW Business World, we are honored for our innovative approach and excellence in online education.",
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
                    },
                ] }), _jsx(Alumni, {})] }));
}
export default LandingPage;
