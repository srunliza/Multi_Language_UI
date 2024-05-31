import React from "react";
import AddMemberModal from "./AddMemberModal";
import MemberComponent from "./MemberComponent";
import Link from "next/link";
import AttactmentComponent from "./AttactmentComponent";
import EmployeeCalendarComponent from "./EmployeeCalendarComponent";
import CalendarComponent from "./CalendarComponent";
import ViewMember from "./ViewMember";
import NavbarProjectLeaderComponent from "@/app/project-leader/_components/NavbarProjectLeaderComponent";
const ProjectLeaderCalendar = () => {
  return (
    <div>
      <div className="ml-5 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl text-color-text-black font-bold">
            Project Name
          </h2>
          <AddMemberModal />
        </div>
        <div className="flex py-2">
          <div className="w-[900px] overflow-hidden  border border-blue-300  rounded-t-lg  ">
            {/* Header */}
            {/* <div className="w-full  bg-white border-b border-blue-300 rounded-t-lg flex justify-start flex-wrap">
            <nav>
              <ul className="flex px-6 py-3 gap-5 items-center justify-center text-base text-gray-700">
                <li className="mx-2">
                  <Link className="block text-blue-700" href="/developerDashboard">
                    Upload
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className="block" href="/developerDashboard/viewAttactment">
                    View Attachment
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className=" block" href="/developerDashboard/calendar">
                    Calendar
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
            <NavbarProjectLeaderComponent />

            {/* text */}
            <CalendarComponent />
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-auto lg:flex-1">
            <ViewMember />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeaderCalendar;
