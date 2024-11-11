import React, { useState } from "react";
import globe from "../assets/Planet.png";
import arrow from "../assets/Arrow.png";

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Русский");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleMenu}
        className="flex items-center bg-[#FFA201] text-white px-4 py-2 rounded-xl cursor-pointer"
      >
        <span className="mr-2">
          <img src={globe} alt="Globe" className="w-5 h-5" />
        </span>
        <span>Язык: {selectedLanguage}</span>
        <span className="ml-2">
          <img src={arrow} alt="Arrow" className="w-4 h-4" />
        </span>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-white border rounded-xl shadow-lg py-2 w-48 z-10">
          <div
            onClick={() => selectLanguage("Русский")}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <img src={globe} alt="Russian" className="w-5 h-5 mr-2" />
            <span>Язык: Русский</span>
          </div>
          <div
            onClick={() => selectLanguage("Қазақ")}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <img src={globe} alt="Kazakh" className="w-5 h-5 mr-2" />
            <span>Тіл: Қазақ</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
