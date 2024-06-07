import { calendarData } from "@/obj/calendarData";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CalendarPage = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="w-full  p-4 bg-white shadow-md rounded-lg pr-8 pl-8">
        <div className="flex items-center justify-between mb-4 text-black">
          <h1 className="text-2xl font-semibold">May 2024</h1>
          <div>
            <button className="px-4 py-2 font-bold rounded-l hover:bg-[#f1f4f9]">
              <ChevronLeftIcon />
            </button>
            <button className="px-4 py-2 font-bold rounded-r hover:bg-gray-200">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 text-gray-800 h-[35rem] bg-[#f1f4f9] rounded-lg">
          {/* Weekday Headers */}
          <div className="text-center text-sm py-2 font-semibold">MON</div>
          <div className="text-center text-sm py-2 font-semibold">TUE</div>
          <div className="text-center text-sm py-2 font-semibold">WED</div>
          <div className="text-center text-sm py-2 font-semibold">THU</div>
          <div className="text-center text-sm py-2 font-semibold">FRI</div>
          <div className="text-center text-sm py-2 font-semibold">SAT</div>
          <div className="text-center text-sm py-2 font-semibold">SUN</div>

          {/* Calendar Days */}
          {calendarData.days.map((day, index) => {
            const isFirst6Days = index < 6;
            const isLast7Days = index >= calendarData.days.length - 7;
            return (
              <div
                key={index}
                className={`p-8 text-right pt-2 pb-12 pr-4 ${
                  day.isCurrentMonth ? "bg-white" : "bg-gray-100 bg-opacity-25"
                } border ${
                  isFirst6Days || isLast7Days
                    ? "bg-custom-pattern bg-custom-size"
                    : ""
                }`}
              >
                {day.date}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
