import NavbarComponent from '@/components/NavbarComponent'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='grid grid-cols-12'>
          <div className='col-span-2'>
             <Sidebar/>
          </div>
          <div className='col-span-10'>
              <NavbarComponent/>
              {children}
          </div>
      
    </div>
  )
}

export default DashboardLayout