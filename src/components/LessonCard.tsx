import playOrangeBtn from "../assets/Play (Orange).png";
import fileBtn from "../assets/File.png";

interface LessonCardProps {
  image: string;
  title: string;
  description: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex bg-[#F6F6F6] min-h-[260px] rounded-xl shadow-md overflow-hidden p-6">
      <div className="relative w-1/3">
        <img
          src={image}
          alt="Lesson"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white bg-opacity-75 rounded-full p-3"></button>
        </div>
      </div>
      <div className="w-2/3 pl-6 my-4 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 text-xl w-1/2 mt-2">{description}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 px-6 py-4 bg-white text-[#FFA201] font-bold rounded-xl">
            <img src={playOrangeBtn} alt="" />
            <div>Пройти урок</div>
          </button>
          <button className="flex items-center gap-2 px-6 py-4 bg-[#FFA201] text-white font-bold rounded-xl">
            <img src={fileBtn} alt="" />
            <div>Пройти тест</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
