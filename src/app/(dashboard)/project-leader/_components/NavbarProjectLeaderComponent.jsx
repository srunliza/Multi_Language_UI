"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MemberProjectLeader from "@/components/MemberProjectLeader";

const NavbarProjectLeaderComponent = ({ project }) => {
  const pathname = usePathname();
  const [isMembersVisible, setIsMembersVisible] = useState(false);

  const toggleMembersVisibility = () => {
    setIsMembersVisible(!isMembersVisible);
  };

  const isActive = (path) => {
    if (path === `/project-leader/dashboard/${project.projectId}`) {
      return (
        pathname === path ||
        pathname.startsWith(
          `/project-leader/dashboard/upload-file/${project.projectId}`
        ) ||
        pathname.startsWith(
          `/project-leader/dashboard/add-key-value/${project.projectId}`
        )
      );
    }
    return pathname === path;
  };

  return (
    <nav className="w-full bg-white border-b-1 border-b-gray-300 rounded-t-xl flex justify-between flex-wrap relative">
      <ul className="flex px-6 py-4 gap-5 items-center justify-center text-gray-700 text-sm md:text-base">
        <li className="mx-2">
          <Link
            href={`/project-leader/dashboard/${project.projectId}`}
            className={`block ${
              isActive(`/project-leader/dashboard/${project.projectId}`)
                ? "text-blue-700 font-medium"
                : "text-gray-600"
            }`}
          >
            Upload
          </Link>
        </li>
        <li className="mx-2">
          <Link
            href={`/project-leader/dashboard/view-attachment/${project.projectId}`}
            className={`block ${
              isActive(
                `/project-leader/dashboard/view-attachment/${project.projectId}`
              )
                ? "text-blue-700 font-medium"
                : "text-gray-700"
            }`}
          >
            View Attachment
          </Link>
        </li>
        <li className="mx-2">
          <Link
            href={`/project-leader/calendar/${project.projectId}`}
            className={`block ${
              isActive(`/project-leader/calendar/${project.projectId}`)
                ? "text-blue-700 font-medium"
                : "text-gray-700"
            }`}
          >
            Calendar
          </Link>
        </li>
      </ul>
      <button onClick={toggleMembersVisibility} className="text-gray-700 mr-4 xl:hidden">
        <PersonAddIcon />
      </button>
      {isMembersVisible && (
        <div className="absolute top-[3rem] right-0 xl:hidden z-50">
          <MemberProjectLeader project={project} />
        </div>
      )}
    </nav>
  );
};

export default NavbarProjectLeaderComponent;
