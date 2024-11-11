import BabySitAboutDetails from "../components/BabySitAboutDetails";
import Sidebar from "../components/Sidebar";

const BabySitAbout = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
      <BabySitAboutDetails />
    </div>
  );
};

export default BabySitAbout;
