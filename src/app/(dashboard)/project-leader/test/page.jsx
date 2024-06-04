import AddMemberModal from "@/components/AddMemberModal";
import ViewMember from "@/components/ViewMember";
import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import Link from "next/link";
const TestPage = () => {
  return (
    <div className="w-[80%]">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg text-color-text-black">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex justify-between ">
        <div className="bg-white shadow-lg shadow-orange-50 rounded-xl border border-blue-300 ">
          {/* Header */}
          <NavbarProjectLeaderComponent />

        </div>
        <ViewMember />
      </div>
    </div>
  );
};

export default TestPage;
