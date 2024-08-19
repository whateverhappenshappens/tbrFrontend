import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Benefits-Card.css";
const BenefitsCard = (props) => {
    return (_jsxs("div", { className: "benefit-card", children: [_jsx("img", { src: props.image }), _jsx("p", { className: "vr-medium", children: props.text })] }));
};
export default BenefitsCard;
