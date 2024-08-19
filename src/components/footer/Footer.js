import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // Import NavLink
import logo from "../../assets/techbairn logo white-01.png";
import "../../styles/components/Footer.css";
const itemList = [
    {
        name: "Programs",
        list: ["Webmonk", "Machinester", "Codeslayer", "Robotics & IoT"],
    },
    {
        name: "Quick Links:",
        list: ["About Us", "Blog", "Become a Mentor", "Hire With Us"],
    },
    {
        name: "Reach out to us:",
        list: ["Contact Us:", "Phone:", "(+91) 87897 26459", " (+91) 70048 85397 ", "Email:", "info@techbairn.co.in", "hello@techbairn.com"],
    },
];
const Footer = () => {
    return (_jsxs("footer", { className: "footer px-[30px] sm:pl-[70px] sm:pr-[60px] xl:pl-[140px] xl:pr-[100px] py-14 sm:py-20 xl:py-52 flex flex-col gap-16 xl:gap-32", children: [_jsxs("div", { className: "foot flex flex-col ml- lg:flex-row lg:justify-between gap-10 sm:gap-16", children: [_jsxs("div", { className: "logo-social flex flex-col gap-10 xl:gap-20", children: [_jsx("img", { src: logo, alt: "techbairn logo", className: "w-[25rem] sm:w-[2rem]  mx-auto lg:w-[35rem]" }), _jsxs("div", { className: "text-white text-4xl sm:text-6xl flex gap-10 mx-auto lg:mx-0", children: [_jsx("a", { href: "https://www.linkedin.com/company/techbairn/  ", target: "_blank", rel: "noopener noreferrer", children: _jsx(IoLogoLinkedin, {}) }), _jsx("a", { href: "https://www.facebook.com/techbairn/", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaFacebookF, {}) }), _jsx("a", { href: "https://instagram.com/techbairn", target: "_blank", rel: "noopener noreferrer", children: _jsx(IoLogoInstagram, {}) }), _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaTwitter, {}) }), _jsx("a", { href: "https://www.youtube.com/@techbairn", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaYoutube, {}) })] })] }), _jsx("div", { className: "links-main text-white text-2xl sm:text-4xl xl:text-5xl flex justify-around mr-[0rem] gap-2 lg:gap-10 xl:gap-32 overflow-visible overflow-y-hidden", children: itemList.map((item, index) => (_jsxs("div", { className: "flex flex-col sm:gap-6 xl:gap-16 overflow-visible", children: [_jsx("div", { className: "font-semibold overflow-visible", children: item.name }), _jsx("div", { className: "sm:flex sm:flex-col sm:gap-3 xl:gap-10 overflow-visible", children: item.list.map((li, index1) => (_jsx("div", { className: "overflow-visible", children: li === "Hire With Us" ? (_jsx(NavLink, { to: "/hire-with-us", className: "text-white", children: li })) : li === "Become a Mentor" ? (_jsx(NavLink, { to: "/mentor", className: "text-white", children: li })) : li === "Blog" ? (_jsx(NavLink, { to: "/blog", className: "text-white", children: li })) : li === "About Us" ? (_jsx(NavLink, { to: "/About-us", className: "text-white", children: li })) : li === "Webmonk" ? (_jsx(NavLink, { to: "/course/Webmonk", className: "text-white", children: li })) : li === "Machinester" ? (_jsx(NavLink, { to: "/course/Machinester", className: "text-white", children: li })) : li === "Codeslayer" ? (_jsx(NavLink, { to: "/course/Codeslayer", className: "text-white", children: li })) : li === "Robotics & IoT" ? (_jsx(NavLink, { to: "/course/IOT", className: "text-white", children: li })) :
                                            (li) }, index1))) })] }, index))) })] }), _jsxs("div", { className: "border-t pt-10 xl:pt-24 text-white text-3xl sm:text-4xl flex flex-col sm:flex-row sm:justify-between gap-5 overflow-visible", children: [_jsx("div", { children: "\u00A9 2024 TechBairn Research Pvt. Ltd." }), _jsxs("a", { href: "https://drive.google.com/file/d/18gwUjSwiG7XRywkAHWah9uyX8rrdph1y/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", children: [_jsx("div", { children: "Privacy Policy" }), " | ", _jsx("div", { children: "techbairn.com" })] })] })] }));
};
export default Footer;
