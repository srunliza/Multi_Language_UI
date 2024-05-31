import React from 'react'
import Link from 'next/link'
import AddMemberModal from './AddMemberModal'
import MemberComponent from './MemberComponent'
const NavbarDashbaord = () => {
  return (
    <div>
           <div className="ml-5 mt-5 ">
      {/* Upload file */}
      <div className="flex justify-between">
          <h2 className="text-xl text-color-text-black font-bold">
            Project Name
          </h2>
          
            {/*Modal */}
            <AddMemberModal />
          
        </div>
        <div className="flex mt-5 ">
           <div className="w-[900px] h-screen mr-10 rounded-lg"> 
           {/*  bg-red-100 border border-blue-300    */}

           <div className="w-full h-14 bg-white border border-b-0 border-blue-300 rounded-t-lg  flex">
            <div
              class="hidden md:flex md:items-center md:w-auto w-full "
              id="menu"
            >
              <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  <li>
                    <Link class="md:p-4 py-3 px-0 block" href="/developerDashboard/upload">
                      Upload
                    </Link>
                  </li>
                  <li>
                    <Link class="md:p-4 py-3 px-0 block" href="/developerDashboard/viewAttactment">
                      View Attactment
                    </Link>
                  </li>
                  <li>
                    <Link class="md:p-4 py-3 px-0 block" href="/developerDashboard/calendar">
                      Calendar
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          </div>
          <MemberComponent/>
          </div>
    </div>
    </div>
  )
}

export default NavbarDashbaord