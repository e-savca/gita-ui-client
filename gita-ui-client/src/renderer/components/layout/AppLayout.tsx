import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">Main Content Area</div>
    </div>
  )
}

export default AppLayout
