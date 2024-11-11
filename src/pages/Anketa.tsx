import AnketaData from '../components/AnketaData'
import AnketaStep from '../components/AnketaStep'
import AnketaStep2 from '../components/AnketaStep2'
import Sidebar from '../components/Sidebar'

const Anketa = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
        {/* <AnketaStep/>    */}
        {/* <AnketaStep2/> */}
        <AnketaData/>
    </div>
  )
}

export default Anketa