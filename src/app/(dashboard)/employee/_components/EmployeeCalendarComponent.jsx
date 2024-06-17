"use client";
import { useState } from "react";
import dayjs from "dayjs";

const EmployeeCalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs();

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startOfWeek = startOfMonth.startOf("week");
  const endOfWeek = endOfMonth.endOf("week");

  const days = [];
  let date = startOfWeek;

  while (date.isBefore(endOfWeek)) {
    days.push(date);
    date = date.add(1, "day");
  }

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleToday = () => {
    setCurrentDate(today);
  };

  return (
    <main>
      <div className="lg:mr-0 xl:mr-0 bg-white shadow-lg rounded-xl text-gray-900 font-semibold text-center">
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-base">{currentDate.format("MMMM, YYYY")}</h3>
          <div className="gap-2 flex">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-md bg-indigo-200 hover:bg-indigo-300 text-indigo-600"
            >
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-md bg-indigo-200 hover:bg-indigo-300 text-indigo-600"
            >
              <svg
                className="w-4 h-4 stroke-current"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button
              onClick={handleToday}
              className="p-2 rounded-md bg-indigo-200 hover:bg-indigo-300 text-gray-600"
            >
              Today
            </button>
          </div>
        </div>
        <hr />

        {/* week of day */}
        <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-4 gap-1">
          <div className="text-gray-700 text-sm">Mon</div>
          <div className="text-gray-700 text-sm">Tue</div>
          <div className="text-gray-700 text-sm">Wed</div>
          <div className="text-gray-700 text-sm">Thu</div>
          <div className="text-gray-700 text-sm">Fri</div>
          <div className="text-gray-700 text-sm">Sat</div>
          <div className="text-gray-700 text-sm">Sun</div>

          {/* days */}
          {days.map((day, index) => {
            const isCurrentMonth = day.month() === currentDate.month();
            const isToday = day.isSame(today, "day");

            return (
              <a
                href="#"
                key={index}
                className={`hover:bg-indigo-100 text-xs rounded-md p-2 ${
                  isCurrentMonth
                    ? "text-gray-900"
                    : "text-gray-500 bg-custom-pattern"
                } ${
                  isToday ? "bg-indigo-500 text-white hover:bg-indigo-600" : ""
                }`}
              >
                {day.date()}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default EmployeeCalendarComponent;
