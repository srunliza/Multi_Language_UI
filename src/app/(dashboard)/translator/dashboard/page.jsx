"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { translatorData } from "@/obj/translatorData";
import { projectsTableData } from "@/obj/tableData";
import SortProjectCardList from "@/components/SortComponent";

const getStatusTextColor = (status) => {
    switch (status) {
        case "Completed":
            return "text-green-500";
        case "Progress":
            return "text-yellow-500";
        case "Pending":
            return "text-red-500";
        default:
            return "text-gray-500";
    }
};

const TranslatorPage = () => {
    const router = useRouter();
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [sortedData, setSortedData] = useState(projectsTableData);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [sortCriteria, setSortCriteria] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const sortData = useCallback(() => {
        let filteredData = [...projectsTableData];

        if (selectedStatus !== "All") {
            filteredData = filteredData.filter(
                (item) => item.status === selectedStatus
            );
        }

        if (startDate) {
            filteredData = filteredData.filter(
                (item) => new Date(item.startDate) >= new Date(startDate)
            );
        }

        if (endDate) {
            filteredData = filteredData.filter(
                (item) => new Date(item.endDate) <= new Date(endDate)
            );
        }

        filteredData.sort((a, b) => {
            if (sortCriteria === "fromDate" || sortCriteria === "toDate") {
                const dateA = new Date(a[sortCriteria]);
                const dateB = new Date(b[sortCriteria]);
                return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
            } else {
                const valueA = a[sortCriteria] ?? "";
                const valueB = b[sortCriteria] ?? "";
                return sortOrder === "asc"
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }
        });

        setSortedData(filteredData);
    }, [selectedStatus, startDate, endDate, sortCriteria, sortOrder]);

    useEffect(() => {
        sortData();
    }, [sortData]);

    const handleRowClick = (id) => {
        router.push(`/translator/dashboard/workspace`);
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const handleSortClick = (criteria) => {
        setSortCriteria(criteria);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div className="w-full p-6">
            <SortProjectCardList
                selectedStatus={selectedStatus}
                handleStatusChange={(e) => handleStatusChange(e.target.value)}
                handleSortClick={(value, type) => {
                    if (type === "startDate") {
                        setStartDate(value);
                    } else {
                        setEndDate(value);
                    }
                }}
            />


            {/* Table */}
            <div className="shadow-lg h-screen  no-scrollbar overflow-y-scroll rounded-lg ">
                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 z-10 font-semibold sticky top-0 bg-[#daeaff]">
                        <tr>
                            <th className="px-6 py-4">
                                File Name
                                <button onClick={() => handleSortClick("projectName")}>
                                    <svg
                                        className="h-4 w-4 inline"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <th className="px-10 py-4">
                                Language
                                <button onClick={() => handleSortClick("language")}>
                                    <svg
                                        className="h-4 w-4 inline"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <th className="px-10 py-4">
                                Status
                            </th>
                            <th className="px-10 py-4">
                                Start Date
                                <button onClick={() => handleSortClick("fromDate")}>
                                    <svg
                                        className="h-4 w-4 inline"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <th className="px-10 py-4">
                                End Date
                                <button onClick={() => handleSortClick("toDate")}>
                                    <svg
                                        className="h-4 w-4 inline"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"

                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((data) => (
                            <tr
                                key={data.id}
                                className="bg-white border-b text-gray-900 hover:bg-gray-100  dark:border-gray-300 cursor-pointer"
                                onClick={() => handleRowClick(data.id)}
                            >
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {data.projectName}
                                </td>
                                <td className=" py-4 pl-10">
                                    {data.language}
                                </td>
                                <td className={`py-4 pl-10 ${getStatusTextColor(data.status)} truncate`}>
                                    {data.status}
                                </td>
                                <td className="pl-10 py-4 border-gray-200">{data.fromDate}</td>
                                <td className="pl-10 py-4 border-gray-200">{data.toDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TranslatorPage;
