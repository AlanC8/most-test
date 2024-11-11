// Sidebar.tsx
import React from "react";
import most from "../assets/tandapp_logo_main 1.png";
import burger from "../assets/Filter Alt.png";
import logout from "../assets/Log Out.png";
import { sidebarLinks } from "../utils/data/SidebarLinks";
import {
  IoArrowBack,
  IoBook,
  IoCart,
  IoHelpCircle,
  IoSettings,
} from "react-icons/io5";

const sidebarLinksObject: { [key: string]: JSX.Element } = {
  Клиенты: <IoArrowBack />,
  Курсы: <IoBook />,
  Сделки: <IoCart />,
  Настройки: <IoSettings />,
  Поддержка: <IoHelpCircle />,
};

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white border-l h-[100vh] w-1/5 p-6 flex flex-col items-start">
      <div className="mb-10 flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src={most} alt="Logo" className="h-10" />
        </div>
        <div>
          <img src={burger} alt="Menu" className="h-8 w-8 cursor-pointer" />
        </div>
      </div>
      <nav className="space-y-4 w-full">
        {sidebarLinks.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center py-4 px-4 text-xl rounded-full hover:bg-gray-200 w-full cursor-pointer ${
              item === "Курсы" && "bg-[#FFA201] text-white"
            }`}
          >
            <span className="mr-3">{sidebarLinksObject[item]}</span>
            <span>{item}</span>
          </div>
        ))}
      </nav>
      <button className="text-[#FF3B30] px-4 space-x-2 flex mt-auto w-full py-3 rounded-full font-medium hover:bg-gray-200 text-left">
        <img src={logout} alt="Logout" />
        <div>Выйти</div>
      </button>
    </div>
  );
};

export default Sidebar;
