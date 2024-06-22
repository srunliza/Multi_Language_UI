import React from "react";
import CalendarComponent from "@/components/CalendarComponent";
import MemberProjectLeader from "@/components/MemberProjectLeader";
import OpenAddMemberModalButton from "../../_components/ProjectLeaderAddMember";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import { getProjectByIdService } from "@/service/project.service";

const CalendarPage = async ({ params }) => {
  const { id } = params;
  const project = await getProjectByIdService(id);
  let projects = project.payload || [];

  return (
    <div className="w-full px-6 py-4 h-screen  flex flex-col">
      <div className="flex  justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">{projects.projectName}</h2>
        <OpenAddMemberModalButton project={projects}/>
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col flex-1  px-3 bg-white border shadow-md rounded-xl">
          <NavbarProjectLeaderComponent project={projects}/>
          {/* Container */}
          <div className="flex-grow ">
            <CalendarComponent project={projects}/>
          </div>
        </div>
        <div className="w-full xl:w-[24%] h-full">
          <MemberProjectLeader project={projects}/>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
