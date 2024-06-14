"use client";
import { projectsTableData } from "@/obj/tableData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { saveAs } from "file-saver";
import SortProjectCardListComponent from "@/components/SortComponent";

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
  const router = useRouter();

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
      <SortProjectCardListComponent />

      <div className="shadow-lg h-screen no-scrollbar overflow-y-scroll rounded-lg">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 z-20 font-semibold sticky top-0 bg-[#daeaff]">
            <tr>
              <th scope="col" className="px-6 py-4">
                File Name
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
          <tbody>
            {data.map((item) => (
              <tr
                key={item.projectName}
                className="bg-white border-b text-gray-900 hover:bg-gray-100 dark:border-gray-300 cursor-pointer"
                onClick={handleRowClick}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.projectName}
                </th>
                <td className="px-6 py-4 pl-10">{item.language}</td>
                <td
                  className={`px-6 py-4 pl-9 ${getStatusTextColor(
                    item.status
                  )} truncate`}
                >
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
                      <RemoveRedEyeOutlinedIcon style={{ color: "#4F81FF" }} />
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
