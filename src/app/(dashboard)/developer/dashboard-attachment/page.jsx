'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



const DashboardAttactComponent = () => {
   
    const initialData = [
        { id: 1, title: "WebDesign", language: "Khmer", status: "Progress", from: "2024-05-14", to: "2024-05-17" },
        { id: 2, title: "WebDesign", language: "Khmer", status: "Completed", from: "2024-05-14", to: "2024-05-17" },
        { id: 3, title: "WebDesign", language: "Brazilian", status: "Completed", from: "2024-05-14", to: "2024-05-17" },
        { id: 4, title: "WebDesign", language: "French", status: "Pending", from: "2024-05-14", to: "2024-05-17" },
        { id: 5, title: "WebDesign", language: "Khmer", status: "Completed", from: "2024-05-14", to: "2024-05-17" },
        { id: 6, title: "WebDesign", language: "Canadian", status: "Pending", from: "2024-05-14", to: "2024-05-17" },
        { id: 7, title: "WebDesign", language: "Korean", status: "Completed", from: "2024-05-14", to: "2024-05-17" },
        { id: 8, title: "WebDesign", language: "Khmer", status: "Progress", from: "2024-05-14", to: "2024-05-17" },
    ];

    const [data, setData] = useState(initialData);
    const [statusFilter, setStatusFilter] = useState('All');

    const handleStatusChange = (event) => {
        const status = event.target.value;
        setStatusFilter(status);

        if (status === 'All') {
            setData(initialData);

        } else {
            const filteredData = initialData.filter(item => item.status === status);
            setData(filteredData);
        }
    };

    const router = useRouter();
    const handleDownloadClick = () => {
        router.push('/dashboard/preview-json-file')
    };
    const handleXmlClick = () => {
        router.push('/dashboard/preview-xml-file')
    };
    const handleStringClick = () => {
        router.push('/dashboard/preview-string-file')
    };

 

    return (
        <div className="w-full p-6">
            {/* Filters */}
            <div className="flex-1">
                <div className="flex gap-5 flex-wrap items-center mb-4">
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
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
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
                        <select
                            value={statusFilter}
                            onChange={handleStatusChange}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="All">All</option>
                            <option value="Pending" className="text-red-500 font-semibold">Pending</option>
                            <option value="Progress" className="text-yellow-500 font-semibold">Progress</option>
                            <option value="Completed" className="text-green-500 font-semibold">Completed</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="relative overflow-x-auto h-[480px] shadow-md sm:rounded-lg mt-8 no-scrollbar">
                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 font-semibold sticky top-0 bg-[#daeaff]">
                        <tr>
                            <th scope="col" className="px-6 py-4">Product Name</th>
                            <th scope="col" className="px-10 py-4">Language</th>
                            <th scope="col" className="px-10 py-4">Status</th>
                            <th scope="col" className="px-10 py-4">From</th>
                            <th scope="col" className="px-10 py-4">To</th>
                            <th scope="col" className="px-1 py-4 text-right flex justify-center items-center pr-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {data.map((item) => (
                            <tr key={item.id} className="bg-white border-b text-gray-900 dark:border-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{item.title}</th>
                                <td className="px-6 py-4 pl-10">{item.language}</td>
                                {/* <td className={`px-6 py-4 pl-9 truncate`}>{item.status}</td> */}
                                <td className={`px-6 py-4 pl-9 ${item.status === 'Pending' ? 'text-red-600' : item.status === 'Progress' ? 'text-yellow-600' : item.status === 'Completed' ? 'text-green-600' : ''} truncate`}>{item.status}</td>
                                <td className="px-6 py-4 border-gray-200">{item.from}</td>
                                <td className="px-6 py-4 border-gray-200">{item.to}</td>
                                <td className="flex gap-2 justify-center">
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="m-1">
                                            <img src="../assets/icons/view.svg" alt="view" className="cursor-pointer" />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[8rem]">
                                            <li><button onClick={handleXmlClick} className="text-red-500 font-semibold">XML File</button></li>
                                            <li><button onClick={handleDownloadClick} className="text-yellow-500 font-semibold">JSON File</button></li>
                                            <li><button onClick={handleStringClick} className="text-green-500 font-semibold">String File</button></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button tabIndex={0} role="button" className="m-1">
                                            <img src="../assets/icons/download.svg" alt="download" className="cursor-pointer" />
                                        </button>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[8rem]">
                                            <li><button onClick={handleXmlClick} className="text-red-500 font-semibold">XML File</button></li>
                                            <li><button onClick={handleDownloadClick} className="text-yellow-500 font-semibold">JSON File</button></li>
                                            <li><button onClick={handleStringClick} className="text-green-500 font-semibold">String File</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default DashboardAttactComponent;
