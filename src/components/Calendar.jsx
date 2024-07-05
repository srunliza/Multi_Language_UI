"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar({ deadline, projects }) {
  console.log("Projects: ", projects);
  const { postedDate } = deadline.length > 0 ? deadline[0] : {};
  const projectName = projects?.projectName || "No Project Name";
  const createDate = projects?.createDate;
  console.log(createDate);

  // Find the maximum expireDate from attachments
  let maxExpireDate = null;
  if (projects.attachment && projects.attachment.length > 0) {
    maxExpireDate = projects.attachment.reduce((maxDate, attachment) => {
      const expireDate = new Date(attachment.expireDate);
      return !maxDate || expireDate > maxDate ? expireDate : maxDate;
    }, null);
  }

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
          start: `${createDate}`,
          end: maxExpireDate ? maxExpireDate.toISOString() : null,
        },
      ]}
      height={575} // Fixed height for the calendar
    />
  );
}
