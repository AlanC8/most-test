import React from "react";
import { FaPhone, FaPlay, FaThumbsUp } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import {
  MdLanguage,
  MdLocationOn,
  MdPeople,
  MdSchool,
  MdWork,
} from "react-icons/md";

import avatar from "../assets/avatar.png";
import { IoMdMail } from "react-icons/io";

const BabySitProfileDetails = () => {
  return (
    <div className="p-10 flex-1 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center text-lg text-black font-medium">
          <IoArrowBack className="mr-2" /> Назад к няням
        </button>
        <div className="flex bg-[#F6F6F6] rounded-2xl">
          <button className="px-32 py-3 rounded-2xl text-lg font-medium bg-[#FFA201] text-white rounded-lg">
            Ваши данные
          </button>
          <button className="px-32 py-3 rounded-2xl text-lg font-medium text-gray-500">
            О себе
          </button>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="w-1/4 bg-[#F6F6F6] rounded-xl p-6 flex flex-col items-center">
          <div className="relative">
            <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full" />
            <div className="absolute bottom-0 right-0 bg-gray-300 p-1 rounded-full">
              <FaThumbsUp className="text-white" />
            </div>
          </div>
          <p className="text-[#2670E9] mt-4">Статус: Ищу клиента</p>
          <h2 className="text-2xl text-center font-medium">Гульмира <br /> Маратовна</h2>
          <p className="text-[#2670E9] font-medium">Возраст: 22 года</p>
          <button className="mt-6 w-full py-3 bg-[#A6A6A6] text-white font-semibold rounded-lg flex items-center justify-center gap-2">
            <FaPhone /> Связаться
          </button>
          <button className="mt-2 w-full py-3 bg-[#FFA201] text-white font-semibold rounded-lg flex items-center justify-center gap-2">
            <FaPlay /> Посмотреть видео
          </button>
        </div>

        <div className="flex-1 bg-[#F6F6F6] p-8 rounded-xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600">Район проживания</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdLocationOn className="mr-2 text-[#FFA201]" />
                <p>Алмалинский</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Образование</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdSchool className="mr-2 text-[#FFA201]" />
                <p>Высшее</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Опыт работы няней</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdWork className="mr-2 text-[#FFA201]" />
                <p>2 года</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Количество детей для присмотра</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdPeople className="mr-2 text-[#FFA201]" />
                <p>2 ребенка</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Языки</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdLanguage className="mr-2 w-8 h-8 text-[#FFA201]" />
                <p>Английский, Русский, Казахский</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">График работы</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdWork className="mr-2 text-[#FFA201]" />
                <p>5/2</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Национальность</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdPeople className="mr-2 text-[#FFA201]" />
                <p>Казах</p>
              </div>
            </div>

            <div>
              <p className="text-gray-600">Вредные привычки</p>
              <div className="flex items-center mt-2 pl-4 pr-32 py-4 bg-white rounded-xl w-full">
                <MdLanguage className="mr-2 text-[#FFA201]" />
                <p>Нет вредных привычек</p>
              </div>
            </div>
          </div>
          <button className="mt-8 flex items-center justify-center w-full max-w-xs py-4 bg-[#FFA201] text-white font-semibold rounded-xl">
            <IoMdMail className="w-6 h-6" />
            <div className="ml-4">Получить контакт</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BabySitProfileDetails;
