import React from 'react'
import SideBar from '../Components/SideBar'
import Overview from './Overview'

function Dashboard() {
  return (
    <div className='grid grid-cols-2 gap-8 h-screen bg-gray-100'>
        <SideBar/>
        <main>Dashboard</main>
    </div>
  )
}

export default Dashboard