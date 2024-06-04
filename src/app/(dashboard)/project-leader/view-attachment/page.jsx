import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import AttactmentComponent from "@/components/AttactmentComponent";
import ViewMember from "@/components/ViewMember";
import AddMemberModal from "@/components/AddMemberModal";

const ViewAttachmentPage = () => {
  return (
    <div>
      <div className="w-full  ">
        <div className="flex justify-between mb-2">
          <h2 className="text-lg text-color-text-black">Project Name</h2>
          <AddMemberModal />
        </div>
        <div className="flex justify-between ">
          <div className="bg-white shadow-lg shadow-orange-50 rounded-xl border border-blue-300 ">
            {/* Header */}
            <NavbarProjectLeaderComponent />
            {/* container */}
            <AttactmentComponent />
          </div>
          <ViewMember />
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
