import React from 'react';
import Link from "next/link";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const tableData = [
  { projectName: "Web Designing", language: "Korean", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "English", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "Chinese", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "Korean", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "French", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "English", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "Korean", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "English", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
  { projectName: "Web Designing", language: "Korean", status: "Finished", from: "5/26/2024", to: "5/30/2024" },
];

const AttactmentComponent = () => {
  return (
    <div className="w-full lg:w-[840px] h-auto lg:h-full  border border-blue-300 ">
      <div className="overflow-y-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 bg-[#daeaff]">
            <tr>
              <th scope="col" className="px-6 py-4">Project Name</th>
              <th scope="col" className="px-10 py-4">Language</th>
              <th scope="col" className="px-10 py-4">Status</th>
              <th scope="col" className="px-10 py-4">From</th>
              <th scope="col" className="px-10 py-4">To</th>
              <th scope="col" className="px-1 py-4 text-right flex justify-center items-center pr-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="bg-white border-b text-gray-900 dark:border-gray-500">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{item.projectName}</th>
                <td className="px-6 py-4 pl-10">{item.language}</td>
                <td className="px-6 py-4 pl-9 text-green-600 font-medium">{item.status}</td>
                <td className="px-6 py-4">{item.from}</td>
                <td className="px-6 py-4">{item.to}</td>
                <td className="px-1 py-4 text-right flex justify-center items-center gap-3">
                  <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small" /></Link>
                  <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small" /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttactmentComponent;
