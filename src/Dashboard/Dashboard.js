import React, { memo } from 'react'
import Inventory from './Inventory/Inventory'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = memo(() => {
  return (
    <div style={{ background: '#F2F2F3', display: 'flex' }}>
      <Sidebar></Sidebar>
      <Inventory></Inventory>
    </div>
  )
})

export default Dashboard
