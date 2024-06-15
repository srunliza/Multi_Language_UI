'use client'
import { translateData } from "@/obj/translateData";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const ProjectLeaderPreviewTranslateComponent = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableData, setEditableData] = useState(translateData);
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const inputRefs = useRef({});

    const handleEditClick = () => {
        if (!isEditing && editingRowIndex === null && editableData.length > 0) {
            setEditingRowIndex(0); // Set the first row to be editable initially
        }
        setIsEditing(!isEditing);
    };

    const handleInputChange = (id, value) => {
        const updatedData = editableData.map((item) =>
            item.id === id ? { ...item, baseLang: value } : item
        );
        setEditableData(updatedData);
    };

    const router = useRouter();

    const handleGoBack = () => {
        router.push("./view-attachment");
    };

    useEffect(() => {
        if (isEditing && editingRowIndex !== null) {
            inputRefs.current[editingRowIndex]?.focus();
        }
    }, [isEditing, editingRowIndex]);

    return (
        <section class="bg-white p-5 rounded-lg shadow-lg flex-1 ">
            <h1 class="text-lg font-semibold mb-4">Web Designing</h1>
            <div className="flex rounded-t-md border-x border-t sticky py-2 px-4 font-semibold  bg-[#daeaff] justify-evenly items-center">
                <h1>English</h1>
                <KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
                <h1>Korean</h1>
            </div>
            {/* Table Section */}
            <div className="max-h-[65vh] border-b rounded-b-md overflow-y-scroll no-scrollbar">
                <table className="w-full  border-collapse">
                    <tbody>
                        {editableData.map((e, index) => (
                            <tr key={e.id} className="border">
                                <td
                                    className={`w-1/2   py-2 px-4 ${isEditing && editingRowIndex === index
                                        ? "border border-blue-500 transition-all"
                                        : ""
                                        }`}
                                    onClick={() => setEditingRowIndex(index)}
                                >
                                    {isEditing && editingRowIndex === index ? (
                                        <input
                                            type="text"
                                            value={e.baseLang}
                                            onChange={(event) =>
                                                handleInputChange(e.id, event.target.value)
                                            }
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            className="border-0 p-0  outline-none focus:ring-0 h-full w-full"
                                        />
                                    ) : (
                                        e.baseLang
                                    )}
                                </td>
                                <td className="py-2 border-l px-4">
                                    {e.tagetLang}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* End Table Section */}

            {/* Handle Button */}
            <div className="flex justify-end gap-2 mt-4">
                {/* Button Go Back */}
                <button
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out "
                    onClick={handleGoBack}
                >
                    Back
                </button>
                {/* Button Handle Edit Key */}
                <button
                    onClick={handleEditClick}
                    className="px-4 py-2 bg-blue-700 text-sm text-white rounded-md hover:bg-blue-800 transition duration-150 ease-in-out"
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>
        </section>
    );
};

export default ProjectLeaderPreviewTranslateComponent;
