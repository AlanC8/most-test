import React from "react";
import avatar from "../assets/avatar.png";
// import editIcon from '../assets/edit.png';

const ProfilePageData = () => {
  return (
    <div className="flex-1 p-10 bg-white min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-3xl w-2/5 font-semibold mb-6">
          Здравствуйте, Няня!
        </h1>
        <div className="flex w-full bg-[#F6F6F6] rounded-2xl">
          <button className="w-full bg-[#FFA201] rounded-2xl px-6 py-4 text-lg font-medium text-white">
            Ваши данные
          </button>
          <button className="w-full px-6 py-4 text-lg font-medium text-gray-500">
            О себе
          </button>
        </div>
      </div>
      
      <div className="flex gap-10">
        <div className="bg-gray-50 rounded-xl p-6 shadow-md w-1/4 flex flex-col items-center">
          <div className="relative">
            <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full" />
            <div className="absolute bottom-0 right-0 bg-[#FFA201] p-2 rounded-full border-2 border-white">
              <img src={avatar} alt="Edit" className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mt-4">Гульмира Маратовна</h2>
          <div className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
            Статус: Ищу клиента
          </div>
          <p className="text-blue-500 mt-1 text-sm">Возраст: 22 года</p>
          <div className="flex-grow"></div>
          <button className="mt-6 w-full px-4 py-2 bg-[#FFA201] text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
            Редактировать профиль
          </button>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6 mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <div>
              <label className="text-gray-600">Номер телефона</label>
              <div className="flex items-center bg-white p-2 mt-2 rounded-lg border border-gray-200">
                <span className="mr-2">📞</span> +7 777 77 77
              </div>
            </div>
            <div>
              <label className="text-gray-600">Семейное положение</label>
              <div className="flex items-center bg-white p-2 mt-2 rounded-lg border border-gray-200">
                <span className="mr-2">👤</span> Не замужем
              </div>
            </div>
            <div>
              <label className="text-gray-600">Электронная почта</label>
              <div className="flex items-center bg-white p-2 mt-2 rounded-lg border border-gray-200">
                <span className="mr-2">📧</span> Почта
              </div>
            </div>
            <div>
              <label className="text-gray-600">Дети</label>
              <div className="flex items-center bg-white p-2 mt-2 rounded-lg border border-gray-200">
                <span className="mr-2">👶</span> нет детей
              </div>
            </div>
            <div>
              <label className="text-gray-600">Место рождения</label>
              <div className="flex items-center bg-white p-2 mt-2 rounded-lg border border-gray-200">
                <span className="mr-2">📍</span> Казахстан
              </div>
            </div>
            <div>
              <label className="text-gray-600">Опыт работы няней</label>
              <div className="bg-white p-2 mt-2 rounded-lg border border-gray-200">
                2 года
              </div>
            </div>
          </div>

          {/* Качества */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Качества</h3>
            <div className="grid grid-cols-3 gap-4">
              {Array(9)
                .fill(0)
                .map((_, index) => (
                  <button key={index} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Доброта
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageData;
