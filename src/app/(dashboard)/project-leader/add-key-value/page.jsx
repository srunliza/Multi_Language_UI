import AddMemberModal from "@/components/AddMemberModal";
import React from "react";
import NavbarProjectLeaderComponent from "../_components/NavbarProjectLeaderComponent";
import SelectComponent from "@/components/Selectomponent";
import ViewMember from "@/components/ViewMember";

const AddKeyValuePage = () => {
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
    <div className="mx-5">
      <div className="flex flex-col lg:flex-row py-2">
        <div className="w-full lg:w-[840px] h-auto lg:overflow-hidden border border-blue-300 rounded-t-lg">
          {/* Header */}

          <NavbarProjectLeaderComponent />

          {/* Form */}
          <form action="">
            <div className="ml-10 mt-3 ">
              <div className="w-full lg:w-[321px] py-2 text-xs ">
                <label htmlFor="select" className="text-xs">
                  Translating from (base, source language)
                </label>
                <select className="block w-full lg:w-[321px] h-[37.6px] text-xs text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm  focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none">
                  <option value="language">Choose Language</option>
                  <option value="khmer">Khmer</option>
                  <option value="english">English</option>
                  <option value="korea">Korea</option>
                  <option value="spain">Spain</option>
                </select>
              </div>
              <SelectComponent />
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4  text-xs">
                <div className="flex flex-col w-full lg:w-auto ">
                  <label htmlFor="start" className="text-xs  mb-1">
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
              {/* input key */}
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="key" className="text-xs  mb-1">
                    Key name
                  </label>
                  <input
                    type="text"
                    placeholder="Input your key name"
                    name="keyName"
                    className="w-full lg:w-[220px] h-[37.6px]   px-3 text-xs py-2 border border-gray-300 rounded-lg"
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
              {/* choose key word */}
              <div className="w-full lg:w-[321px] pb-2 mb-2 mt-0">
                <label htmlFor="select" className="text-xs">
                  Or choose keyword as a page
                </label>
                <select className="block w-full lg:w-[321px] h-[37.6px] text-xs text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm  focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none">
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
                    <tbody className="bg-none text-xs">
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

              <div class="flex gap-4 py-5 min-w-[40px] h-[75px] text-sm">
                <input
                  class="px-3 py-1  text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
                  type="reset"
                  value={"Reset"}
                />

                <input
                  class="px-3 py-1 text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                  type="submit"
                  value={"Submit"}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 ml-8 lg:mt-0 w-full lg:w-auto lg:flex-1">
          <ViewMember />
        </div>
      </div>
    </div>
  );
};

export default AddKeyValuePage;
