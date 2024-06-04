import AddMemberModal from "@/components/AddMemberModal";
import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import CalendarComponent from "@/components/CalendarComponent";
import ViewMember from "@/components/ViewMember";

const CalendarPage = () => {
  return (
    <div>
      <div className="ml-5 ">
        <div className="flex py-2">
          <div className="w-[840px] overflow-hidden  border border-blue-300  rounded-t-lg  ">
            {/* Header */}
            <NavbarProjectLeaderComponent />

            {/* text */}
            {/* <CalendarComponent /> */}
          </div>
          <div className="mt-10 ml-8 lg:mt-0 mr-5 w-full lg:w-auto lg:flex-1">
            <ViewMember />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
