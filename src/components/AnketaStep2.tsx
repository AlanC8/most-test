import avatar from '../assets/avatar.png';
import globe from '../assets/Planet.png';
import arrow from '../assets/Arrow.png';

const AnketaStep2 = () => {
  return (
    <div className="p-10 bg-white min-h-screen flex-1">
      <div className="flex items-center justify-between mb-8">
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
            <p className="text-gray-600">Теперь о няне</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm px-16 font-medium text-[#F6F6F6] mr-2 border-b-2">'</div>
            <div className="text-sm px-12 font-medium text-black mr-2 border-b-2 border-[#FFA201]">Этап 2</div>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <label className="text-gray-600">Какой возраст няни для вас допустим</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="20-30">20-30 лет</option>
              <option value="30-40">30-40 лет</option>
              <option value="40+">40+ лет</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600">Важен ли опыт работы няней?</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="yes">Да</option>
              <option value="no">Не обязательно</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600">Какую няню вы ищете</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="full-time">На полный рабочий день</option>
              <option value="part-time">На неполный рабочий день</option>
            </select>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <label className="text-gray-600">Укажите национальность няни</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Если это имеет значение</option>
              <option value="nationality1">Национальность 1</option>
              <option value="nationality2">Национальность 2</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600">На каком языке должна говорить</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="russian">Русский</option>
              <option value="english">Английский</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600">Дополнительные требования к няне</label>
            <select className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full cursor-pointer">
              <option value="">Выбрать</option>
              <option value="requirement1">Требование 1</option>
              <option value="requirement2">Требование 2</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-gray-600">Какие ключевые качества должны быть у няни</label>
          <textarea
            placeholder="Качество"
            className="bg-gray-50 p-3 mt-2 rounded-lg border border-gray-200 w-full h-20"
          />
        </div>

        <div className="flex gap-4">
          <button className="w-1/3 py-3 bg-[#FFA201] text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
            Создать анкету
          </button>
          <button className="w-1/3 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Предпросмотр
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnketaStep2;
