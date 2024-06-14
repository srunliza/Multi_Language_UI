"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { projectsTableData } from "@/obj/tableData";
import SortProjectCardList from "@/components/SortComponent";

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
  const [sortedData, setSortedData] = useState(projectsTableData);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortData = useCallback(() => {
    let sorted = [...projectsTableData];

    sorted.sort((a, b) => {
      if (sortCriteria === "fromDate" || sortCriteria === "toDate") {
        const dateA = new Date(a[sortCriteria]);
        const dateB = new Date(b[sortCriteria]);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        const valueA = a[sortCriteria] ?? "";
        const valueB = b[sortCriteria] ?? "";
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
    });

    setSortedData(sorted);
  }, [sortCriteria, sortOrder]);

  useEffect(() => {
    sortData();
  }, [sortData]);

  const handleRowClick = (id) => {
    router.push(`/translator/dashboard/workspace`);
  };

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="w-full p-6">
      <SortProjectCardList
        handleSortClick={(value, type) => {
          if (type === "startDate") {
            setSortCriteria("fromDate");
            setSortOrder(value);
          } else {
            setSortCriteria("toDate");
            setSortOrder(value);
          }
        }}
      />

      {/* Table */}
      <div className="shadow-lg h-screen no-scrollbar overflow-y-scroll rounded-lg ">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 z-10 font-semibold sticky top-0 bg-[#daeaff]">
            <tr>
              <th
                className="px-6 py-4"
                onClick={() => handleSortClick("projectName")}
              >
                File Name
              </th>
              <th
                className="px-10 py-4"
                onClick={() => handleSortClick("language")}
              >
                Language
              </th>
              <th className="px-10 py-4">Status</th>
              <th
                className="px-10 py-4"
                onClick={() => handleSortClick("fromDate")}
              >
                Start Date
              </th>
              <th
                className="px-10 py-4"
                onClick={() => handleSortClick("toDate")}
              >
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((data) => (
              <tr
                key={data.id}
                className="bg-white border-b text-gray-900 hover:bg-gray-100 dark:border-gray-300 cursor-pointer"
                onClick={() => handleRowClick(data.id)}
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {data.projectName}
                </td>
                <td className="py-4 pl-10">{data.language}</td>
                <td
                  className={`py-4 pl-10 ${getStatusTextColor(
                    data.status
                  )} truncate`}
                >
                  {data.status}
                </td>
                <td className="pl-10 py-4 border-gray-200">{data.fromDate}</td>
                <td className="pl-10 py-4 border-gray-200">{data.toDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TranslatorPage;
