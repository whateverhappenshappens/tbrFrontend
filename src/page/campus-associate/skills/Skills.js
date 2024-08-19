import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Skills.css";
import girl from "../../../assets/Girl headphone@2x.png";
import Rectangles from "./rectangles/Rectangles";
const Skills = () => {
    const paragraphs = [
        "1. Must be a college student",
        "2. Passionate about campus associate role",
        "3. Strong leadership",
        "4. Proficient in team management",
        "5. Effective persuasion",
        "6.  Excellent communication",
    ];
    return (_jsxs("div", { className: "skills", children: [_jsx("div", { className: "skills-img", children: _jsx("img", { src: girl, alt: "girl" }) }), _jsxs("div", { className: "skills-required", children: [_jsx("p", { className: "skills-required-heading vr-bold", children: "Skills Required" }), _jsx("div", { className: "skills-required-rect", children: paragraphs.map((paragraph, index) => (_jsx(Rectangles, { paragraph: paragraph }, index))) })] })] }));
};
export default Skills;
