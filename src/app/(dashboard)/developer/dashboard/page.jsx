"use client";
import Link from "next/link";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/obj/projects";
import { projectsTableData } from "@/obj/tableData";
import SortProjectCardList from "@/components/SortProjectCardListComponent";

const getStatusTextColor = (status) => {
  switch (status) {
    case "Finished":
      return "text-green-500";
    case "Progress":
      return "text-yellow-500";
    case "Pending":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const DeveloperDashboard = () => {
  const [projects, setProjects] = useState(projectsData);
  const [tableData, setTableData] = useState(projectsTableData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("name");

  const modalRef = useRef();

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsViewMemberOpen(false);
    setIsEditing(false);
  };

  const handleSortClick = (criteria) => {
    if (criteria === "status") return; // Prevent sorting by status
    setSortCriteria(criteria);
    const sortedData = [...tableData].sort((a, b) => {
      if (criteria === "formDate" || criteria === "toDate") {
        const dateA = new Date(a[criteria]);
        const dateB = new Date(b[criteria]);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return sortOrder === "asc"
          ? a[criteria].localeCompare(b[criteria])
          : b[criteria].localeCompare(a[criteria]);
      }
    });
    setTableData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
    };
    if (isViewMemberOpen || isModalOpen || isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isViewMemberOpen, isModalOpen, isEditing]);

  return (
    <main className="p-4 sm:p-6 md:p-8 lg:p-10 flex-1 rounded-xl bg-white shadow-lg h-screen overflow-hidden border">
      <div className="">
        <SortProjectCardList
          selectedStatus={selectedStatus}
          handleStatusChange={handleStatusChange}
          handleSortClick={handleSortClick}
        />

        <div className="sm:overflow-y-auto overflow-x-auto shadow-md sm:rounded-lg mt-5 no-scrollbar">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 bg-[#daeaff]">
              <tr>
                <th scope="col" className="px-6 py-4 cursor-pointer" onClick={() => handleSortClick('productName')}>Product Name</th>
                <th scope="col" className="px-10 py-4 cursor-pointer" onClick={() => handleSortClick('language')}>Language</th>
                <th scope="col" className="px-10 py-4">Status</th>
                <th scope="col" className="px-10 py-4 cursor-pointer" onClick={() => handleSortClick('formDate')}>Form</th>
                <th scope="col" className="px-10 py-4 cursor-pointer" onClick={() => handleSortClick('toDate')}>To</th>
                <th scope="col" className="px-1 py-4 text-right flex justify-center items-center pr-3">Actions</th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto h-full no-scrollbar">
              {tableData.map((project, index) => (
                <tr key={index} className="bg-white border-b text-gray-900 dark:border-gray-500">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{project.productName}</th>
                  <td className="px-6 py-4 pl-10">{project.language}</td>
                  <td className={`px-6 py-4 pl-9 ${getStatusTextColor(project.status)}`}>{project.status}</td>
                  <td className="px-6 py-4">{project.formDate}</td>
                  <td className="px-6 py-4">{project.toDate}</td>
                  <td className="px-1 py-4 text-right flex justify-center items-center gap-3">
                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small" /></Link>
                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small" /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DeveloperDashboard;
