import Link from "next/link";
import React from "react";

const NavbarProjectLeaderComponent = () => {
  return (
    <nav className="w-full  bg-white border-b border-blue-300 rounded-t-lg flex justify-start flex-wrap">
      <nav>
        <ul className="flex px-6 py-3 gap-5 items-center justify-center text-base text-gray-700">
          <li className="mx-2">
            <Link className="block text-blue-700" href="/project-leader">
              Upload
            </Link>
          </li>
          <li className="mx-2">
            <Link className="block" href="/project-leader/view-attachment">
              View Attachment
            </Link>
          </li>
          <li className="mx-2">
            <Link className=" block" href="/project-leader/calendar">
              Calendar
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavbarProjectLeaderComponent;
