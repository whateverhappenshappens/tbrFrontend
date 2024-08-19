import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./successfull.css";
import check_mark from "../../assets/check-mark.png";
const PaymentSuccess = ({ headerHeight }) => {
    const paymentSuccessContainer = useRef(null);
    useEffect(() => {
        paymentSuccessContainer.current.style.paddingTop = `${headerHeight}px`;
    }, [headerHeight]);
    return (_jsxs("div", { ref: paymentSuccessContainer, className: "px-[30px] sm:pb-10 md:pl-[70px] md:pr-[60px] flex flex-col items-center gap-10 lg:gap-16", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "bg-[#056608] w-96 sm:w-[30rem] h-96 sm:h-[30rem] rounded-full opacity-[10%] mx-auto mt-[25px]" }), _jsx("div", { className: "bg-[#056608] w-72 sm:w-[24rem] h-72 sm:h-[24rem] rounded-full opacity-[30%] absolute left-1/2 -translate-x-1/2 bottom-12" }), _jsx("div", { className: "bg-[#056608] w-48 sm:w-[18rem] h-48 sm:h-[18rem] rounded-full absolute left-1/2 -translate-x-1/2 bottom-24 flex items-center justify-center", children: _jsx("img", { src: check_mark, alt: "payment complete mark", className: "w-5/12" }) })] }), _jsxs("div", { className: "text-[#2E436A] flex flex-col items-center gap-10 lg:gap-16", children: [_jsx("div", { className: "main font-bold text-5xl sm:text-6xl text-center overflow-visible ", children: "Your Payment was successfull!" }), _jsxs("div", { className: "sub text-center text-3xl sm:text-4xl", children: ["Congratulations for your latest purchase. We wish you all the best for your journey ahead!", _jsx("div", { className: "sub-2 font-bold", children: "Happy Learning." })] }), _jsx(NavLink, { to: "/", className: "success-btn", children: "Return to home" })] })] }));
};
export default PaymentSuccess;
