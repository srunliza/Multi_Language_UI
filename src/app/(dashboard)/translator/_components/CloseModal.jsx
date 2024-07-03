import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { saveValueAction } from "@/action/attachment-action";
import Toast from "@/components/ToastComponent";
import { useRouter } from "next/navigation";

const CloseModal = ({ attachmentId, translationData, projectId }) => {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const router = useRouter();

  const preparePayload = (translations) => {
    return translations.map(({ id, value }) => ({ id, value }));
  };

  const handleSaveTranslations = async () => {
    const payload = preparePayload(translationData);
    const response = await saveValueAction(attachmentId, payload);
    if (response.status === "OK") {
      setToast({
        show: true,
        message: "Attachment data updated successfully",
        type: "success",
      });
      router.push(`../${projectId}`);
    } else if (
      response.status === 400 &&
      response.detail === "Please input id and value of the words"
    ) {
      setToast({
        show: true,
        message: "Before save please have at least 1 keyword translated",
        type: "error",
      });
      setTimeout(() => {
        document.getElementById("modal_save").close(); // Close the modal automatically after 1000 ms
      }, 3000);
    } else {
      setToast({
        show: true,
        message:
          "Cannot update attachment data after the expiration date please inform your project leader to update the date",
        type: "error",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => document.getElementById("modal_close").showModal()}
      >
        <CloseOutlinedIcon />
      </button>
      <dialog id="modal_close" className="modal">
        <Toast
          message={toast.message}
          type={toast.type}
          show={toast.show}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
        <div className="modal-box w-96">
          <button
            onClick={() => document.getElementById("modal_close").close()}
            className="absolute top-0 right-0 m-2 p-1"
          >
            <CloseOutlinedIcon />
          </button>
          <p className="py-4 text-xl text-center font-semibold">
            Do you want to save or Not?
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex m-auto gap-5">
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4"
                onClick={() => router.push(`../${projectId}`)}
              >
                No
              </button>
              <button
                type="button"
                className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
                onClick={handleSaveTranslations}
              >
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CloseModal;
