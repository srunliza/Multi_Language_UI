"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { translatorData } from "@/obj/translatorData";
import SortProjectCardList from "@/components/SortProjectCardListComponent";

const getStatusTextColor = (status) => {
  switch (status) {
    case "Completed":
      return "text-green-500";
    case "Progress":
      return "text-yellow-500";
    case "Pending":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const TranslatorPage = () => {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortedData, setSortedData] = useState(translatorData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    sortData();
  }, [selectedStatus, startDate, endDate, sortCriteria, sortOrder]);

  const handleRowClick = (id) => {
    router.push(`/translator/dashboard/workspace`);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortData = () => {
    let filteredData = [...translatorData];

    if (selectedStatus !== "All") {
      filteredData = filteredData.filter(
        (item) => item.status === selectedStatus
      );
    }

    if (startDate) {
      filteredData = filteredData.filter(
        (item) => new Date(item.startDate) >= new Date(startDate)
      );
    }

    if (endDate) {
      filteredData = filteredData.filter(
        (item) => new Date(item.endDate) <= new Date(endDate)
      );
    }

    filteredData.sort((a, b) => {
      if (sortCriteria === "startDate" || sortCriteria === "endDate") {
        const dateA = new Date(a[sortCriteria]);
        const dateB = new Date(b[sortCriteria]);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return sortOrder === "asc"
          ? a[sortCriteria].localeCompare(b[sortCriteria])
          : b[sortCriteria].localeCompare(a[sortCriteria]);
      }
    });

    setSortedData(filteredData);
  };

  return (
    <div className="mt-2">
      <div className="ml-10">
        <SortProjectCardList
          selectedStatus={selectedStatus}
          handleStatusChange={(e) => handleStatusChange(e.target.value)}
          handleSortClick={(value, type) => {
            if (type === "startDate") {
              setStartDate(value);
            } else {
              setEndDate(value);
            }
          }}
        />
      </div>

      {/* table */}
      <div className="shadow-lg h-screen no-scrollbar rounded-lg overflow-x-auto md:mx-10 mx-10 bg-white">
        <table className="min-w-full">
          <thead className="text-gray-700 sticky top-0 white bg-blue-200 dark:text-gray-400">
            <tr>
              <th className="py-4 px-3 text-gray-700 font-semibold text-center">
                File Name
                <button onClick={() => handleSortClick("name")}>
                  <svg
                    className="h-4 w-4 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-4 px-3 text-center text-gray-700 font-semibold">
                Owner
                <button onClick={() => handleSortClick("owner")}>
                  <svg
                    className="h-4 w-4 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-4 px-3 text-center text-gray-700 font-semibold">
                Status
              </th>
              <th className="py-3 px-3 text-center text-gray-700 font-semibold">
                Start Date
                <button onClick={() => handleSortClick("startDate")}>
                  <svg
                    className="h-4 w-4 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </th>
              <th className="py-4 px-3 text-center text-gray-700 font-semibold">
                End Date
                <button onClick={() => handleSortClick("endDate")}>
                  <svg
                    className="h-4 w-4 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((data) => (
              <tr
                key={data.id}
                className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                onClick={() => handleRowClick(data.id)}
              >
                <th
                  scope="row"
                  className="text-center px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="overflow-auto">{data.name}</div>
                </th>
                <td className="text-center py-4 px-3 border-b border-gray-200">
                  <div className="overflow-auto">{data.owner}</div>
                </td>
                <td
                  className={`text-center py-4 px-3 border-b border-gray-200 ${getStatusTextColor(
                    data.status
                  )}`}
                >
                  <div className="overflow-auto">{data.status}</div>
                </td>
                <td className="text-center py-4 px-3 border-b border-gray-200">
                  <div className="overflow-auto">{data.startDate}</div>
                </td>
                <td className="text-center py-4 px-3 border-b border-gray-200">
                  <div className="overflow-auto">{data.endDate}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TranslatorPage;
