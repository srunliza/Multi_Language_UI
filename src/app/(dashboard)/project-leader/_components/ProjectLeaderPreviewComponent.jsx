"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { updateKeyAction } from "@/action/attachment-action";
import Toast from "@/components/ToastComponent";

const ProjectLeaderPreviewTranslateComponent = ({ previewData }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(previewData.data);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const status = previewData.status;
  const attachmentId = previewData.attachmentId;
  console.log(attachmentId);

  const handleGoBack = () => {
    router.push(`../view-attachment/${previewData.projectId}`);
  };

  const handleEditClick = async () => {
    if (isEditing) {
      // Collect only the changed data
      const updateJsonKey = editedData
        .filter(
          (item, index) =>
            item.key !== previewData?.data[index]?.key ||
            item.hint !== previewData?.data[index]?.hint
        )
        .map((item) => ({
          id: item.id,
          newKey: item.key,
          hint: item.hint !== undefined ? item.hint : "null",
        }));

      if (updateJsonKey.length > 0) {
        try {
          const response = await updateKeyAction(attachmentId, updateJsonKey);
          if (response.status === "OK" || response.status === 202) {
            setToastMessage("Changes saved successfully!");
            setToastType("success");
            setShowToast(true);
            router.refresh(); // Refresh the page
          } else if (
            response.status === 400 &&
            response.detail ===
              "There no more key in the attachment while your status is progress please add more key"
          ) {
            setToastMessage("Changes saved successfully!");
            setToastType("success");
            setShowToast(true);
            router.refresh(); // Refresh the page
          } else if (response.status === 400) {
            setToastMessage(
              "Can only update keys for attachments with status 'Pending' or 'Progress'."
            );
            setToastType("error");
            setShowToast(true);
          } else {
            setToastMessage("Failed to save changes.");
            setToastType("error");
            setShowToast(true);
          }
          console.log("Saved data:", updateJsonKey);
        } catch (error) {
          setToastMessage("An error occurred while saving changes.");
          setToastType("error");
          setShowToast(true);
          console.error("Error saving data:", error);
        }
      }
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (id, newKey, newHint) => {
    const updatedData = editedData.map((item) => {
      if (item.id === id) {
        return { ...item, key: newKey, hint: newHint };
      }
      return item;
    });
    setEditedData(updatedData);
  };

  return (
    <section className="bg-white p-5 rounded-lg shadow-lg flex-1">
      <Toast
        message={toastMessage}
        type={toastType}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <h1 className="text-lg font-semibold mb-4">
        {previewData.attachmentName}
      </h1>
      <div className="flex rounded-t-md border-x border-t sticky py-2 px-4 font-semibold bg-[#daeaff] justify-evenly items-center">
        <h1>{previewData.baseLanguage}</h1>
        <KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
        <h1>{previewData.language.language}</h1>
      </div>
      {/* Table Section */}
      <div className="max-h-[55vh] border-b rounded-b-md overflow-y-scroll no-scrollbar">
        <table className="w-full border-collapse">
          <tbody>
            {editedData
              .filter((e) => e.key !== "")
              .map((e) => (
                <tr key={e.id} className="border">
                  <td className="w-1/2 py-2 px-4">
                    {isEditing ? (
                      <input
                        type="text"
                        value={e.key}
                        onChange={(event) =>
                          handleInputChange(e.id, event.target.value)
                        }
                        className="border border-gray-300 p-1 rounded-md w-full"
                      />
                    ) : (
                      e.key
                    )}
                  </td>
                  <td className="py-2 border-l px-4">{e.value || ""}</td>
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
          className="px-4 py-2 border border-blue-800 text-blue-800 hover:border-blue-400 rounded-md text-sm transition duration-150 ease-in-out"
          onClick={handleGoBack}
        >
          Back
        </button>
        {/* Edit/Save Button */}
        <button
          className="px-4 py-2 border bg-blue-800 border-blue-800 text-white hover:bg-blue-700 rounded-md text-sm transition duration-150 ease-in-out"
          onClick={handleEditClick}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </section>
  );
};

export default ProjectLeaderPreviewTranslateComponent;
