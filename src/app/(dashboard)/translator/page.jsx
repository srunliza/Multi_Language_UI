"use client";
import Image from "next/image";
import employee_welcome from "../../../../public/assets/images/employee-welcome.png";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import EmployeeCalendarComponent from "@/components/EmployeeCalendarComponent";
import pendingProjectIcon from "../../../../public/assets/icons/pending-project.svg";
import finishProjectIcon from "../../../../public/assets/icons/finish-project.svg";
import progressProjectIcon from "../../../../public/assets/icons/progress-project.svg";
import totalProjectIcon from "../../../../public/assets/icons/total-project.svg";

const DeveloperDashboardHome = () => {
  const tableData = [
    {
      id: 1,
      project_name: "Web Designing",
      role: "Translator",
      start_date: "06/01/2024",
      end_date: "10/01/2024",
      status: "",
    },
  ];


  return (
    <main>
      <div className="bg-gray-50 p-8 w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-8">
            {/* welcome employee dashboard */}
            <div className="flex flex-col items-center bg-[#1A42BC] px-2 py-9 rounded-2xl shadow md:flex-row md:max-w-4xl">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h1 className="mb-2 text-2xl font-bold pl-6 tracking-tight text-gray-50 dark:text-white">
                  Welcome
                </h1>
                <h2 className="mb-2 text-2xl font-bold pl-6 tracking-tight text-gray-50 dark:text-white">
                  Sarah Conner
                </h2>

                <p className="mb-3 font-normal text-gray-100 text-sm pl-6 dark:text-gray-100">
                  Whether you’re here to browse, learn, or connect, we hope you
                  find exactly what you're looking for. Enjoy exploring, and
                  don’t hesitate to reach out if you have any questions!
                </p>
              </div>
              <Image
                src={employee_welcome}
                width={328}
                height={328}
                alt="welcome card image"
              />
            </div>
          </div>

          {/* calendar */}
          <div className="col-span-4">
            {/* Calendar date picker */}
            <EmployeeCalendarComponent />
          </div>
        </div>
      </div>

      <div className="flex-grow mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* item card 1 */}
          <div className="bg-white p-4 rounded-xl border-2 border-red-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
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
              <h3 className="font-bold sm:text-xl md:text-[18px] lg:text-[22px] text-gray-600">
                40,689
              </h3>
            </div>
          </div>

          {/* item card 2 */}
          <div className="bg-white p-4 rounded-xl  border-2 border-green-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Finished Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={progressProjectIcon}
                  width={43}
                  height={43}
                  alt="pending project icon"
                />
              </div>

              <h3 className="font-bold sm:text-xl md:text-[18px] lg:text-[22px] text-gray-600">
                40,689
              </h3>
            </div>
          </div>

          {/* item card 3 */}
          <div className="bg-white p-4 rounded-xl  border-2 border-yellow-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Progress Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={finishProjectIcon}
                  width={43}
                  height={43}
                  alt="pending project icon"
                />
              </div>

              <h3 className="font-bold sm:text-xl md:text-[18px] lg:text-[22px] text-gray-600">
                40,689
              </h3>
            </div>
          </div>

          {/* item card 4 */}
          <div className="bg-white p-4 rounded-xl  border-2 border-blue-300 shadow-lg">
            <div>
              <h1 className="font-semibold text-lg text-gray-600">
                Total Project
              </h1>
              <div className="pr-0 rounded flex justify-end items-center">
                <Image
                  src={totalProjectIcon}
                  width={43}
                  height={43}
                  alt="pending project icon"
                />
              </div>

              <h3 className="font-bold sm:text-xl md:text-[18px] lg:text-[22px] text-gray-600">
                40,689
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* table item */}
      <div class="relative overflow-x-auto h-[480px] shadow-md sm:rounded-lg mt-8 no-scrollbar">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 font-semibold sticky top-0 bg-[#F1F4F9]">
            <tr>
              <th scope="col" class="px-6 py-4">
                Product Name
              </th>
              <th scope="col" class="px-6 py-4">
                Role
              </th>
              <th scope="col" class="px-6 py-4">
                Start Date
              </th>
              <th scope="col" class="px-6 py-4">
                End Date
              </th>
              <th scope="col" class="px-6 py-4 text-right pr-12">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Translator</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">5/30/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-green-500 text-xs text-white font-semibold py-1 px-4 rounded-xl">
                  Completed
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Developer</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">6/05/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-red-600 text-white text-xs font-semibold py-1 px-4 rounded-xl">
                  Pending
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Translator</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">5/30/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-yellow-400 text-xs text-white font-semibold py-1 px-4 rounded-xl">
                  Progress
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Translator</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">5/30/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-green-500 text-xs text-white font-semibold py-1 px-4 rounded-xl">
                  Completed
                </span>
              </td>
            </tr>

            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Translator</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">5/30/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-green-500 text-xs text-white font-semibold py-1 px-4 rounded-xl">
                  Completed
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Translator</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">5/30/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-yellow-400 text-xs text-white font-semibold py-1 px-4 rounded-xl">
                  Progress
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Translator</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">5/30/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-yellow-400 text-xs text-white font-semibold py-1 px-4 rounded-xl">
                  Progress
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Developer</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">6/05/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-red-600 text-white text-xs font-semibold py-1 px-4 rounded-xl">
                  Pending
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Developer</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">6/05/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-red-600 text-white text-xs font-semibold py-1 px-4 rounded-xl">
                  Pending
                </span>
              </td>
            </tr>
            <tr class="bg-white border-b text-gray-900 dark:border-gray-300">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                Web Designing
              </th>
              <td class="px-6 py-4">Developer</td>
              <td class="px-6 py-4">5/26/2024</td>
              <td class="px-6 py-4">6/05/2024</td>
              <td class="px-6 py-4 text-right">
                <span className="bg-red-600 text-white text-xs font-semibold py-1 px-4 rounded-xl">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DeveloperDashboardHome;
