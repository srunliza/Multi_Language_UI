"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar({ deadline, projects }) {

  const { postedDate, expireDate } = deadline.length > 0 ? deadline[0] : {};
  const projectName = projects?.projectName || "No Project Name";

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "title",
        center: "",
        right: "prev,next",
      }}
      events={[
        {
          title: `${projectName}`,
          start: `${postedDate}`,
          end: `${expireDate}`,
        },
      ]}
      height={575} // Fixed height for the calendar
    />
  );
}
