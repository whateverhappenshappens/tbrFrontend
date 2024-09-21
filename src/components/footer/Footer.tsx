import React from "react";
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
    list: ["Contact Us:", "Phone:","(+91) 87897 26459",  " (+91) 70048 85397 ", "Email:","info@techbairn.co.in","hello@techbairn.com"],
  },
];



const Footer: React.FC = () => {
  return (
    <footer className="footer px-[30px] sm:pl-[70px] sm:pr-[60px]
     xl:pl-[5px] xl:pr-[5px] py-14 sm:py-20 xl:py-52 flex 
     flex-col gap-1 xl:gap-32">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-16">
        <div className="logo-social flex flex-col gap-10 xl:gap-20">
          <img
            src={logo}
            alt="techbairn logo"
            className="w-[25rem] sm:w-[2rem]  mx-auto lg:w-[35rem]"
          />
          <div className="text-white text-4xl sm:text-6xl flex gap-10 mx-auto lg:mx-10">
            <a href="https://www.linkedin.com/company/techbairn/  " target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin />
            </a>
            <a href="https://www.facebook.com/techbairn/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/techbairn" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
            <a href="https://x.com/techbairn?lang=en" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@techbairn" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="links-main text-white text-2xl sm:text-4xl xl:text-5xl flex justify-around mr-[0rem] gap-2 lg:gap-10 xl:gap-10 overflow-visible overflow-y-hidden">
          {itemList.map((item, index) => (
            <div key={index} className="flex flex-col sm:gap-6 xl:gap-16 overflow-visible">
              <div className="font-semibold overflow-visible">{item.name}</div>
              <div className="sm:flex sm:flex-col sm:gap-3 xl:gap-10 overflow-visible">
                {item.list.map((li, index1) => (
                  <div key={index1} className="overflow-visible">
                    {li === "Hire With Us" ? (
                      <NavLink to="/hire-with-us" className="text-white">{li}</NavLink>
                    ): li === "Become a Mentor" ? (
                      <NavLink to="/mentor" className="text-white">{li}</NavLink>
                    ) : li === "Blog" ? (
                      <NavLink to="/blog" className="text-white">{li}</NavLink>
                    ): li === "About Us" ? (
                      <NavLink to="/About-us" className="text-white">{li}</NavLink>
                    ):li === "Webmonk" ? (
                      <NavLink to="/course/Webmonk" className="text-white">{li}</NavLink>
                    ): li === "Machinester" ? (
                      <NavLink to="/course/Machinester" className="text-white">{li}</NavLink>
                    ):li === "Codeslayer" ? (
                      <NavLink to="/course/Codeslayer" className="text-white">{li}</NavLink>
                    ):li === "Robotics & IoT" ? (
                      <NavLink to="/course/IOT" className="text-white">{li}</NavLink>
                    ):
                     (
                      li
                    )}
                  </div>
                  
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t mt-5 pt-10 xl:pt-24 text-white text-3xl sm:text-4xl flex flex-col sm:flex-row sm:justify-between gap-5 overflow-visible">
        <div className="overflow-visible">Copyright @ techbairn 2023</div>
        <div className="overflow-visible"><a href="https://drive.google.com/file/d/18gwUjSwiG7XRywkAHWah9uyX8rrdph1y/view" target="_blank">Privacy Policy | techbairn.com</a></div>
      </div>
    </footer>
  );
};

export default Footer;
