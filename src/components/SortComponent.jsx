"use client";
import { useState } from "react";

const SortComponent = ({ selectedStatus, handleStatusChange, handleSortClick }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-5 flex-wrap items-center mb-4 w-full sm:w-auto">
      <div className="flex w-full sm:w-auto">
        <span className="w-[6rem] px-5 py-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md">
          <p>Start</p>
        </span>
        <input
          type="date"
          className="border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-[13.5rem] p-2.5 bg-white"
          onChange={() => handleSortClick("startDate")}
        />
      </div>
      <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
        <span className="w-[6rem] px-5 py-3 inline-flex items-center text-sm text-gray-900 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md">
          <p>End</p>
        </span>
        <input
          type="date"
          className="w-[13.5rem] border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-white"
          onChange={() => handleSortClick("endDate")}
        />
      </div>
      <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
        <span className="inline-flex items-center w-[6rem] px-4 py-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-r-0 rounded-l-md">
          <p>Status</p>
        </span>
        <select
          name="status"
          className="w-[10rem] border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-white"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="All">All</option>
          <option value="Pending" className="text-red-500 font-medium">
            Pending
          </option>
          <option value="Progress" className="text-yellow-500 font-medium">
            Progress
          </option>
          <option value="Completed" className="text-green-500 font-medium">
            Completed
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortComponent;
