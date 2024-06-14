'use client'
import { translateData } from "@/obj/translateData";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

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
    <div className="container mx-auto shadow-sm">
      <div className="overflow-x-auto">
        <div className="flex border bg-gray-50 p-3 rounded-t-xl justify-evenly items-center">
          <h3>English</h3>
          <EastOutlinedIcon className="text-gray-400"/>
          <h3>Korean</h3>
        </div>
        <div className="overflow-auto h-[450px] border border-x-0 border-t-0 no-scrollbar">
          <table className="min-w-full">
            <tbody>
              {editableData.map((e, index) => (
                <tr key={e.id}>
                  <td
                    className={`py-2 px-6 text-[15px] bg-white border-b w-[50%] ${
                      isEditing && editingRowIndex === index
                        ? "border-2 border-blue-500"
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
                        className="border-0 p-0 text-[15px] outline-none focus:ring-0 h-full w-full"
                      />
                    ) : (
                      e.baseLang
                    )}
                  </td>
                  <td className="py-2 pr-14 px-6 border border-t-0 bg-white w-[50%]">
                    {e.tagetLang}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end m-5">
          <div className="flex justify-end mt-4 ">
            <button
              onClick={handleEditClick}
              className="cursor-pointer shadow-lg bg-[#7C40FF] hover:bg-[#6b31e7] rounded-xl py-2 px-6 text-sm text-white"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <div className="flex justify-end mt-4 ml-3">
            <a
              className="cursor-pointer shadow-lg bg-[#7C40FF] hover:bg-[#6b31e7] rounded-xl py-2 px-3 text-sm text-white"
              onClick={handleGoBack}
            >
              Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeaderPreviewTranslateComponent;
