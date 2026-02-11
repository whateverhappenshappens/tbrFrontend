import React, { useState } from "react";

const HelpBox = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-16 right-5 bg-[#6D87F5] text-white flex items-center gap-3 p-5 rounded-full shadow-lg cursor-pointer z-50 hover:bg-[#4a5fc1] transition-colors duration-200"
      onClick={() => window.open('http://wa.me/918789726459', '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "fixed" }}
    >
      <img className="w-12" src="/Help-icon.png" alt="help icon" />
      <span className="font-semibold text-2xl">Help</span>
      {hovered && (
        <span
          className="ml-4 px-4 py-2 rounded-lg bg-white text-[#6D87F5] font-semibold text-base shadow-md whitespace-nowrap animate-fade-in"
          style={{
            position: "absolute",
            right: "110%",
            top: "50%",
            transform: "translateY(-50%)",
            minWidth: "170px",
            zIndex: 1001,
            pointerEvents: "none"
          }}
        >
          Welcome to the Help Box
        </span>
      )}
    </div>
  );
};

export default HelpBox;
