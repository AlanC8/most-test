import React from "react";

import { IoArrowBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

import avatar from "../assets/avatar.png";
import BabySitNanny from "../assets/gulmira.png";

const BabySitterVideoDetails = () => {
  return (
    <div className="p-10 bg-white min-h-screen flex flex-1 flex-col items-center">
      <div className="w-full flex items-center max-w-4xl mb-6">
        <div className="flex items-center cursor-pointer">
          <div className="w-8 h-8 bg-[#FFA201] rounded-full flex items-center justify-center mr-2">
            <IoArrowBack className="text-white text-xl" />
          </div>
          <button className="text-lg text-black font-medium">
            Назад к няням
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-4xl bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={BabySitNanny}
          alt="Babysitter"
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-between p-8 bg-black bg-opacity-20">
          <h2 className="text-white text-3xl font-medium">
            Гульмира <br /> Маратовна
          </h2>

          <div className="flex items-center w-full">
            <button className="bg-white p-4 rounded-full text-[#FFA201] flex items-center justify-center shadow-md">
              <FaPlay />
            </button>
            <div className="flex-1 mx-4">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#FFA201] rounded-full w-1/4"></div>
              </div>
            </div>
            <div className="text-white">🔊</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabySitterVideoDetails;
