import Image from "next/image";
import employee_welcome from "../../../../public/assets/images/employee-welcome.png"
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import EmployeeCalendarComponent from "@/components/EmployeeCalendarComponent";



const EmployeeDashboardPage = () => {
    return ( 
        <main>
            <div className="bg-gray-100 p-6 w-full mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">

                        {/* welcome employee dashboard */}
                        <div className="flex flex-col items-center bg-[#1A42BC] px-3 py-4 rounded-2xl shadow md:flex-row md:max-w-4xl">
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h1 className="mb-2 text-2xl font-bold pl-6 tracking-tight text-gray-900 dark:text-white">Welcome</h1>
                                <h2 className="mb-2 text-2xl font-bold pl-6 tracking-tight text-gray-900 dark:text-white">Sarah Conner</h2>

                                <p className="mb-3 font-normal text-gray-100 text-sm pl-6 dark:text-gray-100">Whether you’re here to browse, learn, or connect, 
                                we hope you find exactly what you're looking for. Enjoy exploring, and don’t hesitate to reach out if you have any questions!</p>
                            </div>

                            <Image src={employee_welcome} width={320} height={320} alt="welcome card image"/>
                        </div>                      
                    </div>

                    {/* calendar */}
                    <div className="col-span-4">
                        {/* Calendar date picker */}
                        <div className="">
                            <EmployeeCalendarComponent/>
                        </div>
                    </div>
                </div>



                <div className="flex-grow mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                        {/* item card 1 */}
                        <div className="bg-white p-4 rounded-xl border-2 border-red-300 shadow-md">
                            <div>
                                <h1 className="font-bold text-xl text-gray-600">Pending Project</h1>
                                {/* <div className="bg-gray-300 px-3 py-3 ml-[202px] rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="warning"/>
                                </div> */}
                                <span className="px-3 py-3 rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="warning"/>
                                </span>
                                <h3 className="font-bold text-xl text-gray-800">40,689</h3>
                            </div>
                        </div>

                        {/* item card 2 */}
                        <div className="bg-white p-4 rounded-xl  border-2 border-green-300 shadow-md">
                            <div>
                                <h1 className="font-bold text-xl text-gray-600">Finished Project</h1>
                                {/* <div className="bg-gray-300 px-3 py-3 ml-[202px] rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="warning"/>
                                </div> */}
                                  <span className="px-3 py-3 rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="primary"/>
                                </span>
                                <h3 className="font-bold text-xl text-gray-800">40,689</h3>
                            </div>
                        </div>

                        {/* item card 3 */}
                        <div className="bg-white p-4 rounded-xl  border-2 border-yellow-300 shadow-md">
                            <div>
                                <h1 className="font-bold text-xl text-gray-600">Progress Project</h1>
                                {/* <div className="bg-gray-300 px-3 py-3 ml-[202px] rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="warning"/>
                                </div> */}
                                  <span className="px-3 py-3 rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="warning"/>
                                </span>
                                <h3 className="font-bold text-xl text-gray-800">40,689</h3>
                            </div>
                        </div>

                        {/* item card 4 */}
                        <div className="bg-white p-4 rounded-xl  border-2 border-blue-300 shadow-md">
                            <div>
                                <h1 className="font-bold text-xl text-gray-600">Total Project</h1>
                                {/* <div className="bg-gray-300 px-3 py-3 ml-[202px] rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="warning"/>
                                </div> */}
                                  <span className="px-3 py-3 rounded flex justify-end items-center">
                                    <PendingActionsOutlinedIcon color="success"/>
                                </span>
                                <h3 className="font-bold text-xl text-gray-800">40,689</h3>
                            </div>
                        </div>
                    </div>
                </div>


    
                {/* table item */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 bg-[#dbfcfc]">
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
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4">
                                    Translator
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <span className="bg-green-500 text-xs text-white font-semibold py-1 px-4 rounded-xl">Finished</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4">
                                    Developer
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    6/05/2024
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <span className="bg-red-600 text-white text-xs font-semibold py-1 px-4 rounded-xl">Pending</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4">
                                    Translator
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <span className="bg-yellow-400 text-xs text-white font-semibold py-1 px-4 rounded-xl">Progress</span>
                                </td>
                            </tr>
                            <tr class="bg-white border-b text-gray-900 dark:border-gray-500">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                    Web Designing
                                </th>
                                <td class="px-6 py-4">
                                    Translator
                                </td>
                                <td class="px-6 py-4">
                                    5/26/2024
                                </td>
                                <td class="px-6 py-4">
                                    5/30/2024
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <span className="bg-green-500 text-xs text-white font-semibold py-1 px-4 rounded-xl">Finished</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        <div className="bg-red-300 mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                <div className="col-span-1">
                    <div className="flex flex-col md:flex-row justify-evenly py-10 gap-5">
                        <div className="bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                            <div className="md:flex">
                                <div className="flex-shrink-0 m-4 w-16 h-16 rounded-full text-[#454545] self-center">
                                    <img src="../Images/teamwork.png" alt="teamwork" />
                                </div>
                                <div className="p-8">
                                    <p className="mt-2 text-[#454545] text-lg">
                                        <strong>Team Management</strong> <br />
                                        Our system supports three distinct user roles: Project Leader,
                                        Translator, and Developer. This structure ensures clarity in
                                        responsibilities and efficient management of translation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col md:flex-row justify-evenly py-10 gap-5">
                        <div className="bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                            <div className="md:flex">
                                <div className="flex-shrink-0 m-4 w-16 h-16 rounded-full text-[#454545] self-center">
                                    <img src="../Images/teamwork.png" alt="teamwork" />
                                </div>
                                <div className="p-8">
                                    <p className="mt-2 text-[#454545] text-lg">
                                        <strong>Team Management</strong> <br />
                                        Our system supports three distinct user roles: Project Leader,
                                        Translator, and Developer. This structure ensures clarity in
                                        responsibilities and efficient management of translation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col md:flex-row justify-evenly py-10 gap-5">
                        <div className="bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                            <div className="md:flex">
                                <div className="flex-shrink-0 m-4 w-16 h-16 rounded-full text-[#454545] self-center">
                                    <img src="../Images/teamwork.png" alt="teamwork" />
                                </div>
                                <div className="p-8">
                                    <p className="mt-2 text-[#454545] text-lg">
                                        <strong>Team Management</strong> <br />
                                        Our system supports three distinct user roles: Project Leader,
                                        Translator, and Developer. This structure ensures clarity in
                                        responsibilities and efficient management of translation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
        </main>
     );
}
 
export default EmployeeDashboardPage;