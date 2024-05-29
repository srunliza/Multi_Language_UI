import React from 'react'
import AddMemberModal from "./AddMemberModal";
import MemberComponent from "./MemberComponent";
import Link from "next/link";
const ProjectLeaderAttactment = () => {
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
      <div className="flex">
       
        <div className="w-[900px] h-screen bg-red-100 border border-blue-300  rounded-t-lg  ">
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
                    <Link class="md:p-4 py-3 px-0 block text-blue-700" href="/developerDashboard/viewAttactment">
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
          {/* text */}
          <div className="mt-10">
            <p className="text-xl font-bold text-center">
              {" "}
              Ready to add content?
            </p>
            <p className="text-sm text-center py-10">
              There are two ways to add content to your project - choose the
              most suitable opton for you.{" "}
            </p>
          </div>
          {/* file upload */}
          <div className="flex">
           
          </div>
          </div>
          <MemberComponent/>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectLeaderAttactment