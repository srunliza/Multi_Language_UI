import React from "react";
import AddMemberModal from "@/components/AddMemberModal";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import CalendarComponent from "@/components/CalendarComponent";
import ViewMember from "@/components/ViewMember";

const CalendarPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-between mb-2 p-4">
        <h2 className="text-lg text-color-text-black">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-grow gap-3 overflow-hidden">
        <div className="flex flex-col bg-white shadow-lg shadow-orange-50 rounded-xl border border-blue-300 flex-grow">
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className="flex-grow overflow-y-auto no-scrollbar">
            <CalendarComponent />
          </div>
        </div>
        <div className="w-1/3">
          <ViewMember />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;