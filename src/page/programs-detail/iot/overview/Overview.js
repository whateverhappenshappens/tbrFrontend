import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Overview.css";
import OverviewCard from "./overviewcard/OverviewCard";
import writing from "../../../../assets/writing1.png";
const Overview = () => {
    return (_jsxs("div", { className: "overview", children: [_jsx("div", { className: "overview-head", children: _jsx("p", { className: "vr-bold", children: "Program Overview" }) }), _jsxs("div", { className: "overview-card", children: [_jsx(OverviewCard, { image: writing, text: "Industry recognized certification\r\n" }), _jsx(OverviewCard, { image: writing, text: "Experience industry relative work" }), _jsx(OverviewCard, { image: writing, text: "More than 6 projects\r\n\r\n\r\n" }), _jsx(OverviewCard, { image: writing, text: " Paid Internship to selected students after completion of program\r\n\r\n" }), _jsx(OverviewCard, { image: writing, text: "One-on-one interactive session\r\n" }), _jsx(OverviewCard, { image: writing, text: "Community learning platform\r\n          " }), _jsx(OverviewCard, { image: writing, text: " Placement preparation program\r\n\r\n" }), _jsx(OverviewCard, { image: writing, text: "Regular assessment\r\n" })] })] }));
};
export default Overview;
