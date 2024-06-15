import React from "react";
import AddMemberModal from "@/components/AddMemberModal";
import CalendarComponent from "@/components/CalendarComponent";
import MemberProjectLeader from "@/components/MemberProjectLeader";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";

const CalendarPage = () => {
  return (
    <div className="w-full px-6 py-4 h-screen  flex flex-col">
      <div className="flex  justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-col xl:flex-row  gap-10">
        <div className="flex flex-col flex-1 bg-white border shadow-md rounded-xl">
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className="flex-grow overflow-y-auto no-scrollbar">
            <CalendarComponent />
          </div>
        </div>
        <div className="w-full xl:w-[24%]">
          <MemberProjectLeader />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;