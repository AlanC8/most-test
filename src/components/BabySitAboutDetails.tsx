import { FaPhone, FaPlay, FaThumbsUp } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

import avatar from "../assets/avatar.png";
import { IoMdMail } from "react-icons/io";

const BabySitAboutDetails = () => {
  return (
    <div className="p-10 flex-1 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center text-lg text-black font-medium">
          <IoArrowBack className="mr-2" /> Назад к няням
        </button>
        <div className="flex bg-[#F6F6F6] rounded-2xl">
          <button className="px-32 py-3 text-lg font-medium text-gray-500">
            Ваши данные
          </button>
          <button className="px-32 py-3 text-lg font-medium bg-[#FFA201] text-white rounded-lg">
            О няне
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
          <h2 className="text-2xl text-center font-medium">
            Гульмира <br /> Маратовна
          </h2>
          <p className="text-[#2670E9] font-medium">Возраст: 22 года</p>
          <button className="mt-6 w-full py-3 bg-[#A6A6A6] text-white font-semibold rounded-lg flex items-center justify-center gap-2">
            <FaPhone /> Связаться
          </button>
          <button className="mt-2 w-full py-3 bg-[#FFA201] text-white font-semibold rounded-lg flex items-center justify-center gap-2">
            <FaPlay /> Посмотреть видео
          </button>
        </div>

        <div className="flex-1 bg-[#F6F6F6] p-8 rounded-xl">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-600 mb-2">Почему я хочу стать няней?</p>
              <textarea
                className="w-full h-32 p-4 bg-white rounded-lg border border-gray-200"
                placeholder="Потому что..."
              ></textarea>
            </div>

            <div>
              <p className="text-gray-600 mb-2">Хобби, увлечения</p>
              <textarea
                className="w-full h-32 p-4 bg-white rounded-lg border border-gray-200"
                placeholder="Рисование и т.д."
              ></textarea>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-2">Основные качества</p>
            <div className="grid grid-cols-5 gap-4">
              {Array(15)
                .fill("Доброта")
                .map((quality, index) => (
                  <button
                    key={index}
                    className="bg-[#2670E9] font-medium text-white py-4 rounded-xl"
                  >
                    {quality}
                  </button>
                ))}
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

export default BabySitAboutDetails;
