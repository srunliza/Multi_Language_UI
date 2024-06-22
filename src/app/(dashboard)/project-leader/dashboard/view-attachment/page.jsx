"use client";
import React from "react";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import AttachmentComponent from "@/components/AttachmentComponent";
import MemberProjectLeader from "@/components/MemberProjectLeader";
import { useSearchParams } from "next/navigation";
import OpenAddMemberModalButton from "../../_components/ProjectLeaderAddMember";

const ViewAttachmentPage = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("projectName");

  return (
    <div className="w-full px-6 py-4 flex flex-col">
      <div className="flex justify-between  items-center mb-3">
        <h2 className="text-lg font-semibold">
          {projectName || "Project Name"}
        </h2>
        <OpenAddMemberModalButton/>
      </div>
      <div className="flex flex-col  xl:flex-row    gap-10">
        <div className="flex flex-col flex-1 bg-white shadow-md border rounded-xl">
          {/* Header */}
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className=" overflow-y-auto  no-scrollbar  mb-5  ">
            <AttachmentComponent />
          </div>
        </div>
        <div className="w-full  xl:w-[24%]">
          <MemberProjectLeader />
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
