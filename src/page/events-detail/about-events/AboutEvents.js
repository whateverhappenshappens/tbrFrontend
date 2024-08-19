import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./AboutEvents.css";
const AboutEvents = (props) => {
    console.log(props.data);
    return (_jsxs("div", { className: "aboutevents", children: [_jsx("div", { className: "aboutevents-head", children: _jsx("p", { className: "vr-bold", children: "About Events" }) }), _jsx("p", { children: props.data?.description })] }));
};
export default AboutEvents;
