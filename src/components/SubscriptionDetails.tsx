import React from "react";
import LanguageToggle from "./LanguageToggle";
import girlInRight from "../assets/351522267_e265afae-1fdf-4a8d-a604-d6c4c281b0cd 1.png";
import guyInLeft from "../assets/351507659_48d02231-577d-4189-bed9-c5fca30e4313 1.png";
import girlInMiddle from "../assets/351516786_1994ff74-5cfd-4ff9-a83c-1b326b3e21f3 1.png";
import ellipseBg from "../assets/Ellipse 41.png";

const SubscriptionDetails = () => {
  return (
    <div className="p-10 bg-white min-h-screen flex flex-1 flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-4xl mb-10">
        <h1 className="text-3xl font-semibold">Здравствуйте, Родитель!</h1>
        <LanguageToggle />
      </div>

      <div className="bg-[#FFA201] rounded-2xl p-10 w-full max-w-4xl relative overflow-hidden flex items-center justify-between">

        <div className="text-white z-10">
          <h2 className="text-5xl font-bold mb-6">Подписка на платформу</h2>
          <ul className="text-lg mb-10 space-y-2">
            <li>- Контакты наиболее подходящих, выбранных кандидаток (нянь)</li>
            <li>- Доступ к платформе 24/7</li>
          </ul>
          <div className="text-4xl font-bold mb-6">9990 тг</div>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
            <span>🖤</span> ПОДПИСАТЬСЯ
          </button>
        </div>
        {/* WHITE BG */}
        <img
          src={ellipseBg}
          alt="Ellipse Background"
          className="absolute right-[0px] bottom-[-20%] w-[50%] h-[50%] z-0"
        />

        <div className="relative z-10 flex items-end justify-center space-x-[-2rem] absolute bottom-[-120px] right-10">
          <img
            src={guyInLeft}
            alt="Guy on Left"
            className="w-28 h-auto z-0 transform translate-x-0"
          />
          <img
            src={girlInMiddle}
            alt="Girl in Middle"
            className="w-36 h-auto z-10"
          />
          <img
            src={girlInRight}
            alt="Girl on Right"
            className="w-28 h-auto z-0 transform -translate-x-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
