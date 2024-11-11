import avatar from '../assets/avatar.png';

const AnketaData = () => {
  return (
    <div className="p-10 bg-white min-h-screen flex flex-1 flex-col gap-8">
      <div className="text-3xl font-semibold">Здравствуйте, Родитель!</div>
      
      <div className="flex gap-8">
        <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-md w-1/4 flex flex-col items-center">
          <div className="relative">
            <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full" />
            <div className="absolute bottom-0 right-0 bg-[#FFA201] p-2 rounded-full border-2 border-white">
              <img src={avatar} alt="Edit" className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mt-4">Гульмира <br /> Маратовна</h2>
          <p className="text-blue-500 mt-1 text-sm">Статус: Ищу клиента</p>
          
          <div className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full text-center">
            👶 2 детей
          </div>

          <button className="mt-4 w-full py-2 bg-[#FFA201] text-white font-semibold rounded-lg">
            📞 Связаться
          </button>

          <div className="mt-6 w-full">
            <h3 className="text-gray-600 font-semibold mb-2">Качество няни</h3>
            <div className="flex flex-col gap-2">
              {Array(4).fill("Доброта").map((quality, index) => (
                <div key={index} className="bg-gray-200 py-2 rounded-lg text-center font-medium text-gray-700">
                  ⭐ {quality}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-2xl p-8 shadow-md flex-1">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-600">Район проживания</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                📍 Алмалинский
              </div>
            </div>
            <div>
              <label className="text-gray-600">График работы</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                ⏰ 5/2
              </div>
            </div>
            <div>
              <label className="text-gray-600">Возраст няни</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                👶 18-25
              </div>
            </div>
            <div>
              <label className="text-gray-600">Важен ли опыт работы няней?</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                👩‍💼 1-2 года
              </div>
            </div>
            <div>
              <label className="text-gray-600">Какую няню вы ищете</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                👩‍👧 Няня по уходу за ребенком
              </div>
            </div>
            <div>
              <label className="text-gray-600">На каком языке должна говорить</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                🌐 Русский
              </div>
            </div>
            <div>
              <label className="text-gray-600">Национальность</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                🌍 Казах
              </div>
            </div>
            <div>
              <label className="text-gray-600">Требования к няне</label>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                📄 Педагогическое образование
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="w-1/3 py-3 bg-white text-[#FFA201] font-semibold rounded-lg">
              Редактировать
            </button>
            <button className="w-1/3 py-3 bg-[#FFA201] text-white font-semibold rounded-lg">
              Создать анкету
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnketaData;
