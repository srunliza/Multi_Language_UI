"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import ArticleIcon from "@mui/icons-material/Article";
import { FileDownloadOutlined } from "@mui/icons-material";
import Dropdown from "@/components/DropDownDownload";
import SortComponent from "./SortDeveloper";
import Toast from "@/components/ToastComponent";
import {
  downloadXMLService,
  downloadJsonService,
  downloadStringsService,
} from "@/service/attachment.service";

const AttachmentComponent = ({ attachment = [] }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const router = useRouter();

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 1000);
  };

  const onCloseToast = () => {
    setToast({ show: false, message: "", type: "" });
  };

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

  const handleDownload = async (fileType, attachmentIdOrUrl) => {
    const attachment = data.find((a) => a.attachmentId === attachmentIdOrUrl);
    if (attachment.status !== "COMPLETED") {
      showToast("File must be completed to download.", "warning");
      return;
    }

    let fileUrl, fileName;
    if (fileType === "xml") {
      const result = await downloadXMLService(attachmentIdOrUrl);
      if (result.status === "OK") {
        fileUrl = result.payload;
        fileName = `your-file.${fileType}`;
        saveAs(fileUrl, fileName);
        showToast("File downloaded successfully.", "success");
      } else {
        showToast("Failed to download file.", "error");
      }
    } else if (fileType === "json") {
      const result = await downloadJsonService(attachmentIdOrUrl);
      if (result.status === "OK") {
        fileUrl = result.payload;
        fileName = `your-file.${fileType}`;
        saveAs(fileUrl, fileName);
        showToast("File downloaded successfully.", "success");
      } else {
        showToast("Failed to download file.", "error");
      }
    } else if (fileType === "string") {
      const result = await downloadStringsService(attachmentIdOrUrl);
      if (result.status === "OK") {
        fileUrl = result.payload;
        fileName = `your-file.${fileType}`;
        saveAs(fileUrl, fileName);
        showToast("File downloaded successfully.", "success");
      } else {
        showToast("Failed to download file.", "error");
      }
    } else {
      fileUrl = `/path/to/your/${fileType}-file.${fileType}`;
      fileName = `your-file.${fileType}`;
      saveAs(fileUrl, fileName);
    }
  };

  const handlePreview = (fileType, attachmentId) => {
    const attachment = data.find((a) => a.attachmentId === attachmentId);
    if (attachment.status !== "COMPLETED") {
      showToast("File must be completed to preview.", "warning");
      return;
    }
    const routeMap = {
      json: `./preview-json-file/${attachmentId}`,
      xml: `./preview-xml-file/${attachmentId}`,
      string: `./preview-string-file/${attachmentId}`,
    };
    router.push(routeMap[fileType]);
  };

  const handleRowClick = (attachmentId) => {
    router.push(`./preview-page/${attachmentId}`);
  };

  const previewItems = [
    {
      label: "XML File",
      action: "xml",
      className: "text-red-500 font-semibold",
    },
    {
      label: "JSON File",
      action: "json",
      className: "text-yellow-500 font-semibold",
    },
    {
      label: "Strings File",
      action: "string",
      className: "text-green-500 font-semibold",
    },
  ];

  const downloadItems = [
    {
      label: "XML File",
      action: "xml",
      className: "text-red-500 font-semibold",
    },
    {
      label: "JSON File",
      action: "json",
      className: "text-yellow-500 font-semibold",
    },
    {
      label: "Strings File",
      action: "string",
      className: "text-green-500 font-semibold",
    },
  ];

  return (
    <div className="w-full">
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={onCloseToast}
      />
      <SortComponent onFilterChange={handleFilterChange} />
      {filteredData.length === 0 ? (
        <div className="h-[39rem] bg-white shadow-md rounded-lg px-6 py-[10rem] text-center text-gray-500 font-semibold">
          No attachments available. Please check back later.
        </div>
      ) : (
        <div className="no-scrollbar overflow-y-auto h-[39rem] bg-white shadow-md rounded-lg">
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
                <th scope="col" className="px-7 py-4">
                  Action
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
                  <td
                    className="flex py-4 items-center w-full px-6 gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Dropdown
                      icon={
                        <ArticleIcon
                          style={{ color: "#4F81FF" }}
                          className="w-5 h-5"
                        />
                      }
                      items={previewItems}
                      attachmentId={item.attachmentId}
                      handleAction={handlePreview}
                    />
                    <Dropdown
                      icon={
                        <FileDownloadOutlined
                          FileDownloadOutlinedIcon
                          style={{ color: "#F8C408" }}
                        />
                      }
                      items={downloadItems}
                      attachmentId={item.attachmentId}
                      handleAction={handleDownload}
                    />
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
