import AddMemberModal from "@/components/AddMemberModal";
import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import CalendarComponent from "@/components/CalendarComponent";
import ViewMember from "@/components/ViewMember";

const CalendarPage = () => {
  return (

<div className="w-full  ">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg text-color-text-black">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex justify-between ">
        <div className="w-[893px] bg-white shadow-lg shadow-orange-50 rounded-xl border border-blue-300 ">
          {/* Header */}
          <NavbarProjectLeaderComponent />
          {/* container */}
          <CalendarComponent />
        </div>
        <ViewMember />
      </div>
    </div>
  );
};

export default CalendarPage;
