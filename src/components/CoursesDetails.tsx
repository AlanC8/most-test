import React from 'react'

import playBtn from "../assets/Play.png";

interface CoursesDetailsProps {
    id: number;
    name: string;
    path: string;
}

const CoursesDetails : React.FC<CoursesDetailsProps> = ({id, name, path}) => {
  return (
    <div key={id} className="bg-[#F6F6F6] rounded-lg p-6">
    <div className="relative">
      <img
        src={path}
        alt={name}
        className="rounded-lg w-full"
      />
    </div>
    <p className="mt-4 text-xl font-medium">Добро Пожаловать!</p>
    <p className="text-gray-500 text-[13px]">
      Узнайте как пользоваться Tandapp!
    </p>
    <button className="mt-4 flex space-x-2 items-center px-5 py-2 bg-[#FFA201] text-white font-bold rounded-full">
      <img src={playBtn} className="w-4 h-4" />
      <div className="">Начать курс</div>
    </button>
  </div>
  )
}

export default CoursesDetails