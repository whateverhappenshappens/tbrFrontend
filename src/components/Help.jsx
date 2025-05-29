import React from "react";

const HelpBox = () => {
  return (
    <div
      className="fixed bottom-5 right-5 bg-blue-500 text-white flex items-center gap-2 p-3 rounded-full shadow-lg cursor-pointer z-50 hover:bg-blue-600"
      onClick={() =>window.open('http://wa.me/918789726459', '_blank')
        }
    >
      <img className="w-9" src="/Help-icon.png" alt="help icon" />
      <span className="font-semibold text-xl">Help</span>
    </div>
  );
};

export default HelpBox;
