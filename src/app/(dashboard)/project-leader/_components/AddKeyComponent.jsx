"use client";
import React, { useState } from "react";
import { addKeyAction } from "@/action/attachment-action";
import Toast from "@/components/ToastComponent";

const AddKeyComponent = ({ attachmentId, onAddKeySuccess }) => {
  const [newKey, setNewKey] = useState("");
  const [newHint, setNewHint] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleAddKey = async () => {
    const updateJsonKey = [{ key: newKey, hint: newHint }];
    try {
      const response = await addKeyAction(attachmentId, updateJsonKey);
      if (response.status === "OK" || response.status === 200) {
        setToastMessage("Key added successfully!");
        setToastType("success");
        setShowToast(true);
        onAddKeySuccess(updateJsonKey);
      } else {
        setToastMessage("Failed to add key.");
        setToastType("error");
        setShowToast(true);
      }
    } catch (error) {
      setToastMessage("An error occurred while adding the key.");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <div className="mt-5">
      <Toast
        message={toastMessage}
        type={toastType}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <input
        type="text"
        placeholder="Enter key"
        value={newKey}
        onChange={(e) => setNewKey(e.target.value)}
        className="border border-gray-300 p-1 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Enter hint"
        value={newHint}
        onChange={(e) => setNewHint(e.target.value)}
        className="border border-gray-300 p-1 rounded-md w-full mt-2"
      />
      <button
        className="px-4 py-2 border bg-blue-800 border-blue-800 text-white hover:bg-blue-700 rounded-md text-sm transition duration-150 ease-in-out mt-2"
        onClick={handleAddKey}
      >
        Add Key
      </button>
    </div>
  );
};

export default AddKeyComponent;
