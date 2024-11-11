import React, { useState } from "react";

import mainImage from "../assets/Frame 174.png";
import playBtn from "../assets/Play.png";
import loadingBtn from "../assets/Web Loading Lines.png";
import avatar from "../assets/avatar.png";


import { courses } from "../utils/data/Courses";
import CoursesDetails from "./CoursesDetails";
import LanguageToggle from "./LanguageToggle";

const MainContent: React.FC = () => {
  

  return (
    <div className="flex-1 p-10 bg-white">
      <div className="flex items-center justify-between mb-8">
        <div className="text-3xl font-semibold">Здравствуйте, Няня!</div>
        <div className="flex items-center gap-4 relative">
          
          <LanguageToggle/>

          <div>
            <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F6] rounded-2xl p-6 flex items-center mb-10">
        <div className="relative flex-shrink-0 w-1/2">
          <img
            src={mainImage}
            alt="Character"
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="ml-6 w-1/2">
          <div className="flex items-center space-x-2 mb-2">
            <img src={loadingBtn} className="w-4 h-4" />
            <p className="text-sm text-gray-500">Продолжить курс</p>
          </div>
          <hr />
          <p className="text-2xl font-medium mt-2">Добро Пожаловать!</p>
          <p className="text-gray-500 mb-4">
            Узнайте как пользоваться Tandapp!
          </p>
          <button className="flex items-center gap-2 px-5 py-3 bg-[#FFA201] text-white font-bold rounded-lg">
            <span>
              <img src={playBtn} alt="" />
            </span>{" "}
            Продолжить курс
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Все курсы</h2>
        <div className="grid grid-cols-3 gap-6">
          {courses.map((course) => (
            <CoursesDetails key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
