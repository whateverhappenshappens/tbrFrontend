import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HomeWork from "../homwork/HomeWork";
import "../../styles/components/HowWeAreDifferent.css";
const HowWeAreDifferent = () => {
    const diffs = [
        { color: "#6D87F5", text: "Affordable Quality Learning" },
        { color: "#FFEDB6", text: "Internship Opportunities" },
        { color: "#B2E2C6", text: "Community Based Learning" },
        { color: "#FECBC4", text: "Live Projects" },
    ];
    return (_jsxs("div", { className: "how-we-are-different-box", children: [_jsx("p", { className: "heading-text", children: "How we are different" }), _jsx("div", { className: "ellipse-box", children: diffs.map((diff) => (_jsx(HomeWork, { color: diff.color, text: diff.text }, diff.text))) })] }));
};
export default HowWeAreDifferent;
