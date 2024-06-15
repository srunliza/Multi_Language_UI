"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarProjectLeaderComponent = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/project-leader/dashboard") {
      return (
        pathname === path ||
        pathname.startsWith("/project-leader/dashboard/upload-file") ||
        pathname.startsWith("/project-leader/dashboard/add-key-value")
      );
    }
    return pathname === path;
  };

  return (
    <nav className="w-full bg-white border-b-1 border-b-gray-300 rounded-t-xl flex justify-start flex-wrap">
      <ul className="flex px-6 py-4 gap-5 items-center justify-center text-gray-700 text-sm md:text-base">
        <li className="mx-2  ">
          <Link
            href="/project-leader/dashboard"
            className={`block ${
              isActive("/project-leader/dashboard")
                ? "text-blue-700 font-medium"
                : "text-gray-600"
            }`}
          >
            Upload
          </Link>
        </li>
        <li className="mx-2">
          <Link
            href="/project-leader/dashboard/view-attachment"
            className={`block ${
              isActive("/project-leader/dashboard/view-attachment")
                ? "text-blue-700 font-medium"
                : "text-gray-700"
            }`}
          >
            View Attachment
          </Link>
        </li>
        <li className="mx-2">
          <Link
            href="/project-leader/dashboard/calendar"
            className={`block ${
              isActive("/project-leader/dashboard/calendar")
                ? "text-blue-700 font-medium"
                : "text-gray-700"
            }`}
          >
            Calendar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarProjectLeaderComponent;
