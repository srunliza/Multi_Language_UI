"use client";
import React from "react";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import AddMemberModal from "@/components/AddMemberModal";
import AttachmentComponent from "@/components/AttachmentComponent";
import MemberProjectLeader from "@/components/MemberProjectLeader";
import { useSearchParams } from "next/navigation";

const ViewAttachmentPage = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("projectName");

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between mb-2 p-4">
        <h2 className="text-lg text-color-text-black">
          {projectName || "Project Name"}
        </h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex flex-col bg-white shadow-md w-[70%] rounded-xl">
          {/* Header */}
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className="flex-grow overflow-y-auto no-scrollbar mt-1 mb-5 flex justify-center items-center">
            <AttachmentComponent />
          </div>
        </div>
        <div className="">
          <MemberProjectLeader />
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
