import React, { memo } from 'react'
import './Sidebar.css'
import home from '../../images/home.png'
import inventory from '../../images/files.png'
import documents from '../../images/google-docs.png'
import settings from '../../images/settings.png'

const Sidebar = memo(() => {
  return (
    <div className='sidebar'>
      <div className="home flex">
        <img src={home} alt="" />
        <span className="ml-2"> Dashboard</span>
      </div>
      <div className="home flex">
        <img src={inventory} alt="" className="" />
        <span className="ml-2"> Inventory</span>
      </div>
      <div className="home flex">
        <img src={documents} alt="" className="" />
        <span className="ml-2"> Documents</span>
      </div>
      <div className="home flex">
        <img src={settings} alt="" className="" />
        <span className="ml-2"> Settings</span>
      </div>
    </div>
  )
})

export default Sidebar
