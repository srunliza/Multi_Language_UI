import React from 'react'
import AddMemberModal from "./AddMemberModal";
import MemberComponent from "./MemberComponent";
import Link from "next/link";
import AttactmentComponent from './AttactmentComponent';
import EmployeeCalendarComponent from './EmployeeCalendarComponent';
import CalendarComponent from './CalendarComponent';
import ViewMember from './ViewMember';
const ProjectLeaderCalendar = () => {
  return (
    <div>
          <div className="ml-5 mt-5">
      {/* Upload file */}
      <div className="flex justify-between">
          <h2 className="text-xl text-color-text-black font-bold">
            Project Name
          </h2>
          
            {/*Modal */}
            <AddMemberModal />
          
        </div>
      <div className="flex py-2">
       
        <div className="w-[900px] overflow-hidden  border border-blue-300  rounded-t-lg  ">
          {/* Header */}
          <div className="w-full h-14 bg-white border-b border-blue-300 rounded-t-lg  flex">
            <div
              class="hidden md:flex md:items-center md:w-auto w-full "
              id="menu"
            >
              <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  <li>
                    <Link class="md:p-4 py-3 px-0 block" href="/developerDashboard">
                      Upload
                    </Link>
                  </li>
                  <li>
                    <Link class="md:p-4 py-3 px-0 block " href="/developerDashboard/viewAttactment">
                      View Attactment
                    </Link>
                  </li>
                  <li>
                    <Link class="md:p-4 py-3 px-0 block text-blue-700" href="/developerDashboard/calendar">
                      Calendar
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* text */}
         <CalendarComponent/>
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-auto lg:flex-1">
          <ViewMember />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectLeaderCalendar