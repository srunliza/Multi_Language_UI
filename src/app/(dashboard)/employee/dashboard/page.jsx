"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import employee_welcome from "../../../../../public/assets/images/employee-welcome.png";
import pendingProjectIcon from "../../../../../public/assets/icons/pending-project.svg";
import finishProjectIcon from "../../../../../public/assets/icons/finish-project.svg";
import progressProjectIcon from "../../../../../public/assets/icons/progress-project.svg";
import totalProjectIcon from "../../../../../public/assets/icons/total-project.svg";
import dashboardData from "@/obj/dashboardData";
import EmployeeCalendarComponent from "../_components/EmployeeCalendarComponent";

const EmployeeDashboardPage = () => {
  const router = useRouter();

  const handleRowClick = (role) => {
    router.push(`/${role.toLowerCase()}/dashboard`);
  };

  return (
    <main>
      <div className="flex flex-wrap gap-3 justify-between">
        <div className="xl:w-[50rem] lg:w-[45rem] md:w-full sm:w-full md:flex md:flex-wrap lg:flex lg:flex-wrap overflow-hidden">
          <div className="h-full flex flex-col items-center bg-[#1A42BC] px-4 py-9 rounded-xl shadow md:flex-row md:max-w-4xl">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                Greeting
              </h1>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
                Sok Heng!
              </h2>
              <p className="xl:w-[30rem] lg:w-[25rem] mb-3 font-normal text-justify text-gray-100 text-sm dark:text-gray-100 md:w-[30rem]">
                Welcome to LangNet! Manage multiple languages efficiently,
                streamline uploads and downloads in formats like Excel, JSON,
                and XML.
              </p>
            </div>
            <Image
              src={employee_welcome}
              width={328}
              height={328}
              alt="welcome card image"
              className="hidden lg:block xl:block overflow-hidden"
            />
          </div>
        </div>

        <div className="sm:w-full md:w-[25rem]">
          <EmployeeCalendarComponent />
        </div>
      </div>

      <div className="mt-8 ">
        <div className="flex flex-wrap justify-between gap-5">
          <div className="xl:w-[17rem]  lg:w-[19rem] md:w-[25rem] sm:w-full bg-white p-4 rounded-xl border-2 border-blue-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-blue-500">
                Total Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={totalProjectIcon}
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
          <div className="xl:w-[17rem] lg:w-[19rem] md:w-[25rem] sm:w-full bg-white p-4 rounded-xl border-2 border-green-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-green-500">
                Finished Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={progressProjectIcon}
                  width={43}
                  height={43}
                  alt="progress project icon"
                />
              </div>
              <h3 className="font-semibold sm:text-xl md:text-[18px] lg:text-[22px] text-green-500">
                40,689
              </h3>
            </div>
          </div>
          <div className="xl:w-[17rem] lg:w-[19rem] md:w-[25rem] sm:w-full bg-white p-4 rounded-xl border-2 border-yellow-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-yellow-500">
                Progress Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={finishProjectIcon}
                  width={43}
                  height={43}
                  alt="finish project icon"
                />
              </div>
              <h3 className="font-semibold sm:text-xl md:text-[18px] lg:text-[22px] text-yellow-500">
                40,689
              </h3>
            </div>
          </div>
          <div className="xl:w-[17rem] lg:w-[19rem] md:w-[25rem] sm:w-full bg-white p-4 rounded-xl border-2 border-red-300 shadow-lg">
            <div>
              <h1 className="text-red-500 font-semibold text-lg">
                Pending Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={pendingProjectIcon}
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
                Product Name
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
            {dashboardData.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b text-gray-900 dark:border-gray-300 cursor-pointer"
                onClick={() => handleRowClick(row.role)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {row.productName}
                </th>
                <td className="px-6 py-4">{row.role}</td>
                <td className="px-6 py-4">{row.startDate}</td>
                <td className="px-6 py-4">{row.endDate}</td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`status-label ${row.statusColor} text-xs text-white font-semibold py-1 px-4 rounded-xl`}
                  >
                    {row.status}
                  </span>
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
