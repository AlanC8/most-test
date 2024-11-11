import BabySitSearch from '../components/BabySitSearch'
import Sidebar from '../components/Sidebar'

const BabySitQuery = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
      <BabySitSearch/>
    </div>
  )
}

export default BabySitQuery