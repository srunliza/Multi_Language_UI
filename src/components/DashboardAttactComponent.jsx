
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

        }
    ];

    return (
        <div>
            {/* date */}
            <div className="md:p-10 p-10 flex-1  ">
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
            {/* table */}
            <div className="shadow-lg rounded-lg overflow-hidden  md:mx-10 mx-10 bg-white">
                <table className="min-w-full ">
                    <thead className="text-lg text-gray-700  white bg-blue-200 dark:text-gray-400">
                        <tr className="">
                            <th className="py-6 px-3  text-black  font-semibold text-center">
                                File Name
                            </th>
                            <th className="py-6 px-3 text-center text-black font-semibold">
                                Language
                            </th>
                            <th className="py-6 px-3  text-center text-black  font-semibold">
                                Status
                            </th>
                            <th className="py-6 px-3  text-center text-black  font-semibold">
                                From
                            </th>
                            <th className="py-6 px-3  text-center text-black  font-semibold ">
                                To
                            </th>
                            <th className="py-6 px-3  text-center text-black  font-semibold ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data) => (
                                <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className=" text-center  px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.title}
                                    </th>
                                    <td className=" text-center py-5 px-3   border-b border-gray-200 ">
                                        {data.language}
                                    </td>
                                    <td className=" text-center py-5 px-3   border-b border-gray-200 text-green-500 truncate">
                                        {data.status}
                                    </td>
                                    <td className=" text-center py-5 px-3   border-b border-gray-200">
                                        {data.from}
                                    </td>
                                    <td className=" text-center py-5 px-3  border-b border-gray-200">
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