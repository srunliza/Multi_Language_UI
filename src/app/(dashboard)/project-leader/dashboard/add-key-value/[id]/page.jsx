import React from "react";
import MemberProjectLeader from "@/components/MemberLeader";
import OpenAddMemberModalButton from "../../../_components/ProjectLeaderAddMember";
import NavbarProjectLeaderComponent from "../../../_components/NavbarProjectLeaderComponent";
import { getProjectByIdService } from "@/service/project.service";
import { getAllLanguageService } from "@/service/language.service";
import FormUploadManuallyComponent from "../../../_components/FormUploadManuallyComponent";
import { getAllStaticKeyService } from "@/service/staticKey.service";

const ViewAttachmentPage = async ({ params }) => {
  const { id } = params;
  const languageData = await getAllLanguageService();
  const project = await getProjectByIdService(id);
  const staticKeyData = await getAllStaticKeyService();
  let projects = project.payload || [];

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
          <div className="flex-grow overflow-y-auto no-scrollbar px-8 py-4">
            {/* Section form upload manually */}
            <FormUploadManuallyComponent
              languageData={languageData.payload}
              proId={projects.projectId}
              staticKeyData={staticKeyData.payload}
            />
            {/* End Section form upload manually */}
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
