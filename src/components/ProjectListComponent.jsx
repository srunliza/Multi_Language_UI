import { projects } from "@/obj/projects";
import Link from "next/link";
import React from "react";

const getStatusColor = (status) => {
  switch (status) {
    case "Finished":
      return "bg-green-500 text-green-500";
    case "Progress":
      return "bg-yellow-500 text-yellow-500";
    case "Pending":
      return "bg-red-500 text-red-500";
    default:
      return "bg-gray-200 text-gray-500";
  }
};

const ProjectListComponent = () => {
  return (
    <div className="p-6 flex-1 bg-white mt-5 overflow-hidden"> {/* Added overflow-hidden here */}
      <h2 className="text-2xl font-bold mb-4 text-gray-700">My Project</h2>
      <div className="flex flex-wrap items-center mb-4">
        <input
          type="date"
          className="border rounded p-2 mr-2 mb-2 lg:mb-0 text-gray-800"
        />
        <input
          type="date"
          className="border rounded p-2 mr-2 mb-2 lg:mb-0 text-gray-800"
        />
        <select className="border rounded p-2 mr-2 mb-2 lg:mb-0 text-gray-800">
          <option>Status</option>
          <option>All</option>
          <option>Finished</option>
          <option>Progress</option>
          <option>Pending</option>
        </select>
        <button className="bg-gray-400 text-white rounded p-2 mr-2 mb-2 lg:mb-0">
          Clear
        </button>
        <button className="bg-blue-500 text-white rounded p-2 mb-2 lg:mb-0">
          Search
        </button>
        <div className="flex flex-row m-auto mr-2">
          <button className="focus:outline-none mr-2">
            <svg
              className="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </button>
          <Link className="focus:outline-none mr-2" href="project-card" name="card">
            <svg
              className="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </Link>
          <button className="focus:outline-none">
            <svg
              className="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* scroll list */}
      <div className="h-[26.1rem] overflow-y-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-between bg-slate-250 p-4 shadow rounded-lg"
          >
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <div className="text-lg font-semibold text-gray-700">
                {project.name}
                <p className="text-sm text-gray-500">{project.owner}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-6 w-full lg:w-auto text-sm mt-4 lg:mt-0">
              <div className="flex items-center justify-center bg-gray-300 rounded-lg w-16 h-8 text-center text-sm ">
                <svg
                  className="h-4 w-4 text-white mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                12
              </div>
              <div className="flex items-center justify-center bg-red-100 text-red-800 rounded-lg px-5 py-1 text-sm">
                <svg
                  className="h-4 w-4 text-red-500 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                1 Day left
              </div>
              <div className="text-gray-500 text-sm">Translation Progress</div>
              <div
                className={`flex items-center space-x-2 text-sm ${
                  getStatusColor(project.status).split(" ")[1]
                }`}
              >
                <span>{project.status}</span>
              </div>
              <div className="flex-grow bg-white rounded-full h-2 w-full lg:w-40 mt-2 lg:mt-0">
                <div
                  className={`h-full ${getStatusColor(
                    project.status
                  )} rounded-full`}
                  style={{
                    width:
                      project.status === "Finished"
                        ? "100%"
                        : project.status === "Progress"
                        ? "50%"
                        : "20%",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <div className="flex -space-x-3">
                <img
                  src="./sokheng.svg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="./neth.svg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="./sreyly.svg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="./soklay.svg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
                  +2
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="focus:outline-none">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </button>
                <button className="focus:outline-none">
                  <svg
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListComponent;
