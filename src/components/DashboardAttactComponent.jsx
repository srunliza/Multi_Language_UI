
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
            <div className="p-6 flex-1 container block m-auto">
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
                        <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>All</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* table */}
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 bg-white">
                <table className="w-full table-fixed">
                    <thead className="text-xs text-gray-700  white bg-blue-200 dark:text-gray-400">
                        <tr className="">
                            <th className="w-1/4 py-6 px-3  text-gray-600 font-bold uppercase text-center">
                                File Name
                            </th>
                            <th className="w-1/4 py-6 px-3 text-center text-gray-600 font-bold uppercase">
                                Language
                            </th>
                            <th className="w-1/4 py-6 px-3  text-center text-gray-600 font-bold uppercase">
                                Status
                            </th>
                            <th className="w-1/4 py-6 px-3  text-center text-gray-600 font-bold uppercase">
                                From
                            </th>
                            <th className="w-1/4 py-6 px-3  text-center text-gray-600 font-bold uppercase">
                                To
                            </th>
                            <th className="w-1/4 py-6 px-3  text-center text-gray-600 font-bold uppercase">
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
                                    <td className=" text-center py-4 px-6  border-b border-gray-200 ">
                                        {data.language}
                                    </td>
                                    <td className=" text-center py-4 px-6  border-b border-gray-200 text-green-500 truncate">
                                        {data.status}
                                    </td>
                                    <td className=" text-center py-4 px-6  border-b border-gray-200">
                                        {data.from}
                                    </td>
                                    <td className=" text-center py-4 px-6  border-b border-gray-200">
                                        {data.to}
                                    </td>
                         
                                    <td className="flex gap-2 justify-center">
                                        <div>
                                            <svg width="34" height="51" viewBox="0 0 34 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.544 32.5723C26.848 32.9983 27 33.2123 27 33.5273C27 33.8433 26.848 34.0563 26.544 34.4823C25.178 36.3983 21.689 40.5273 17 40.5273C12.31 40.5273 8.822 36.3973 7.456 34.4823C7.152 34.0563 7 33.8423 7 33.5273C7 33.2113 7.152 32.9983 7.456 32.5723C8.822 30.6563 12.311 26.5273 17 26.5273C21.69 26.5273 25.178 30.6573 26.544 32.5723Z" stroke="#5081FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20 33.5273C20 32.7317 19.6839 31.9686 19.1213 31.406C18.5587 30.8434 17.7956 30.5273 17 30.5273C16.2044 30.5273 15.4413 30.8434 14.8787 31.406C14.3161 31.9686 14 32.7317 14 33.5273C14 34.323 14.3161 35.0861 14.8787 35.6487C15.4413 36.2113 16.2044 36.5273 17 36.5273C17.7956 36.5273 18.5587 36.2113 19.1213 35.6487C19.6839 35.0861 20 34.323 20 33.5273Z" stroke="#5081FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </div>
                                        <div>
                                            <svg width="46" height="51" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 36.7317L4 40.4198C4 40.9788 4.21071 41.5148 4.58579 41.9101C4.96086 42.3053 5.46957 42.5273 6 42.5273H18C18.5304 42.5273 19.0391 42.3053 19.4142 41.9101C19.7893 41.5148 20 40.9788 20 40.4198V36.7317M12.0011 24.5273V36.4698M12.0011 36.4698L16.5725 31.9066M12.0011 36.4698L7.42969 31.9066" stroke="#F8C408" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
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