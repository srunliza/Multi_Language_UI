"use client"
import { useRouter } from 'next/navigation';
import translatorData from "@/obj/translatorData";

const TranslatorPage = () => {
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/translator/dashboard/workspace`);
  };

  return (
    <div className="mt-2">
      {/* date */}
      <div className="md:px-10 md:pb-10 flex-1">
        <div className="flex gap-5 flex-wrap items-center">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p>Start</p>
            </span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p>End</p>
            </span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <p>Status</p>
            </span>
            <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>All</option>
              <option className="text-red-500 font-semibold">Pending</option>
              <option className="text-yellow-500 font-semibold">Progress</option>
              <option className="text-green-500 font-semibold">Completed</option>
            </select>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="shadow-lg rounded-lg overflow-hidden md:mx-10 mx-10 bg-white">
        <table className="min-w-full">
          <thead className="text-gray-700 white bg-blue-200 dark:text-gray-400">
            <tr>
              <th className="py-4 px-3 text-gray-700 font-semibold text-center">
                File Name
              </th>
              <th className="py-4 px-3 text-center text-gray-700 font-semibold">
                Language
              </th>
              <th className="py-4 px-3 text-center text-gray-700 font-semibold">
                Status
              </th>
              <th className="py-3 px-3 text-center text-gray-700 font-semibold">
                From
              </th>
              <th className="py-4 px-3 text-center text-gray-700 font-semibold">
                To
              </th>
            </tr>
          </thead>
          <tbody>
            {translatorData.map((data) => (
              <tr
                key={data.id}
                className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                onClick={() => handleRowClick(data.id)}
              >
                <th
                  scope="row"
                  className="text-center px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="overflow-auto">{data.title}</div>
                </th>
                <td className="text-center py-4 px-3 border-b border-gray-200">
                  <div className="overflow-auto">{data.language}</div>
                </td>
                <td className="text-center py-4 px-3 border-b border-gray-200 text-red-500 truncate">
                  <div className="overflow-auto">{data.status}</div>
                </td>
                <td className="text-center py-4 px-3 border-b border-gray-200">
                  <div className="overflow-auto">{data.from}</div>
                </td>
                <td className="text-center py-4 px-3 border-b border-gray-200">
                  <div className="overflow-auto">{data.to}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TranslatorPage;
