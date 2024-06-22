import React from "react";
import MemberProjectLeader from "@/components/MemberProjectLeader";
import OpenAddMemberModalButton from "../../../_components/ProjectLeaderAddMember";
import NavbarProjectLeaderComponent from "../../../_components/NavbarProjectLeaderComponent";
import AttachmentComponent from "@/components/AttachmentComponent";
import { getProjectByIdService } from "@/service/project.service";

const ViewAttachmentPage = async ({ params }) => {
  const { id } = params;
  const project = await getProjectByIdService(id);
  let projects = project.payload || [];

  return (
    <div className="w-full px-6 py-4 flex flex-col">
      <div className="flex justify-between  items-center mb-3">
        <h2 className="text-lg font-semibold">{projects.projectName}</h2>
        <OpenAddMemberModalButton project={projects} />
      </div>
      <div className="flex flex-col xl:flex-row gap-10 h-[41rem]">
        <div className="flex flex-col flex-1  px-3 bg-white shadow-md border rounded-xl">
          {/* Header */}
          <NavbarProjectLeaderComponent project={projects} />
          {/* Container */}
          <div className=" overflow-y-auto  no-scrollbar  mb-5  ">
            <AttachmentComponent project={projects} />
          </div>
        </div>
        <div className="w-full xl:w-[24%]">
          <MemberProjectLeader project={projects} />
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
