import React from "react";
import AddMemberModal from "./AddMemberModal";
import CalendarComponent from "./CalendarComponent";
import ViewMember from "./ViewMember";
import NavbarProjectLeaderComponent from "@/app/project-leader/_components/NavbarProjectLeaderComponent";
const ProjectLeaderCalendar = () => {
  return (
    <div>
      <div className="ml-5 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-lg text-color-text-black ">
            Project Name
          </h2>
          <AddMemberModal />
        </div>
        <div className="flex py-2">
          <div className="w-[900px] overflow-hidden  border border-blue-300  rounded-t-lg  ">
            {/* Header */}
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
