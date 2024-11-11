import BabySitProfileDetails from '../components/BabySitProfileDetails'
import Sidebar from '../components/Sidebar'

const BabySitProfile = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar/>
        <BabySitProfileDetails/>
    </div>
  )
}

export default BabySitProfile