import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import AttactmentComponent from "@/components/AttactmentComponent";
import ViewMember from "@/components/ViewMember";

const ViewAttachmentPage = () => {
  return (
    <div>
      <div className="mx-5">
        <div className="flex flex-col lg:flex-row py-2">
          <div className="w-full lg:w-[840px] overflow-hidden border border-blue-300 rounded-t-lg">
            {/* Header */}
            <NavbarProjectLeaderComponent />
            {/* Text */}
            <AttactmentComponent />
          </div>
          <div className="mt-5 lg:mt-0 ml-8 w-full lg:w-auto lg:flex-1">
            <ViewMember />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAttachmentPage;
