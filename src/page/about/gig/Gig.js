import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "./Gig.css";
import girl from "../../../assets/TBR11.png";
import image1 from "../../../assets/TBR2.jpg";
import image2 from "../../../assets/TBR3.jpg";
const Gig = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (_jsxs("div", { className: "gig", children: [_jsx("div", { className: "gig-headings", children: _jsx("p", { className: "gig-headings-head1", children: "Meet Us" }) }), _jsxs("div", { className: "mine", children: [_jsx("div", { className: "right1", children: _jsx("p", { className: "para12", children: "TechBairn, a unit of TechBairn Research Pvt. Ltd., stands as a trailblazer in the Ed-Tech industry, rapidly emerging as the leading educational and upskilling platform in the country. Offering affordable tech education and internships, our growth is backed by giants like Microsoft, Amazon, MongoDB, StartupIndia, and MSME. Our dedication to excellence has garnered significant recognition. We were featured in the Economic Times in 2024, named one of the \"20 Most Promising Startups to Watch in 2023\" by Business Connect Magazine, and honored as the \"Best E-Learning Company of the Year 2022\" by BW Business World Magazine. We proudly collaborate with premier institutions such as IIT Bombay, IIT Roorkee, IIM Sambalpur, NMIMS, DTU, VIT, and KIIT, and serve as a trusted hiring partner for over 50 companies." }) }), _jsx("div", { className: "left12", children: _jsxs(Slider, { ...settings, children: [_jsx("div", { children: _jsx("img", { className: "family", src: girl, alt: "girl" }) }), _jsx("div", { children: _jsx("img", { className: "family", src: image1, alt: "image1" }) }), _jsx("div", { children: _jsx("img", { className: "family", src: image2, alt: "image2" }) })] }) })] })] }));
};
export default Gig;
