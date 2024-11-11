
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainPage'

const Desktop = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Desktop