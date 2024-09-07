import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Alumni.css";
// import adobe from "../../assets/companies/adobe.png";
// import clear from "../../assets/companies/clear.png";
// import hotstar from "../../assets/companies/hotstar.png";
// import samsung from "../../assets/companies/samsung.png";
// import bosch from "../../assets/companies/bosch.png";
// import red from "../../assets/companies/red-hat.png";
// import a from "../../assets/alumini/1280px-COG-Logo-White.svg.png"
// import b from "../../assets/alumini/1280px-HSBC_logo_(2018).svg.png"
// import c from "../../assets/alumini/Deloitte_Logo.png"
// import d from "../../assets/alumini/Oracle-White-logo.png"
// import e from "../../assets/alumini/PROD-16e83fc4-629e-40ae-8671-90acea9532f1.png"
// import f from "../../assets/alumini/PwC-Logo.png"
// import g from "../../assets/alumini/Sprinklr_Logo.png"
// import h from "../../assets/alumini/VRTU_BIG-6de44a1b.png"
// import i from "../../assets/alumini/highradius-white-logo.png"
// import j from "../../assets/alumini/idvpLmE_bp.png"
// import k from "../../assets/alumini/images (1).png"
// import l from "../../assets/alumini/kpit-log-grey.png"
// import m from "../../assets/alumini/kpit-log-grey.png"
// import n from "../../assets/alumini/nagarro-new-20229714.png"
// import o from "../../assets/alumini/ps-logo-white-360.png"
// import p from "../../assets/alumini/stockedgelogoimage28102022144458.png"
// const Alumni = () => {
//   const [currentSet, setCurrentSet] = useState(0);
//   const [fade, setFade] = useState(false);
//   const companyLogos = [
//     red,
//     adobe,
//     clear,
//     hotstar,
//     samsung,
//     bosch,
//     a,
//     b,
//     c,
//     d,
//     e,
//     f,
//     g,
//     h,
//     i,
//     j,
//     k,
//     l,
//     m,
//     n,
//     o,
//     p,
//     // Add more images here if needed
//   ];
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(companyLogos.length / 6));
//         setFade(false);
//       }, 1000); // Duration of fade-out animation
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [companyLogos.length]);
//   const getCurrentLogos = () => {
//     const startIndex = currentSet * 6;
//     return companyLogos.slice(startIndex, startIndex + 6);
//   };
//   return (
//     <div className="alumni mt-10 bg-[#2E436A] px-[30px] py-10 lg:py-24 md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-5">
//       <div className="box1 flex flex-col lg:items-center lg:justify-center lg:text-left text-white text-center w-full lg:w-5/12">
//         <div className="our text-4xl md:text-7xl xl:text-8xl lg:w-full overflow-hidden">
//           Our Alumni work at
//         </div>
//         <div className="text-2xl md:text-4xl xl:text-5xl overflow-hidden">
//           Here we will showcase all big companies where our students got placed
//         </div>
//       </div>
//       <div className={`box2-no-slider hidden md:flex flex-wrap lg:w-7/12 items-center justify-center gap-10 ${fade ? "fade-out" : "fade-in"}`}>
//         {getCurrentLogos().map((logo, i) => (
//           <div
//             key={i}
//             className="company-card bg-[#102245] p-32 lg:p-20 xl:p-44 rounded-xl w-5/12"
//           >
//             <img src={logo} alt={`company ${i}`} className="m-auto" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Alumni;
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Alumni.css";
import adobe from "../../assets/companies/adobe.png";
import clear from "../../assets/companies/clear.png";
import hotstar from "../../assets/companies/hotstar.png";
import samsung from "../../assets/companies/samsung.png";
import bosch from "../../assets/companies/bosch.png";
import red from "../../assets/companies/red-hat.png";
import a from "../../assets/alumini/1280px-COG-Logo-White.svg.png";
import b from "../../assets/alumini/1280px-HSBC_logo_(2018).svg.png";
import c from "../../assets/alumini/Deloitte_Logo.png";
import d from "../../assets/alumini/Oracle-White-logo.png";
import e from "../../assets/alumini/PROD-16e83fc4-629e-40ae-8671-90acea9532f1.png";
import f from "../../assets/alumini/PwC-Logo.png";
import g from "../../assets/alumini/Sprinklr_Logo.png";
import h from "../../assets/alumini/VRTU_BIG-6de44a1b.png";
import i from "../../assets/alumini/highradius-white-logo.png";
import j from "../../assets/alumini/idvpLmE_bp.png";
import k from "../../assets/alumini/images (1).png";
import l from "../../assets/alumini/kpit-log-grey.png";
import m from "../../assets/alumini/kpit-log-grey.png";
import n from "../../assets/alumini/nagarro-new-20229714.png";
import o from "../../assets/alumini/ps-logo-white-360.png";
import p from "../../assets/alumini/stockedgelogoimage28102022144458.png";
const Alumni = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [rotate, setRotate] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const companyLogos = [
        red,
        adobe,
        clear,
        hotstar,
        samsung,
        bosch,
        a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, a, f
    ];
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setRotate(true);
            setTimeout(() => {
                setCurrentSet((prevSet) => (prevSet + 1) % Math.ceil(companyLogos.length / 6));
                setRotate(false);
            }, 1000); // Duration of rotation animation
        }, 4000); // Change set every 4 seconds
        return () => clearInterval(interval);
    }, [companyLogos.length]);
    const getCurrentLogos = () => {
        const startIndex = currentSet * 6;
        return companyLogos.slice(startIndex, startIndex + 6);
    };
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (_jsxs("div", { className: "alumni mt-10 bg-[#2E436A] px-[30px] py-10 lg:py-24 md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-5", children: [_jsxs("div", { className: "box1 flex flex-col lg:items-center lg:justify-center lg:text-left text-white text-center w-full lg:w-5/12", children: [_jsx("div", { className: "our text-4xl md:text-7xl xl:text-7xl lg:w-full overflow-hidden", children: "Our Alumni work at" }), _jsx("div", { className: "text-2xl md:text-4xl xl:text-5xl overflow-hidden", children: "Here we will showcase all big companies where our students got placed" })] }), isMobile ? (_jsx("div", { className: "box2 rounded-xl md:hidden", children: _jsxs(Slider, { ...sliderSettings, children: [companyLogos.map((logo, i) => (_jsx("div", { className: "company-card bg-[#102245] p-32 rounded-xl", children: _jsx("img", { src: logo, alt: `company ${i}`, className: "m-auto" }) }, i))), _jsx("div", { className: "company-card bg-[#102245] p-32 rounded-xl flex items-center justify-center", children: _jsx("span", { className: "text-white text-2xl", children: "Many more" }) })] }) })) : (_jsxs("div", { className: `box2-no-slider hidden md:flex flex-wrap lg:w-7/12 items-center justify-center gap-10 ${rotate ? "rotate" : ""}`, children: [getCurrentLogos().map((logo, i) => (_jsx("div", { className: "company-card bg-[#102245] p-32 lg:p-20 xl:p-44 rounded-xl w-5/12", children: _jsx("img", { src: logo, alt: `company ${i}`, className: "m-auto" }) }, i))), _jsx("div", { className: "company-card bg-[#102245] p-32 lg:p-20 xl:p-40 rounded-xl w-5/12 flex items-center justify-center", children: _jsx("span", { className: "text-white text-2xl text-bold", children: "Many more...." }) })] }))] }));
};
export default Alumni;
