'use client'
import AddMemberModal from "@/components/AddMemberModal";
import React, { useState } from "react";
import NavbarProjectLeaderComponent from "../../_components/NavbarProjectLeaderComponent";
import SelectComponent from "@/components/SelectComponent";
import Link from "next/link";
import InputKeywordComponent from "../../_components/InputKeywordComponent";
import MemberProjectLeader from "@/components/MemberProjectLeader";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSelect from "@/components/LanguageSelect";
const AddKeyValuePage = () => {
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
              <div className="w-full lg:w-[321px] py-2 text-xs">
                <label htmlFor="select" className="text-xs">
                  Translating from (base, source language)
                </label>
               <LanguageSelect/>
              </div>
              <SelectComponent />
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
                <div className="flex flex-col w-full lg:w-auto">
                  <label htmlFor="start" className="text-xs mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border text-gray-600 text-xs border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="end" className="text-xs mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end"
                    name="end"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border text-gray-600 border-gray-300 text-xs rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="key" className="text-xs mb-1">
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
                  <label htmlFor="hint" className="text-xs mb-1">
                    Add Hint
                  </label>
                  <input
                    type="text"
                    placeholder="Hints for some keywords"
                    name="hint"
                    className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex lg:mt-5 mt-4 h-[35px] w-full lg:w-auto">
                  <input
                    className="px-3 py-2 text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                    type="submit"
                    value={"Add key"}
                  />
                </div>
              </div>
              <InputKeywordComponent />
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

export default AddKeyValuePage;
