import Image from "next/image";
import Link from "next/link";
import EmployeeCalendarComponent from "../_components/EmployeeCalendarComponent";
import {
  getAllProjectService,
  getAllProjectWithStatusService,
} from "@/service/project.service";
import { getCurrentUserProfileService } from "@/service/user.service";
import { OneSignalComponent } from "../_components/OneSignal";

const formatDate = (dateString) => {
  const options = { month: "numeric", day: "numeric", year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const getUserRole = (project, currentUser) => {
  for (let member of project.members) {
    if (member.userId === currentUser.userId) {
      return member.role.roleName;
    }
  }
  return "Unknown";
};

const EmployeeDashboardPage = async () => {
  const projectData = await getAllProjectService();
  const totalProject = await getAllProjectWithStatusService();
  const currentUser = await getCurrentUserProfileService();
  const userId = currentUser.payload.userId;

  const processedProjectData = projectData?.payload?.map((project) => {
    if (project.attachment && project.attachment.length > 0) {
      const longestExpireDate = project.attachment.reduce((max, attachment) =>
        new Date(attachment.expireDate) > new Date(max.expireDate)
          ? attachment
          : max
      ).expireDate;
      project.longestExpireDate = formatDate(longestExpireDate);
    } else {
      project.longestExpireDate = "N/A";
    }
    project.userRole = getUserRole(project, currentUser.payload); // Add userRole to project
    return project;
  });

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
      <OneSignalComponent userId={userId} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="col-span-1 xl:col-span-8 lg:col-span-8 md:col-span-1">
          <div className="h-full flex flex-col items-center bg-[#1A42BC] rounded-xl shadow md:flex-row md:max-w-4xl">
            <div className="pl-10 flex flex-col justify-between p-4">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                Greeting
              </h1>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                {currentUser?.payload?.firstName}{" "}
                {currentUser?.payload?.lastName}!
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

        <div className="xl:block lg:block col-span-1 lg:col-span-4 md:col-span-3 md:hidden sm:hidden">
          <EmployeeCalendarComponent />
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white p-4 rounded-xl border-2 shadow-lg">
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
                {totalProject?.payload.total}
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Completed Project
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
                {totalProject?.payload.countsByStatus.COMPLETED}
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 shadow-lg">
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
                {totalProject?.payload.countsByStatus.PROGRESS}
              </h3>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 shadow-lg">
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
                {totalProject?.payload.countsByStatus.PENDING}
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
                Attachment
              </th>
              <th scope="col" className="px-6 py-4 text-right pr-12">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {processedProjectData && processedProjectData.length > 0 ? (
              processedProjectData
                ?.filter((project) => project.active)
                .map((project, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b text-gray-900 dark:border-gray-300 cursor-pointer"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <Link
                        href={`/${getRoleRoute(project.userRole)}/dashboard/${
                          project.projectId
                        }`}
                      >
                        {project.projectName}
                      </Link>
                    </th>
                    <td className="px-6 py-4">
                      <Link
                        href={`/${getRoleRoute(project.userRole)}/dashboard/${
                          project.projectId
                        }`}
                      >
                        {project.userRole}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/${getRoleRoute(project.userRole)}/dashboard/${
                          project.projectId
                        }`}
                      >
                        {new Date(project.createDate).toLocaleDateString()}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/${getRoleRoute(project.userRole)}/dashboard/${
                          project.projectId
                        }`}
                        className={
                          project.longestExpireDate !== "N/A"
                            ? "text-gray-800"
                            : "text-red-600"
                        }
                      >
                        {project.longestExpireDate}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/${getRoleRoute(project.userRole)}/dashboard/${
                          project.projectId
                        }`}
                      >
                        <div className="flex justify-center items-center text-black rounded-lg text-xs">
                          <svg
                            className="h-4 w-4 inline-block mr-1"
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
                          {project?.attachmentCount}
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/${getRoleRoute(project.userRole)}/dashboard/${
                          project.projectId
                        }`}
                      >
                        <span
                          className={`status-label ${
                            project.status === "PROGRESS"
                              ? "bg-yellow-500"
                              : project.status === "COMPLETED"
                              ? "bg-green-500"
                              : "bg-red-500"
                          } text-xs text-white font-semibold py-1 px-4 rounded-xl`}
                        >
                          {project.status}
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-[10rem] text-center text-gray-500 font-semibold"
                >
                  No projects available. Please check back later or start a new
                  project.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default EmployeeDashboardPage;
