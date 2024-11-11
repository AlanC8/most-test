
import avatar from '../assets/avatar.png'; 
import globe from '../assets/Planet.png';   
import arrow from '../assets/Arrow.png';   
import lessonImage1 from '../assets/lesson1.png'; 
import lessonImage2 from '../assets/lesson2.png'; 
import lessonImage3 from '../assets/lesson3.png'; 

import LessonCard from './LessonCard';

const TestPage = () => {
    return (
      <div className="flex flex-col flex-1 bg-white">
        <div className="flex items-center justify-between p-10">
          <h1 className="text-3xl font-semibold">Здравствуйте, Няня!</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Найти урок"
                className="bg-white rounded-full py-2 px-4 pl-10 text-gray-700 border border-gray-300 focus:outline-none"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
  
            <div className="flex items-center bg-[#FFA201] text-white px-4 py-2 rounded-full cursor-pointer">
              <span className="mr-2"><img src={globe} alt="Globe" className="w-5 h-5" /></span>
              <span>Язык: Русский</span>
              <span className="ml-2"><img src={arrow} alt="Arrow" className="w-4 h-4" /></span>
            </div>
  
            <div>
              <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-1 p-10 space-y-6">
          <LessonCard
            image={lessonImage1}
            title="УРОК 1: БАЗА"
            description="В этом уроке мы покажем базовые приемы ухода и общения за ребенком и его"
          />
          <LessonCard
            image={lessonImage1}
            title="УРОК 1: БАЗА"
            description="В этом уроке мы покажем базовые приемы ухода и общения за ребенком и его"
          />
          <LessonCard
            image={lessonImage1}
            title="УРОК 1: БАЗА"
            description="В этом уроке мы покажем базовые приемы ухода и общения за ребенком и его"
          />
          <LessonCard
            image={lessonImage2}
            title="УРОК 1: УХОД"
            description="В этом уроке мы покажем базовые приемы ухода и общения за ребенком и его"
          />
          <LessonCard
            image={lessonImage2}
            title="УРОК 1: УХОД"
            description="В этом уроке мы покажем базовые приемы ухода и общения за ребенком и его"
          />
          <LessonCard
            image={lessonImage1}
            title="УРОК 1: УХОД"
            description="В этом уроке мы покажем базовые приемы ухода и общения за ребенком и его"
          />
        </div>
      </div>
    );
};

export default TestPage;
