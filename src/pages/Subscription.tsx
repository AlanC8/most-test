import Sidebar from '../components/Sidebar'
import SubscriptionDetails from '../components/SubscriptionDetails'

const Subscription = () => {
  return (
    <div className="flex font-sans divide-x">
      <Sidebar />
        <SubscriptionDetails/>
    </div>
  )
}

export default Subscription