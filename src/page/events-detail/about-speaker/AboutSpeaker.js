import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./AboutSpeaker.css";
import profilepic from "../../../assets/Mask Group 10.png";
import linkedin from "../../../assets/linkedin.png";
const Speaker = (props) => {
    return (_jsxs("div", { className: "speaker", children: [_jsx("div", { className: "speaker-heading", children: _jsx("p", { children: "About speaker" }) }), _jsxs("div", { className: "speaker-content", children: [_jsx("div", { className: "speaker-biodata", children: props.data?.speakerExperience }), _jsxs("div", { className: "speaker-profile", children: [_jsx("img", { className: "image-personal", src: props.data?.bannerLinkPC
                                    ? `${props.data?.bannerLinkPC}`
                                    : `${profilepic}` }), _jsx("p", { className: "speaker-profile-name", children: "Robert Downey Jr." }), _jsx("p", { className: "speaker-profile-company", children: "CEO Marvel Inc." }), _jsx("a", { href: props.data?.speakerSocial, children: _jsxs("div", { className: "speaker-profile-linkedin", children: [_jsx("img", { src: linkedin, alt: "" }), _jsx("p", { children: "Let's Connect" })] }) })] })] })] }));
};
export default Speaker;
