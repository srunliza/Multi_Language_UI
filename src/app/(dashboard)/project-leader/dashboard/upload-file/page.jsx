"use client";
import React, { useState } from "react";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import AddMemberModal from "@/components/AddMemberModal";
import SelectComponent from "@/components/SelectComponent";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MemberProjectLeader from "@/components/MemberProjectLeader";

const UploadFilePage = () => {
  const [tableData, setTableData] = useState([
    { key: "Home", hint: "relating to the start of page" },
    { key: "About", hint: "information about something or someone" },
    { key: "Contact", hint: "a way of getting in touch with someone" },
    { key: "More", hint: "a way of getting in touch with someone" },
    { key: "Detail", hint: "information about something or someone" },
    { key: "Contact", hint: "a way of getting in touch with someone" },
    { key: "More", hint: "a way of getting in touch with someone" },
    { key: "About", hint: "information about something or someone" },
    { key: "Contact", hint: "a way of getting in touch with someone" },
    { key: "More", hint: "a way of getting in touch with someone" },
  ]);
  const handleDelete = (keyToDelete) => {
    const updatedData = tableData.filter((row) => row.key !== keyToDelete);
    setTableData(updatedData);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-between mb-2 p-4">
        <h2 className="text-lg text-color-text-black">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-grow gap-3 overflow-hidden">
        <div className="h-[42.7rem] flex flex-col bg-white shadow-lg shadow-orange-50 rounded-xl border border-blue-300 flex-grow">
          <NavbarProjectLeaderComponent />
          {/* Container */}
          <div className="flex-grow overflow-y-auto no-scrollbar p-4">
            <form action="">
              <p className="text-color-text-black mb-3">Upload Your Files</p>
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
              <div className="w-full border-b-[1px] border-gray-400 mb-4"></div>
              <div className="w-full lg:w-[321px] py-4 text-xs">
                <label htmlFor="select" className="text-xs">
                  Translating from (base, source language)
                </label>
                <input
                    type="text"
                    id="base-language"
                    name="base-language"
                    className="w-full mt-2  h-[37.6px] px-3 py-2 border text-xs border-gray-300 rounded-lg"
                  />
              </div>
              <SelectComponent />
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-gray-500 text-xs py-2">
                <div className="flex flex-col w-full lg:w-auto">
                  <label htmlFor="start" className="text-xs text-gray-600 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border text-xs border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="end" className="text-xs text-gray-600 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end"
                    name="end"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border border-gray-300 text-xs rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-gray-500 text-xs py-3">
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="key" className="text-xs text-gray-600 mb-2">
                    Keyword
                  </label>
                  <input
                    type="text"
                    placeholder="Input your keyword"
                    name="keyName"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="hint" className="text-xs text-gray-600 mb-2">
                    Add Hint
                  </label>
                  <input
                    type="text"
                    placeholder="Hints for some keywords"
                    name="hint"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex lg:mt-6 mt-4 h-[35px] w-full lg:w-auto">
                  <input
                    className="px-3 py-2 text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                    type="submit"
                    value={"Add key"}
                  />
                </div>
              </div>
              {/* table */}
              <div className="border w-full lg:w-[600px] px-3 py-3 rounded-lg border-gray-300">
                <div className="rounded-lg w-full lg:w-[570px] overflow-hidden overflow-y-auto h-32 no-scrollbar">
                  <table className="w-full table-fixed text-md border-gray-200 rounded-r-lg">
                    <thead>
                      <tr className="text-center text-md bg-gray-100 rounded-r-lg sticky top-0">
                        <th className="w-1/2 py-2 px-1 text-left text-gray-600 font-medium">
                          Keyword
                        </th>
                        <th className="w-1/2 py-2 px-1 text-gray-600 font-medium">
                          Hint
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-none text-xs">
                      {tableData.map((row) => (
                        <tr
                          key={row.key}
                          className="py-5 px-6 border-b border-gray-200 text-gray-700 truncate"
                        >
                          <td className="py-1">{row.key}</td>
                          <td>
                            {row.hint}
                            <CloseIcon
                              className="float-end w-3 text-gray-500 h-3 cursor-pointer"
                              onClick={() => handleDelete(row.key)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex gap-4 py-5 min-w-[40px] h-[75px] text-sm">
                <input
                  className="px-3 py-1 text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
                  type="reset"
                  value={"Reset"}
                />
                <Link
                  href={"/employee/project-card"}
                  className="px-4 py-[7px] text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                >
                  <button type="submit"> Submit</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <MemberProjectLeader />
      </div>
    </div>
  );
};

export default UploadFilePage;
