import Link from "next/link";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const DeveloperDashboardComponent = () => {
    return ( 
        <main>
            <div className="bg-white w-full p-7">
           
                <div className="flex items-center space-x-4 text-gray-700">
                    <div className="flex flex-col">
                        <label htmlFor="start" className="text-sm text-gray-600 mb-1">Start</label>
                        <input
                        type="date"
                        id="start"
                        name="start"
                        className="px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="end" className="text-sm text-gray-600 mb-1">End</label>
                        <input
                        type="date"
                        id="end"
                        name="end"
                        className="px-3 py-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="status" className="text-sm text-gray-600 mb-1">Status</label>
                        <select
                        id="status"
                        name="status"
                        className="px-3 py-2 border border-gray-300 rounded"
                        >
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="inProgress">In Progress</option>
                        <option value="complete">Complete</option>
                        </select>
                    </div>
                </div>

                


                {/* table item */}
                <div class="relative overflow-y-auto shadow-md sm:rounded-lg mt-5">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 bg-[#daeaff]">
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
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    Korean
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    English
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    Chinese
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    Korean
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    French
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    English
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4 pl-10">
                                    Korean
                                </td>
                                <td className="px-6 py-4 pl-9 text-green-600 font-medium">
                                    Finished
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-1 py-4 text-right flex justify-center items-center gap-3">
                                    <Link href="#"><VisibilityOutlinedIcon color="primary" fontSize="small"/></Link>
                                    <Link href="#"><FileDownloadOutlinedIcon color="warning" fontSize="small"/></Link>
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
     );
}
 
export default DeveloperDashboardComponent;