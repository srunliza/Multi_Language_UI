import Link from "next/link";
import CardComponent from "../../_components/CardComponent";
import SortComponent from "@/components/SortComponent";
import { getAllProjectService } from "@/service/project.service";

const ProjectCardPage = async ({ searchParams }) => {
  const sortOrder = searchParams.sortOrder || "asc";
  const projectData = await getAllProjectService();
  let projects = projectData.payload;

  // Sort the projects by projectName
  projects.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.projectName.localeCompare(b.projectName);
    } else {
      return b.projectName.localeCompare(a.projectName);
    }
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
            className="focus:outline-none mr-1 rounded-md hover:bg-gray-200 "
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

      <div className="sm:h-screen lg:h-screen md:h-screen sm:pb-[22rem] md:pb-[22rem] lg:pb-[13rem] overflow-y-auto no-scrollbar">
        <div className="overflow-auto h-full no-scrollbar">
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-6">
            {projects
              ?.filter((project) => project.active)
              .map((project, index) => (
                <CardComponent key={index} project={project} index={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPage;
