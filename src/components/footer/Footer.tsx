import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import logo from "../../assets/Logo.svg";
import "../../styles/components/Footer.css";

const itemList = [
  {
    name: "Programs",
    list: ["Webmonk", "Machinester", "Codeslayer", "Robotics & IoT"],
  },
  {
    name: "Campus Associates",
    list: ["Webmonk", "Machinester", "Codeslayer", "Robotics & IoT"],
  },
  {
    name: "Refer & Earn",
    list: ["Webmonk", "Machinester", "Codeslayer", "Robotics & IoT"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer px-[30px] sm:pl-[70px] sm:pr-[60px] xl:pl-[140px] xl:pr-[100px] py-14 sm:py-20 xl:py-52 flex flex-col gap-16 xl:gap-32">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-16">
        <div className="logo-social flex flex-col gap-10 xl:gap-20">
          <img
            src={logo}
            alt="techbairn logo"
            className="w-3/4 sm:w-1/2 mx-auto lg:w-full"
          />
          
        </div>
        <div className="links-main text-white text-2xl sm:text-4xl xl:text-5xl flex justify-between gap-2 lg:gap-10 xl:gap-32 overflow-hidden">
          {itemList.map((item, index) => (
            <div key={index} className="flex flex-col sm:gap-6 xl:gap-16 overflow-visible">
              <div className="font-semibold overflow-visible">{item.name}</div>
              <div className="sm:flex sm:flex-col sm:gap-3 xl:gap-10 overflow-visible">
                {item.list.map((li, index1) => (
                  <div key={index1} className="overflow-visible">
                    {li}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-10 xl:pt-24 text-white text-3xl sm:text-4xl flex flex-col sm:justify-between gap-10 overflow-visible">
        <div className="reach-out-title overflow-visible">Quick Links:</div>
        <br></br>
        <div className="contact-title overflow-visible"></div>
        <a href="#"><div className="hover-effect overflow-visible">About Us</div></a>
        <a href="#"><div className="hover-effect overflow-visible">Careers</div></a>
        <a href="#"><div className="hover-effect overflow-visible">Become a Mentor</div></a>
        <a href="#"><div className="hover-effect overflow-visible">Hire With Us</div></a>
        <a href="#"><div className="hover-effect overflow-visible">Campus Engagement Program (CEP)</div></a>
      </div>
      <div className="border-t pt-10 xl:pt-24 text-white text-3xl sm:text-4xl flex flex-col sm:justify-between gap-10 overflow-visible">
        <div className="reach-out-title overflow-visible">Reach Out to Us:</div>
        <br></br>
        <div className="contact-title overflow-visible">Contact Us:</div>
        <div>Please feel free to drop us a mail or call to connect with our team. Our response time is less than 1 hour.</div>
        <div className="phone-title">Phone:</div>
        <div>- (+91) 87897 26459</div>
        <div>- (+91) 70048 85397</div>
        <div className="email-title overflow-visible">Email:</div>
        <div>- info@techbairn.co.in</div>
        <div>- hello@techbairn.com</div>
      </div>
      <div className="border-t pt-10 xl:pt-24 text-white text-3xl sm:text-4xl flex flex-col sm:justify-between gap-10 overflow-visible">
        <div className="reach-out-title overflow-visible">Connect with Us:</div>
        <br></br><div className="contect overflow-visible">Social Media:</div><br/>
        {/* <div className="contact-title overflow-visible">Contact Us:</div>
        <div>Please feel free to drop us a mail or call to connect with our team. Our response time is less than 1 hour.</div> */}
        <div className="text-white text-4xl sm:text-6xl flex gap-10 mx-auto lg:mx-0">
            <a href="#">
              <IoLogoLinkedin />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube/>
            </a>
          </div>
      </div>
      <div className="border-t pt-10 xl:pt-24 text-white text-3xl sm:text-4xl flex flex-col sm:flex-row sm:justify-between gap-5 overflow-visible">
        <div>© 2024 TechBairn Research Pvt. Ltd.</div>
        <a href="#"><div>Privacy Policy</div> | <div>techbairn.com</div></a>
      </div>
    </footer>
  );
};

export default Footer;
