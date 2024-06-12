import Image from "next/image";
import Link from "next/link";
import EmployeeCalendarComponent from "../_components/EmployeeCalendarComponent";
import { getAllProjectService } from "@/service/project.service";

const EmployeeDashboardPage = async () => {
  const projectData = await getAllProjectService();

  const getRoleRoute = (role) => {
    switch (role) {
      case "Project Leader":
        return "project-leader";
      case "Developer":
        return "developer";
      case "Translator":
        return "translator";
      default:
        return "";
    }
  };

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="col-span-1 xl:col-span-8 lg:col-span-8 md:col-span-1">
          <div className="h-full flex flex-col items-center bg-[#1A42BC] rounded-xl shadow md:flex-row md:max-w-4xl">
            <div className="pl-10 flex flex-col justify-between p-4">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                Greeting
              </h1>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                Sok Heng!
              </h2>
              <p className="xl:w-[27rem] lg:w-[25rem] mb-3 font-normal text-justify text-gray-100 text-sm dark:text-gray-100 md:w-[30rem]">
                Welcome to LangNet! Manage multiple languages efficiently,
                streamline uploads and downloads in formats like Excel, JSON,
                and XML.
              </p>
            </div>
            <Image
              src="/assets/images/Hello.png"
              width={240}
              height={240}
              alt="welcome card image"
              className="hidden xl:block"
            />
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 md:col-span-3">
          <EmployeeCalendarComponent />
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white p-4 rounded-xl border-2 border-blue-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Total Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src="/assets/icons/progress-project.svg"
                  width={43}
                  height={43}
                  alt="total project icon"
                />
              </div>
              <h3 className="font-semibold sm:text-xl md:text-[18px] lg:text-[22px] text-blue-500">
                40,689
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-green-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Finished Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src="/assets/icons/total-project.svg"
                  width={43}
                  height={43}
                  alt="finish project icon"
                />
              </div>
              <h3 className="font-semibold sm:text-xl md:text-[18px] lg:text-[22px] text-green-500">
                40,689
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-yellow-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Progress Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src="/assets/icons/pending-project.svg"
                  width={43}
                  height={43}
                  alt="progress project icon"
                />
              </div>
              <h3 className="font-semibold sm:text-xl md:text-[18px] lg:text-[22px] text-yellow-500">
                40,689
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-red-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Pending Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src="/assets/icons/finish-project.svg"
                  width={43}
                  height={43}
                  alt="pending project icon"
                />
              </div>
              <h3 className="font-semibold sm:text-xl md:text-[18px] lg:text-[22px] text-red-500">
                40,689
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto h-[480px] shadow-md rounded-xl mt-8 px-8 bg-white no-scrollbar">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 font-semibold sticky top-0 border-b bg-white">
            <tr>
              <th scope="col" className="px-6 py-4">
                Project Name
              </th>
              <th scope="col" className="px-6 py-4">
                Role
              </th>
              <th scope="col" className="px-6 py-4">
                Start Date
              </th>
              <th scope="col" className="px-6 py-4">
                End Date
              </th>
              <th scope="col" className="px-6 py-4 text-right pr-12">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {projectData?.payload?.map((project, index) => (
              <tr
                key={index}
                className="bg-white border-b text-gray-900 dark:border-gray-300 cursor-pointer"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <Link
                    href={`/${getRoleRoute(project.members[0].role)}/dashboard`}
                  >
                    {project.projectName}
                  </Link>
                </th>
                <td className="px-6 py-4">
                  <Link
                    href={`/${getRoleRoute(project.members[0].role)}/dashboard`}
                  >
                    {project.members[0].role}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/${getRoleRoute(project.members[0].role)}/dashboard`}
                  >
                    {new Date(project.createDate).toLocaleDateString()}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/${getRoleRoute(project.members[0].role)}/dashboard`}
                  >
                    {project.updatedDate
                      ? new Date(project.updatedDate).toLocaleDateString()
                      : "N/A"}
                  </Link>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/${getRoleRoute(project.members[0].role)}/dashboard`}
                  >
                    <span
                      className={`status-label ${
                        project.status === "PENDING"
                          ? "bg-yellow-500"
                          : project.status === "ACTIVE"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      } text-xs text-white font-semibold py-1 px-4 rounded-xl`}
                    >
                      {project.status}
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default EmployeeDashboardPage;
