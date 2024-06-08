"use client";
import { projectsTableData } from "@/obj/tableData";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { saveAs } from "file-saver";
import SortProjectCardListComponent from "@/components/SortProjectCardListComponent";

const getStatusTextColor = (status) => {
  switch (status) {
    case "Completed":
      return "text-green-600";
    case "Progress":
      return "text-yellow-600";
    case "Pending":
      return "text-red-600";
    default:
      return "";
  }
};

const AttachmentPage = () => {
  const initialData = projectsTableData;
  const [data, setData] = useState(initialData);
  const [statusFilter, setStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortCriteria, setSortCriteria] = useState("projectName");
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();

  useEffect(() => {
    sortData();
  }, [statusFilter, startDate, endDate, sortCriteria, sortOrder]);

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortData = () => {
    let filteredData = [...initialData];

    if (statusFilter !== "All") {
      filteredData = filteredData.filter(
        (item) => item.status === statusFilter
      );
    }

    if (startDate) {
      filteredData = filteredData.filter(
        (item) => new Date(item.fromDate) >= new Date(startDate)
      );
    }

    if (endDate) {
      filteredData = filteredData.filter(
        (item) => new Date(item.toDate) <= new Date(endDate)
      );
    }

    filteredData.sort((a, b) => {
      if (sortCriteria === "fromDate" || sortCriteria === "toDate") {
        const dateA = new Date(a[sortCriteria]);
        const dateB = new Date(b[sortCriteria]);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return sortOrder === "asc"
          ? a[sortCriteria].localeCompare(b[sortCriteria])
          : b[sortCriteria].localeCompare(a[sortCriteria]);
      }
    });

    setData(filteredData);
  };

  const handleDownload = (fileType) => {
    const fileUrl = `/path/to/your/${fileType}-file.${fileType}`;
    const fileName = `your-file.${fileType}`;
    saveAs(fileUrl, fileName);
  };

  const handleDownloadClick = () => handleDownload("json");
  const handleXmlClick = () => handleDownload("xml");
  const handleStringClick = () => handleDownload("string");

  const handlePreview = (fileType) => {
    const routeMap = {
      json: "./dashboard/preview-json-file",
      xml: "./dashboard/preview-xml-file",
      string: "./dashboard/preview-string-file",
    };
    router.push(routeMap[fileType]);
  };

  const handleJsonPreview = () => handlePreview("json");
  const handleXmlPreview = () => handlePreview("xml");
  const handleStringPreview = () => handlePreview("string");

  const handleRowClick = () => {
    router.push("/developer/dashboard/preview-page");
  };

  return (
    <div className="w-full p-6">
      <SortProjectCardListComponent
        selectedStatus={statusFilter}
        handleStatusChange={(e) => handleStatusChange(e.target.value)}
        handleSortClick={(value, type) => {
          if (type === "startDate") {
            setStartDate(value);
          } else if (type === "endDate") {
            setEndDate(value);
          }
        }}
      />
      <div className="h-screen overflow-x-auto w-full shadow-md rounded-lg no-scrollbar">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 z-10 font-semibold sticky top-0 bg-[#daeaff]">
            <tr>
              <th scope="col" className="px-6 py-4">
                File Name
                <button onClick={() => handleSortClick("projectName")}>
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
              <th scope="col" className="px-10 py-4">
                Language
                <button onClick={() => handleSortClick("language")}>
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
              <th scope="col" className="px-10 py-4">
                Status
              </th>
              <th scope="col" className="px-10 py-4">
                From
                <button onClick={() => handleSortClick("fromDate")}>
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
              <th scope="col" className="px-10 py-4">
                To
                <button onClick={() => handleSortClick("toDate")}>
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
              <th scope="col" className="pl-10 pr-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto no-scrollbar">
            {data.map((item) => (
              <tr
                key={item.projectName}
                className="bg-white border-b text-gray-900 dark:border-gray-300 cursor-pointer"
                onClick={handleRowClick}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.projectName}
                </th>
                <td className="px-6 py-4 pl-10">{item.language}</td>
                <td className={`px-6 py-4 pl-9 ${getStatusTextColor(item.status)} truncate`}>
                  {item.status}
                </td>
                <td className="px-6 py-4 border-gray-200">{item.fromDate}</td>
                <td className="px-6 py-4 border-gray-200">{item.toDate}</td>
                <td
                  className="flex py-3 gap-4 pl-8 items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="">
                      <RemoveRedEyeOutlinedIcon style={{ color: "#4F81FF" }}></RemoveRedEyeOutlinedIcon>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content absolute z-[1] left-1/2 transform -translate-x-1/2 menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
                    >
                      <li>
                        <button onClick={handleXmlPreview} className="text-red-500 font-semibold">
                          XML File
                        </button>
                      </li>
                      <li>
                        <button onClick={handleJsonPreview} className="text-yellow-500 font-semibold">
                          JSON File
                        </button>
                      </li>
                      <li>
                        <button onClick={handleStringPreview} className="text-green-500 font-semibold">
                          Strings File
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
                        <button onClick={handleXmlClick} className="text-red-500 font-semibold">
                          XML File
                        </button>
                      </li>
                      <li>
                        <button onClick={handleDownloadClick} className="text-yellow-500 font-semibold">
                          JSON File
                        </button>
                      </li>
                      <li>
                        <button onClick={handleStringClick} className="text-green-500 font-semibold">
                          Strings File
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

export default AttachmentPage;
