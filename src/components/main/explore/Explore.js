import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import girlPic from "../../../assets/Girl@2x.png";
import phoneCall from "../../../assets/phone-call.png";
import "../../../styles/components/Explore.css";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../../../apis/UserAPIs";
const Explore = ({ handle_login }) => {
    const Navigate = useNavigate();
    const private_test = () => {
        UserAPI.private_test(handle_login);
    };
    const public_test = () => {
        UserAPI.public_test();
    };
    const redirectProgram = () => {
        Navigate("/programs");
    };
    return (_jsxs("div", { className: "explore", children: [_jsxs("div", { className: "box1", children: [_jsxs("div", { className: "dont-know-text-box", children: [_jsx("p", { className: "dont-know-text", children: "Invest in your" }), _jsx("p", { className: "dont-know-text", children: "future with\u00A0" }), _jsx("p", { className: "dont-know-text", children: "TechBairn\u00A0" })] }), _jsx("div", { className: "about-techbairn", children: "Personalized Education - Speak with our professionals to choose the ideal career path that suits your needs. Step along the path to success by signing up with TechBairn!" }), _jsx("div", { className: "explore-btn cursor-pointer", onClick: redirectProgram, children: "Explore" }), _jsx("div", { className: "explore-btn opacity-0", onClick: () => public_test(), children: "Public Test" })] }), _jsx("div", { className: "mid-box", children: _jsx("img", { className: "clueless-girl-img", alt: "clueless girl", src: girlPic }) }), _jsxs("div", { className: "box2", children: [_jsx("p", { className: "guided-learning-text", children: "Guided Learning" }), _jsx("p", { className: "talk-to-consultant", children: "Talk to our consultants and find your right path to start." }), _jsx("div", { className: "call-back-btn-box", children: _jsxs(NavLink, { className: "call-back-btn", to: "https://docs.google.com/forms/d/e/1FAIpQLSdKJREAXanAnHM_bDf5OuKje08OHyaxXVypePaqPm0Wlv61gQ/viewform", target: "_blank", rel: "noopener noreferrer", children: [_jsx("img", { src: phoneCall, alt: "Phone image", className: "phone-image" }), _jsx("span", { className: "request-call-back-text", children: "Request a call back" })] }) })] })] }));
};
export default Explore;
