import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Help.css';
import Phone from '../../../assets/phone-blue.png';
const Help = () => {
    return (_jsxs("div", { className: "connected", children: [_jsx("p", { className: "connected-head1 vr-bold", children: "Feel Connected, Join us !" }), _jsx("p", { className: "connected-head2 vr-medium", children: "If you think that you can resonate with the above stated points, we are eager to have you on our team. Or if you feel like you have some questions, feel free to request a call back and we will get back to you in no time." }), _jsxs("div", { className: "connected-button", children: [_jsx("button", { className: "connected-button-request visbyroundCF bold ", children: _jsxs("div", { className: "connected-button-request-div", children: [_jsx("img", { src: Phone, alt: "" }), _jsx("a", { href: "https://docs.google.com/forms/d/e/1FAIpQLSdKJREAXanAnHM_bDf5OuKje08OHyaxXVypePaqPm0Wlv61gQ/viewform", target: "_blank", rel: "noopener noreferrer", children: _jsx("p", { className: "vr-medium", children: "Request a call back" }) })] }) }), _jsx("a", { href: "http://bit.ly/forms_TB-CA", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "connected-button-join", children: _jsx("p", { className: "vr-medium", children: "Join Us" }) }) })] })] }));
};
export default Help;
