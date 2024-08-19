import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Steps.css";
import Circles from "./circles/Circles";
import book from "../../../assets/homework--2--10@1x.png";
const Steps = () => {
    return (_jsxs("div", { className: "steps", children: [_jsx("p", { className: "steps-head1 vr-bold", children: "Steps involved" }), _jsx("hr", { className: "steps-hr" }), _jsxs("div", { className: "circles", children: [_jsx(Circles, { color: "#6D87F5", image: book, heading: "Online registration" }), _jsx(Circles, { color: "#FFEDB6", image: book, heading: "Shortlisting" }), _jsx(Circles, { color: "#B2E2C6", image: book, heading: "Interview" }), _jsx(Circles, { color: "#FECBC4", image: book, heading: "Let's Get Started!" })] })] }));
};
export default Steps;
