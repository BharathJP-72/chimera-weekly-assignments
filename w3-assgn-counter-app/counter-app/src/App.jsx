import './App.css'
import ActivityGrid from './components/ActivityGrid/ActivityGrid'
import useActivities from './hooks/useActivities'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {
    activities,
    increment,
    decrement,
    reset
  } = useActivities()
  return (
    <>
      <div className='app-container'>

        <h1>Personal Productivity Dashboard</h1>

        <ActivityGrid

          activities={activities}
          increment={increment}
          decrement={decrement}
          reset={reset}

        />

      </div>

          <ToastContainer />

    </>
  )
}



export default App
