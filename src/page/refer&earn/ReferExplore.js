import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import girlPic from "../../assets/Girl@2x.png";
import phoneCall from "../../assets/phone-call.png";
import "../../styles/components/Explore.css";
// import { UserAPI } from "../../../apis/UserAPIs";
const ReferExplore = () => {
    //   const private_test = () => {
    //     UserAPI.private_test(handle_login);
    //   };
    //   const public_test = () => {
    //     UserAPI.public_test();
    //   };
    return (_jsxs("div", { className: "explore", children: [_jsxs("div", { className: "box1 mt[10rem]", children: [_jsx("div", { className: "dont-know-text-box", children: _jsx("p", { className: "dont-know-text", children: "Refer & Earn" }) }), _jsx("div", { className: "about-techbairn", children: "Personalized Education - Speak with our professionals to choose the ideal career path that suits your needs. Step along the path to success by signing up with TechBairn!" }), _jsx("div", { className: "explore-btn cursor-pointer", children: "Explore" }), _jsx("div", { className: "explore-btn opacity-0", children: "Public Test" })] }), _jsx("div", { className: "mid-box", children: _jsx("img", { className: "clueless-girl-img", alt: "clueless girl", src: girlPic }) }), _jsxs("div", { className: "box2", children: [_jsx("p", { className: "guided-learning-text", children: "Settle your doubts" }), _jsx("p", { className: "talk-to-consultant", children: "Talk to our consultants and find your right path to start." }), _jsx("div", { className: "call-back-btn-box", children: _jsxs(NavLink, { className: "call-back-btn", to: "/request-call", children: [_jsx("img", { src: phoneCall, alt: "Phone image", className: "phone-image" }), _jsx("span", { className: "request-call-back-text", children: "Request a call back" })] }) })] })] }));
};
export default ReferExplore;
