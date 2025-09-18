import { useState } from 'react'
import Sidebar from './../components/core/dashboard/Sidebar';
import { Outlet } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi";

const Dashboard = () => {

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='h-screen bg-blackBg wrapper flex w-screen relative'>
      {/* button of open/close sidebar - only for small devices */}
      <button className='sm:hidden fixed top-[12%] left-1 ' onClick={() => setShowSidebar(!showSidebar)}>
        <BiMenuAltLeft className='text-2xl text-white' />
      </button>

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className='overflow-auto '>
        <div className='mx-auto w-[96%]  '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard