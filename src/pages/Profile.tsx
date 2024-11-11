import Sidebar from "../components/Sidebar";
import ProfilePageData from "../components/ProfilePage";
import ProfilePageAbout from "../components/ProfilePageAbout";

const Profile = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
      <ProfilePageData />
      {/* <ProfilePageAbout/> */}
    </div>
  );
};

export default Profile;
