const DashboardAttactComponent = () => {
   const data = [
    {
        id : 1,
        title : WebDesign,
        language : Khmer,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       },
       {
        id : 2,
        title : WebDesign,
        language : Khmer,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       },
       {
        id : 3,
        title : WebDesign,
        language : Brazilan,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       },
       {
        id : 4,
        title : WebDesign,
        language : Khmer,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       },
       {
        id : 5,
        title : WebDesign,
        language : Khmer,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       },
       {
        id : 6,
        title : WebDesign,
        language : Khmer,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       },
       {
        id : 7,
        title : WebDesign,
        language : Khmer,
        status : Finished,
        from : 14/5/2024,
        to : 17/5/2024
       }
   ]

    return (
        <div>
            {/* date */}
            <div className="grid grid-cols-3 gap-5">
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <p>Satrt</p>
                    </span>
                    <input type="date" id="w-[30px] website-admin" className="w-[100px] rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
                </div>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <p>End</p>
                    </span>
                    <input type="date" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
                </div>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <p>Status</p>

                    </span>
                    <select id="countries" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>All</option>
                        <option value="US"  ></option>

                    </select>
                </div>
            </div>
            {/* table */}
            <div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    File Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Language
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   From
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  To
                                </th>
                                <th scope="col" class="px-6 py-3">
                                  Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                
                             
                                
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>
                                <td class="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td class="px-6 py-4">
                                    $1999
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    Black
                                </td>
                                <td class="px-6 py-4">
                                    Accessories
                                </td>
                                <td class="px-6 py-4">
                                    $99
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>

    )
}
export default DashboardAttactComponent;