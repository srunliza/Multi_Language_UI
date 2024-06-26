"use client";
import { DatePicker } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";

const SortComponent = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    router.push(pathname); // Navigate to the current path without query parameters
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-5 flex-wrap items-center mb-4 w-full sm:w-auto">
      <div className="flex w-full sm:w-auto">
        <span className="w-[6rem] px-5 py-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md">
          <p>Start</p>
        </span>
        <div className="border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-[13.5rem] bg-white">
          <DatePicker
            id="start-date"
            className="max-w-[284px]"
            onChange={(value) =>
              handleSortChange({ target: { name: "startDate", value } })
            }
          />
        </div>
      </div>
      <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
        <span className="w-[6rem] px-5 py-3 inline-flex items-center text-sm text-gray-900 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md">
          <p>End</p>
        </span>
        <div className="w-[13.5rem] border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 block bg-white">
          <DatePicker
            id="end-date"
            className="max-w-[284px]"
            onChange={(value) =>
              handleSortChange({ target: { name: "endDate", value } })
            }
          />
        </div>
      </div>
      <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
        <span className="inline-flex items-center w-[6rem] px-4 py-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md">
          <p>Status</p>
        </span>
        <select
          name="status"
          className="w-[10rem] border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-white"
          onChange={handleSortChange}
        >
          <option value="All">All</option>
          <option value="PENDING" className="text-red-500 font-medium">
            Pending
          </option>
          <option value="PROGRESS" className="text-yellow-500 font-medium">
            Progress
          </option>
          <option value="COMPLETED" className="text-green-500 font-medium">
            Completed
          </option>
        </select>
      </div>
      <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm text-white bg-blue-800 rounded-md hover:bg-blue-700"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default SortComponent;
