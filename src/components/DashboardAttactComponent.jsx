
const DashboardAttactComponent = () => {
    const data = [
        {
            id: 1,
            title: "WebDesign",
            language: "Khmer",
            status: "Finished",
            from: "14/5/2024",
            to: " 17/5/2024",


        },
        {
            id: 2,
            title: "WebDesign",
            language: "Khmer",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 3,
            title: "WebDesign",
            language: "Brazilan",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 4,
            title: "WebDesign",
            language: "Franch",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 5,
            title: "WebDesign",
            language: "Khmer",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 6,
            title: "WebDesign",
            language: "Canadian",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 7,
            title: "WebDesign",
            language: "Korean",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 8,
            title: "WebDesign",
            language: "Khmer",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",

        },
        {
            id: 8,
            title: "WebDesign",
            language: "Khmer",
            status: "Finished",
            from: "14/5/2024",
            to: "17/5/2024",
        }

    ];

    return (
        <div className="w-full p-6">
            {/* date */}
            <div className=" flex-1 ">
                <div className="flex gap-5 flex-wrap items-center mb-4">
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border  border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <p>Start</p>
                        </span>
                        <input
                            type="date"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000"
                        />
                    </div>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border  border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <p>End</p>
                        </span>
                        <input
                            type="date"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border  border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <p>Status</p>
                        </span>
                        <select name="" id="" className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option >All</option>
                            <option className="text-red-500 font-semibold ">Padding</option>
                            <option className="text-yellow-500 font-semibold ">Progress</option>
                            <option className="text-green-500 font-semibold">Completed</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* table item */}
            <div class="relative overflow-x-auto h-[480px] shadow-md sm:rounded-lg mt-8 no-scrollbar">
                <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-700 font-semibold sticky top-0 bg-[#daeaff]">
                        <tr>
                            <th scope="col" class="px-6 py-4">
                                Product Name
                            </th>
                            <th scope="col" class="px-10 py-4">
                                Language
                            </th>
                            <th scope="col" class="px-10 py-4">
                                Status
                            </th>
                            <th scope="col" class="px-10 py-4">
                                Form
                            </th>
                            <th scope="col" class="px-10 py-4">
                                To
                            </th>
                            <th scope="col" class="px-1 py-4 text-right flex justify-center items-center pr-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data) => (
                                <tr key={data} className="bg-white border-b text-gray-900 dark:border-gray-300">
                                    <th scope="row" className=" px-6 py-4 font-medium whitespace-nowrap ">
                                        {data.title}
                                    </th>
                                    <td className=" px-6 py-4 pl-10 ">
                                        {data.language}
                                    </td>
                                    <td className=" px-6 py-4 pl-9 text-green-500 truncate">
                                        {data.status}
                                    </td>
                                    <td className=" px-6 py-4 border-gray-200">
                                        {data.from}
                                    </td>
                                    <td className=" px-6 py-4 border-gray-200">
                                        {data.to}
                                    </td>

                                    <td className="flex gap-2 justify-center">
                                        <div className="dropdown">
                                            <div tabIndex={0} role="button" className=" m-1">
                                                <img src="./icon/view.svg" alt="download" className="cursor-pointer" />
                                            </div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[8rem]">
                                                <li><a className="text-red-500 font-semibold">XML File</a></li>
                                                <li><a className="text-yellow-500 font-semibold">JSON File</a></li>
                                                <li><a className="text-green-500 font-semibold"> String File</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <div tabIndex={0} role="button" className=" m-1">
                                                <img src="./icon/download.svg" alt="download" className="cursor-pointer" />
                                            </div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[8rem]">
                                                <li><a className="text-red-500 font-semibold">XML File</a></li>
                                                <li><a className="text-yellow-500 font-semibold">JSON File</a></li>
                                                <li><a className="text-green-500 font-semibold"> String File</a></li>
                                            </ul>
                                        </div>

                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>

            </div>
        </div>

    )
}
export default DashboardAttactComponent;