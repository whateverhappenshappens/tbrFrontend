import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./OverviewCard.css";
const OverviewCard = (props) => {
    return (_jsxs("div", { className: "overviewcard-card", children: [_jsx("img", { src: props.image }), _jsx("p", { className: "vr-medium", children: props.text })] }));
};
export default OverviewCard;
