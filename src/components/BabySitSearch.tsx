import React from 'react';
import avatar from '../assets/avatar.png';

const BabySitSearch = () => {
  return (
    <div className="p-10 flex-1 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Здравствуйте, Родитель!</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Найти няню"
            className="bg-gray-50 p-3 rounded-2xl border border-gray-300 w-96 focus:outline-none"
          />
          <button className="bg-[#FFA201] text-white px-6 py-3 rounded-2xl font-semibold flex items-center">
            <span className="mr-2">⚙️</span> Фильтры
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center">

            <div className="relative w-32 h-32 mb-4">
              <img src={avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 bg-gray-200 p-1.5 rounded-full">
                👍
              </div>
            </div>


            <p className="text-[#2670E9] font-semibold text-sm">Статус: Ищу клиента</p>
            <h2 className="text-xl font-semibold mt-1">Имя Фамилия</h2>
            <p className="text-[#2670E9] text-sm">Возраст: 26 лет</p>


            <button className="mt-8 w-full py-4 bg-[#FFA201] text-white font-semibold rounded-xl flex items-center justify-center">
            Посмотреть видео
            </button>
            <button className="mt-2 w-full py-4 bg-[#2670E9] text-white font-semibold rounded-xl ">
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabySitSearch;
