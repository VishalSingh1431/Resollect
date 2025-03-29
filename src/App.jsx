import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import Portfolio from './component/Portfolio'
import UploadPage from './component/UploadPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden">
        <Navbar/>
        <div className="flex flex-col lg:flex-row w-full max-w-full">
          <div className="w-full lg:w-1/4 xl:w-1/5">
            <Dashboard/>
          </div>
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <Portfolio/>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App