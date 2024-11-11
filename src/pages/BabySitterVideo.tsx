import BabySitterVideoDetails from '../components/BabySitterVideoDetails'
import Sidebar from '../components/Sidebar'

const BabySitterVideo = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
      <BabySitterVideoDetails/>
    </div>
  )
}

export default BabySitterVideo