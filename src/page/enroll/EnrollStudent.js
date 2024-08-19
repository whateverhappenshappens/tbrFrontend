import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const EnrollStudent = ({ coupon, setcoupon }) => {
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(null);
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Apply Coupon");
    const coupons = {
        SAVE10: 10,
        SAVE20: 20,
        SAVE30: 30,
        SAVE40: 40,
        SAVE50: 50,
    };
    const handleApplyCoupon = () => {
        if (coupons[couponCode] !== undefined) {
            const discountPercentage = coupons[couponCode];
            setDiscount(discountPercentage);
            setMessage(`You have got 35% + ${discountPercentage}% discount`);
            setButtonText("Promo Applied");
            setcoupon(couponCode);
        }
        else {
            setDiscount(null);
            setMessage("Invalid coupon code");
            setButtonText("Apply Coupon");
        }
    };
    useEffect(() => {
        console.log(coupon);
    }, [coupon]);
    return (_jsxs("div", { className: "p-6 max-w-sm mt-[15rem] mx-auto bg-white rounded-xl shadow-md space-y-4", children: [_jsx("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/2zhUebETcUI?si=TScgi1XOgQ1FYuGS", title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerpolicy: "strict-origin-when-cross-origin", allowfullscreen: true }), _jsx("h1", { className: "text-2xl font-bold text-center", children: "Coupon Application" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("input", { type: "text", value: couponCode, onChange: (e) => setCouponCode(e.target.value), placeholder: "Enter coupon code", className: "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("button", { onClick: handleApplyCoupon, className: "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition", children: buttonText })] }), message && _jsx("p", { className: "text-center text-gray-700", children: message })] }));
};
export default EnrollStudent;
