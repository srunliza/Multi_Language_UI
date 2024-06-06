import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import ViewMember from "@/components/ViewMember";
import AddMemberModal from "@/components/AddMemberModal";
import AttachmentComponent from "@/components/AttachmentComponent";

const ViewAttachmentPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-between mb-2 p-4">
        <h2 className="text-lg text-color-text-black">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-grow gap-3 overflow-hidden">
        <div className="flex flex-col bg-white shadow-lg shadow-orange-50 rounded-xl border border-blue-300 flex-grow">
          {/* Header */}
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className="flex-grow overflow-y-auto no-scrollbar">
            <AttachmentComponent />
          </div>
        </div>
        <div className="w-1/3">
          <ViewMember />
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
