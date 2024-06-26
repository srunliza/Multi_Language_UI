import React from "react";
import OpenAddMemberModalButton from "../../../_components/ProjectLeaderAddMember";
import NavbarProjectLeaderComponent from "../../../_components/NavbarProjectLeaderComponent";
import AttachmentComponent from "@/components/AttachmentComponent";
import { getProjectByIdService } from "@/service/project.service";
import { getAttachmentByProjectIdService } from "@/service/attachment.service";
import { getAllLanguageService } from "@/service/language.service";
import MemberProjectLeader from "@/components/MemberLeader";

const ViewAttachmentPage = async ({ params }) => {
  const { id } = params;
  const project = await getProjectByIdService(id);
  let projects = project.payload || [];
  const attachment = await getAttachmentByProjectIdService(id);
  let attachments = attachment.payload || [];
  const language = await getAllLanguageService();
  let languages = language.payload || [];

  return (
    <div className="w-full px-6 py-4 h-full flex flex-col">
      <div className="flex justify-between  items-center mb-3">
        <h2 className="text-2xl font-semibold">{projects.projectName}</h2>
        <OpenAddMemberModalButton project={projects} />
      </div>
      <div className="flex flex-col xl:flex-row gap-10 h-[40.7rem]">
        <div className="flex flex-col bg-white flex-1 px-3 h-[40.7rem] shadow-md border rounded-xl">
          {/* Header */}
          <NavbarProjectLeaderComponent project={projects} />
          {/* Container */}
          <div className="overflow-y-auto no-scrollbar">
            <AttachmentComponent attachment={attachments} language={languages}/>
          </div>
        </div>
        <div className="xl:w-[23%] lg:w-[23%] xl:block lg:hidden sm:hidden md:hidden">
          <MemberProjectLeader project={projects} />
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
