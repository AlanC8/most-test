import avatar from '../assets/avatar.png';
import globe from '../assets/Planet.png';
import arrow from '../assets/Arrow.png';

const AnketaStep = () => {
  return (
    <div className="p-10 bg-white min-h-screen flex-1">
      <div className="flex  items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Здравствуйте, Родитель!</h1>
        
        <div className="flex items-center gap-4">
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

      <div className="bg-[#F6F6F6] rounded-2xl p-8 shadow-md max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Создание анкеты</h2>
            <p className="text-gray-600">Давайте сначала о себе</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm px-12 font-medium text-black mr-2 border-b-2 border-[#FFA201]">Этап 1</div>
            <div className="text-sm px-16 font-medium text-[#F6F6F6] w-12 mr-2 border-b-2 "> '</div>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="text-gray-600">Номер телефона</label>
            <input
              type="tel"
              placeholder="+7 777 77 77"
              className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full"
            />
          </div>

          <div className="col-span-1">
            <label className="text-gray-600">Пол</label>
            <div className="flex mt-2 gap-4">
              <button className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200 w-full justify-center">
                <span className="mr-2">👨‍💼</span> Мужской
              </button>
              <button className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200 w-full justify-center">
                <span className="mr-2">👩‍💼</span> Женский
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-6 mt-6">
          <div>
            <label className="text-gray-600">Имя</label>
            <input
              type="text"
              placeholder="Имя"
              className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full"
            />
          </div>

          <div>
            <label className="text-gray-600">Фамилия</label>
            <input
              type="text"
              placeholder="Фамилия"
              className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full"
            />
          </div>

          <div>
            <label className="text-gray-600">Сколько детей</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="1">1 ребенок</option>
              <option value="2">2 ребенка</option>
              <option value="3">3 ребенка</option>
              <option value="4">4 ребенка</option>
              <option value="5+">5+ детей</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label className="text-gray-600">Какой график работы?</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="full-time">Полный рабочий день</option>
              <option value="part-time">Неполный рабочий день</option>
              <option value="shift">Сменный график</option>
              <option value="freelance">Свободный график</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600">Предпочтительный район</label>
            <input
              type="text"
              placeholder="Проживания няни (Например Алмалинский)"
              className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full"
            />
          </div>
        </div>

        <button className="mt-8 w-1/3 py-3 bg-[#FFA201] text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
          Дальше →
        </button>
      </div>
    </div>
  );
};

export default AnketaStep;
