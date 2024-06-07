"use client";
import { projectsTableData } from "@/obj/tableData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { saveAs } from "file-saver";

const DeveloperDashboard = () => {
  const initialData = projectsTableData; // Use the imported data as initial data
  const [data, setData] = useState(initialData);
  const [statusFilter, setStatusFilter] = useState("All");
  const router = useRouter();

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setStatusFilter(status);

    if (status === "All") {
      setData(initialData);
    } else {
      const filteredData = initialData.filter((item) => item.status === status);
      setData(filteredData);
    }
  };

  const handleDownload = (fileType) => {
    // Replace the below URL with your actual file URL or Blob data
    const fileUrl = `/path/to/your/${fileType}-file.${fileType}`;
    const fileName = `your-file.${fileType}`;
    saveAs(fileUrl, fileName);
  };

  const handleDownloadClick = () => handleDownload("json");
  const handleXmlClick = () => handleDownload("xml");
  const handleStringClick = () => handleDownload("string");

  const handlePreview = (fileType) => {
    const routeMap = {
      json: "/developer/dashboard/preview-json-file",
      xml: "/developer/dashboard/preview-xml-file",
      string: "/developer/dashboard/preview-string-file",
    };
    router.push(routeMap[fileType]);
  };

  const handleJsonPreview = () => handlePreview("json");
  const handleXmlPreview = () => handlePreview("xml");
  const handleStringPreview = () => handlePreview("string");

  return (
    <div className="w-full p-6">
      {/* Filters */}
      <div className="flex-1">
        <div className="flex gap-5 flex-wrap items-center mb-4">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p>Start</p>
            </span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p>End</p>
            </span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p>Status</p>
            </span>
            <select
              value={statusFilter}
              onChange={handleStatusChange}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="Pending" className="text-red-500 font-semibold">
                Pending
              </option>
              <option
                value="Progress"
                className="text-yellow-500 font-semibold"
              >
                Progress
              </option>
              <option value="Finished" className="text-green-500 font-semibold">
                Finished
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="relative h-screen overflow-x-auto w-full shadow-md rounded-lg mt-8 no-scrollbar">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 font-semibold sticky top-0 z-30 bg-[#daeaff]">
            <tr>
              <th scope="col" className="px-6 py-4">
                Product Name
              </th>
              <th scope="col" className="px-10 py-4">
                Language
              </th>
              <th scope="col" className="px-10 py-4">
                Status
              </th>
              <th scope="col" className="px-10 py-4">
                From
              </th>
              <th scope="col" className="px-10 py-4">
                To
              </th>
              <th scope="col" className="pl-10 pr-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto no-scrollbar">
            {data.map((item) => (
              <tr
                key={item.productName + item.language}
                className="bg-white border-b text-gray-900 dark:border-gray-300"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.productName}
                </th>
                <td className="px-6 py-4 pl-10">{item.language}</td>
                <td
                  className={`px-6 py-4 pl-9 ${
                    item.status === "Pending"
                      ? "text-red-600"
                      : item.status === "Progress"
                      ? "text-yellow-600"
                      : item.status === "Finished"
                      ? "text-green-600"
                      : ""
                  } truncate`}
                >
                  {item.status}
                </td>
                <td className="px-6 py-4 border-gray-200">{item.fromDate}</td>
                <td className="px-6 py-4 border-gray-200">{item.toDate}</td>
                <td className="flex py-3 gap-4 pl-8 items-center">
                  <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="">
                      <RemoveRedEyeOutlinedIcon
                        style={{ color: "#4F81FF" }}
                      ></RemoveRedEyeOutlinedIcon>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content absolute z-[1] left-1/2 transform -translate-x-1/2 menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
                    >
                      <li>
                        <button
                          onClick={handleXmlPreview}
                          className="text-red-500 font-semibold"
                        >
                          XML File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleJsonPreview}
                          className="text-yellow-500 font-semibold"
                        >
                          JSON File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleStringPreview}
                          className="text-green-500 font-semibold"
                        >
                          String File
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown relative">
                    <button tabIndex={0} role="button" className="">
                      <FileDownloadOutlinedIcon style={{ color: "#F8C408" }} />
                    </button>
                    <ul
                      tabIndex={0}
                      className="dropdown-content absolute z-[1] left-1/2 transform -translate-x-1/2 menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
                    >
                      <li>
                        <button
                          onClick={handleXmlClick}
                          className="text-red-500 font-semibold"
                        >
                          XML File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleDownloadClick}
                          className="text-yellow-500 font-semibold"
                        >
                          JSON File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleStringClick}
                          className="text-green-500 font-semibold"
                        >
                          String File
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
