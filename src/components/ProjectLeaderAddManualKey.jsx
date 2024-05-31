import React from "react";
import AddMemberModal from "./AddMemberModal";
import MemberComponent from "./MemberComponent";
import Link from "next/link";
import SelectComponent from "./Selectomponent";
import ViewMember from "./ViewMember";
import NavbarProjectLeaderComponent from "@/app/project-leader/_components/NavbarProjectLeaderComponent";

const ProjectLeaderAddManualKey = () => {
  const tableData = [
    { key: "Home", hint: "relating to the place where one lives" },
    { key: "About", hint: "information about something or someone" },
    { key: "Contact", hint: "a way of getting in touch with someone" },
    { key: "More", hint: "a way of getting in touch with someone" },
    { key: "About", hint: "information about something or someone" },
    { key: "Contact", hint: "a way of getting in touch with someone" },
    { key: "More", hint: "a way of getting in touch with someone" },
    { key: "About", hint: "information about something or someone" },
    { key: "Contact", hint: "a way of getting in touch with someone" },
    { key: "More", hint: "a way of getting in touch with someone" },
  ];

  return (
    <div className="ml-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-color-text-black font-bold">
          Project Name
        </h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-col lg:flex-row py-2">
        <div className="w-full lg:w-[900px] h-auto lg:overflow-hidden border border-blue-300 rounded-t-lg">
          {/* Header */}
          {/* <div className="w-full bg-white border-b border-blue-300 rounded-t-lg flex justify-start flex-wrap">
            <nav>
              <ul className="flex px-6 py-3 gap-5 items-center justify-center text-base text-gray-700">
                <li className="mx-2">
                  <Link className="block text-blue-700" href="/developerDashboard">
                    Upload
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className="block" href="/developerDashboard/viewAttachment">
                    View Attachment
                  </Link>
                </li>
                <li className="mx-2">
                  <Link className="block" href="/developerDashboard/calendar">
                    Calendar
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
          <NavbarProjectLeaderComponent />

          {/* Form */}
          <form action="">
            <div className="ml-10 mt-3">
              <p className="text-color-text-black font-medium mb-3">
                Upload Your Files
              </p>
              <div className="border border-dashed border-color-text-grey bg-gray-50 p-2 rounded-xl shadow-md w-[100px] h-24 mb-5">
                <label
                  htmlFor="upload"
                  className="flex flex-col items-center gap-2 cursor-pointer pt-1"
                >
                  <svg
                    width="28"
                    height="26"
                    viewBox="0 0 28 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 17V8.85L10.4 11.45L9 10L14 5L19 10L17.6 11.45L15 8.85V17H13ZM8 21C7.45 21 6.97933 20.8043 6.588 20.413C6.19667 20.0217 6.00067 19.5507 6 19V16H8V19H20V16H22V19C22 19.55 21.8043 20.021 21.413 20.413C21.0217 20.805 20.5507 21.0007 20 21H8Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-gray-600 text-xs text-center">
                    Upload your files here
                  </span>
                </label>
                <input id="upload" type="file" className="hidden" />
              </div>
              <div className="w-full lg:w-[815px] border-b-2 border-gray-400"></div>
              <div className="w-full lg:w-[321px] py-2">
                <label htmlFor="select" className="text-sm">
                  Translating from (base, source language)
                </label>
                <select className="block w-full lg:w-[321px] text-sm text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none">
                  <option value="language">Choose Language</option>
                  <option value="khmer">Khmer</option>
                  <option value="english">English</option>
                  <option value="korea">Korea</option>
                  <option value="spain">Spain</option>
                </select>
              </div>
              <SelectComponent />
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-gray-500 text-sm">
                <div className="flex flex-col w-full lg:w-auto">
                  <label htmlFor="start" className="text-sm text-gray-600 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    className="w-full lg:w-[220px] px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="end" className="text-sm text-gray-600 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end"
                    name="end"
                    className="w-full lg:w-[220px] px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              {/* input key */}
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-gray-500 text-sm py-2">
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="key" className="text-sm text-gray-600 mb-1">
                    Key name
                  </label>
                  <input
                    type="text"
                    placeholder="Input your key name"
                    name="keyName"
                    className="w-full lg:w-[220px] px-3 text-sm py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="hint" className="text-sm text-gray-600 mb-1">
                    Add Hint
                  </label>
                  <input
                    type="text"
                    placeholder="Hints for some keywords"
                    name="hint"
                    className="w-full lg:w-[220px] px-3 text-sm py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex mt-6 lg:mt-6 h-[37.6px] w-full lg:w-auto">
                  <input
                    className="px-3 py-2 text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                    type="submit"
                    value={"Add key"}
                  />
                </div>
              </div>
              {/* choose key word */}
              <div className="w-full lg:w-[321px] py-2 mb-2">
                <label htmlFor="select" className="text-sm">
                  Or choose keyword as a page
                </label>
                <select className="block w-full lg:w-[321px] text-sm text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none">
                  <option value="language">Choose type of keyword</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="english">English</option>
                  <option value="korea">Korea</option>
                  <option value="spain">Spain</option>
                </select>
              </div>
              {/* table */}
              <div className="border w-full lg:w-[590px] p-2 rounded-lg border-gray-300">
                <div className="rounded-lg w-full lg:w-[570px] overflow-hidden overflow-y-auto h-32 no-scrollbar">
                  <table className="w-full table-fixed text-md border-gray-200 rounded-r-lg">
                    <thead>
                      <tr className="text-center text-md bg-gray-300 rounded-r-lg sticky top-0">
                        <th className="w-1/2 py-2 px-1 text-left text-gray-600 font-bold">
                          Key name
                        </th>
                        <th className="w-1/2 py-2 px-1 text-gray-600 font-bold">
                          Hint
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-none text-sm">
                      {tableData.map((row) => (
                        <tr
                          key={row.key}
                          className="py-5 px-6 border-b border-gray-200 text-gray-700 truncate"
                        >
                          <td className="py-1">{row.key}</td>
                          <td>{row.hint}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* button */}
              <div className="flex flex-col lg:flex-row gap-4 py-5 min-w-[95px]">
                <input
                  className="px-6 py-2 text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer w-full lg:w-auto"
                  type="reset"
                  value={"Reset"}
                />
                <input
                  className="px-6 py-2 text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer w-full lg:w-auto"
                  type="submit"
                  value={"Submit"}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-auto lg:flex-1">
          <ViewMember />
        </div>
      </div>
    </div>
  );
};

export default ProjectLeaderAddManualKey;
