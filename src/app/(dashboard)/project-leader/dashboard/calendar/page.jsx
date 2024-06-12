import React from "react";
import AddMemberModal from "@/components/AddMemberModal";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import CalendarComponent from "@/components/CalendarComponent";
import MemberProjectLeader from "@/components/MemberProjectLeader";

const CalendarPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-between mb-2 p-4">
        <h2 className="text-lg text-color-text-black">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-wrap justify-between gap-4">
      <div className="flex flex-col bg-white shadow-md w-[70%] rounded-xl">
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className="flex-grow overflow-y-auto no-scrollbar">
            <CalendarComponent />
          </div>
        </div>
        <div className="">
          <MemberProjectLeader />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;