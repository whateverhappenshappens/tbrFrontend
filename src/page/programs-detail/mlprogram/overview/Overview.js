import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Overview.css";
import OverviewCard from "./overviewcard/OverviewCard";
import writing from "../../../../assets/writing1.png";
const Overview = () => {
    return (_jsxs("div", { className: "overview", children: [_jsx("div", { className: "overview-head", children: _jsx("p", { className: "vr-bold", children: "Program Overview" }) }), _jsxs("div", { className: "overview-card", children: [_jsx(OverviewCard, { image: writing, text: "Industry recognized certification\r\n" }), _jsx(OverviewCard, { image: writing, text: "Experience industry relative work" }), _jsx(OverviewCard, { image: writing, text: "Placement preparation program\r\n" }), _jsx(OverviewCard, { image: writing, text: "Exclusive doubt clearing sessions\r\n" }), _jsx(OverviewCard, { image: writing, text: "Over 6 projects completed" }), _jsx(OverviewCard, { image: writing, text: "Paid internships for selected students" }), _jsx(OverviewCard, { image: writing, text: "One-on-one interactive sessions\r\n" }), _jsx(OverviewCard, { image: writing, text: "Community learning platform" })] })] }));
};
export default Overview;
