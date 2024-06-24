"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SortComponent from "./SortComponent";

const AttachmentComponent = ({ attachment = [] }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setData(attachment);
    setFilteredData(attachment);
  }, [attachment]);

  const handleFilterChange = (filters) => {
    const { status, startDate, endDate } = filters;
    let filtered = data;

    if (status !== "All") {
      filtered = filtered.filter((item) => item.status === status);
    }

    if (startDate) {
      filtered = filtered.filter(
        (item) => new Date(item.postedDate) >= new Date(startDate)
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (item) => new Date(item.expireDate) <= new Date(endDate)
      );
    }

    setFilteredData(filtered);
  };

  const handleRowClick = (attachmentId) => {
    router.push(`./workspace/${attachmentId}`);
  };

  return (
    <div className="w-full">
      <SortComponent onFilterChange={handleFilterChange} />
      {filteredData.length === 0 ? (
        <div className="h-[39rem] bg-white shadow-md rounded-lg px-6 py-[10rem] text-center text-gray-500 font-semibold">
          No attachments available. Please check back later.
        </div>
      ) : (
        <div className="no-scrollbar overflow-y-auto pt-4 px-3 h-[39rem] bg-white shadow-md rounded-lg">
          <table className="text-sm w-full text-left rtl:text-right text-gray-500">
            <thead className="text-sm text-gray-700 z-10 font-semibold sticky top-0 bg-[#daeaff]">
              <tr>
                <th scope="col" className="px-7 py-4">
                  File Name
                </th>
                <th scope="col" className="px-7 py-4">
                  Language
                </th>
                <th scope="col" className="px-7 py-4">
                  Status
                </th>
                <th scope="col" className="px-7 py-4">
                  Start Date
                </th>
                <th scope="col" className="px-7 py-4">
                  End Date
                </th>
              </tr>
            </thead>

            <tbody className="overflow-y-auto">
              {filteredData.map((item) => (
                <tr
                  key={item.attachmentId}
                  className="bg-white border-b hover:bg-gray-100 text-gray-900 dark:border-gray-300 cursor-pointer"
                  onClick={() => handleRowClick(item.attachmentId)}
                >
                  <th
                    scope="row"
                    className="px-6 flex items-center py-4 font-medium whitespace-nowrap lg:whitespace-normal"
                  >
                    {item.attachmentName}
                  </th>
                  <td className="px-6 py-4 overflow-hidden text-ellipsis">
                    {item.language ? item.language.language : "N/A"}
                  </td>
                  <td
                    className={`px-6 py-4 overflow-hidden text-ellipsis ${
                      item.status === "PENDING"
                        ? "text-red-500"
                        : item.status === "PROGRESS"
                        ? "text-yellow-500"
                        : item.status === "COMPLETED"
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-6 py-4 overflow-hidden text-ellipsis">
                    {item.postedDate
                      ? new Date(item.postedDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4 overflow-hidden text-ellipsis">
                    {item.expireDate
                      ? new Date(item.expireDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AttachmentComponent;
