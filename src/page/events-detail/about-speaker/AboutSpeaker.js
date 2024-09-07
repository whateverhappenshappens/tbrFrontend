import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./AboutSpeaker.css";
import profilepic from "../../../assets/Mask Group 10.png";
import linkedin from "../../../assets/linkedin.png";

// Define prop types or interface
const Speaker = ({ data}) => {
  return (
    _jsxs("div", { className: "speaker", children: [
      _jsx("div", { className: "speaker-heading", children: _jsx("p", { children: "About speaker" }) }),
      _jsxs("div", { className: "speaker-content", children: [
        _jsx("div", { className: "speaker-biodata", children: data?.speakerExperience || '' }),
        _jsxs("div", { className: "speaker-profile", children: [
          _jsx("img", { className: "image-personal", src: data?.speakerImageLink ? data.speakerImageLink : profilepic }),
          _jsx("p", { className: "speaker-profile-name", children: data?.speakerName || 'Name not provided' }),
          _jsx("p", { className: "speaker-profile-company", children: data?.aboutSpeaker }),
          _jsx("a", { href: data?.speakerSocial, children: _jsxs("div", { className: "speaker-profile-linkedin", children: [
            _jsx("img", { src: linkedin, alt: "LinkedIn" }),
            _jsx("p", { children: "Let's Connect" })
          ] }) })
        ] })
      ] })
    ] })
  );
};

export default Speaker;
