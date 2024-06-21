"use client";
import Link from "next/link";
import React from "react";
import ProjectListComponent from "../../_components/ListComponent";
import SortComponent from "@/components/SortComponent";
import { getAllProjectService } from "@/service/project.service";
import { getCurrentUserProfileService } from "@/service/user.service";

const ProjectListPage = async ({ searchParams }) => {
  const sortOrder = searchParams.sortOrder || "asc";
  const startDate = searchParams.startDate
    ? new Date(searchParams.startDate)
    : null;
  const endDate = searchParams.endDate ? new Date(searchParams.endDate) : null;
  const status = searchParams.status || "All";

  const projectData = await getAllProjectService();
  let projects = projectData.payload || [];

  const currentUser = await getCurrentUserProfileService();

  const getUserRole = (project) => {
    for (let member of project.members) {
      if (member.userId === currentUser.payload.userId) {
        return member.role.roleName;
      }
    }
    return "Unknown";
  };

  const calculateDaysLeft = (attachments) => {
    if (!attachments || attachments.length === 0) return null;
    const longestExpireDate = attachments.reduce((max, attachment) =>
      new Date(attachment.expireDate) > new Date(max.expireDate)
        ? attachment
        : max
    ).expireDate;

    const expireDate = new Date(longestExpireDate);
    const today = new Date();
    const timeDiff = expireDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft >= 0 ? daysLeft : null;
  };

  const projectsWithDaysLeft = projects.map((project) => ({
    ...project,
    daysLeft: calculateDaysLeft(project.attachment),
    userRole: getUserRole(project),
  }));

  const filteredProjects = projectsWithDaysLeft.filter((project) => {
    const projectStartDate = new Date(project.createDate);
    const projectEndDate =
      project.attachment.length > 0
        ? new Date(project.attachment[0].expireDate)
        : null;
    const matchesStartDate = startDate ? projectStartDate >= startDate : true;
    const matchesEndDate = endDate ? projectEndDate <= endDate : true;
    const matchesStatus = status !== "All" ? project.status === status : true;
    return matchesStartDate && matchesEndDate && matchesStatus;
  });

  return (
    <div className="p-4 lg:mr-0 xl:mr-0 sm:p-6 md:p-8 lg:p-10 flex-1 bg-white rounded-xl shadow-md h-screen overflow-hidden">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-700">
        My Projects
      </h2>
      <div className="flex flex-wrap items-center mb-4">
        <SortComponent />
        <div className="flex flex-row justify-center sm:justify-end z-30 mt-4 sm:mt-0 sm:ml-auto">
          <Link
            className="focus:outline-none mr-1 rounded-md hover:bg-gray-200"
            href={`/employee/project-card?sortOrder=${
              sortOrder === "asc" ? "desc" : "asc"
            }`}
          >
            <svg
              className="h-8 w-8 text-gray-500 p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d={
                  sortOrder === "asc"
                    ? "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                    : "M3 20h13M3 16h9m-9 4h9m5-16v12m0 0l-4-4m-4 4"
                }
              />
            </svg>
          </Link>
          <Link
            className="focus:outline-none mr-1 hover:bg-gray-200 rounded-md transition-colors duration-200"
            href="/employee/project-card"
          >
            <svg
              className="h-8 w-8 text-gray-800 p-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </Link>
          <Link
            className="focus:outline-none hover:bg-gray-200 rounded-md transition-colors duration-200"
            href="/employee/project-list"
            name="list"
          >
            <svg
              className="h-8 w-8 text-gray-500 p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="sm:h-screen lg:h-screen md:h-screen sm:pb-[22rem] md:pb-[22rem] lg:pb-[13rem] shadow-lg rounded-xl overflow-y-auto no-scrollbar bg-slate-50">
        <div className="overflow-auto h-full no-scrollbar px-2 py-2">
          <ProjectListComponent projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectListPage;
