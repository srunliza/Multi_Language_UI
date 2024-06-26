import { saveValueAction, submitAction } from "@/action/attachment-action";
import Toast from "@/components/ToastComponent";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SaveSubmitModal = ({ attachmentId, translationData, projectId }) => {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const router = useRouter();

  const preparePayload = (translations) => {
    return translations.map(({ id, value }) => ({ id, value }));
  };

  const handleSaveTranslations = async () => {
    const payload = preparePayload(translationData);
    const response = await saveValueAction(attachmentId, payload);
    console.log(response);
    if (response.status === "OK") {
      setToast({
        show: true,
        message: "Attachment data updated successfully",
        type: "success",
      });
      router.push(`../${projectId}`);
    } else {
      setToast({
        show: true,
        message:
          "Cannot update attachment data after the expiration date please inform your project leader to update the date",
        type: "error",
      });
    }
  };

  const handleSubmit = async () => {
    const response = await submitAction(attachmentId);
    if (response.status === "OK") {
      setToast({
        show: true,
        message: "Attachment data submitted successfully",
        type: "success",
      });
      router.push(`../${projectId}`);
    } else {
      setToast({
        show: true,
        message:
          "All values in the attachment data must be non-null before submitting",
        type: "error",
      });
    }
  };

  return (
    <>
      <button
        className="border bg-white border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-blue-800"
        onClick={() => document.getElementById("modal_save").showModal()}
      >
        Save
      </button>
      <dialog id="modal_save" className="modal">
        <Toast
          message={toast.message}
          type={toast.type}
          show={toast.show}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
        <div className="modal-box w-96">
          <p className="py-4 text-xl text-center font-semibold">
            Do you want to save this translation?
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex m-auto gap-5">
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4"
                onClick={() => document.getElementById("modal_save").close()}
              >
                No
              </button>
              <button
                type="button"
                onClick={handleSaveTranslations}
                className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
              >
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <button
        className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-5 text-white"
        onClick={() => document.getElementById("modal_submit").showModal()}
      >
        Submit
      </button>
      <dialog id="modal_submit" className="modal">
        <Toast
          message={toast.message}
          type={toast.type}
          show={toast.show}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
        <div className="modal-box w-96">
          <p className="py-4 text-xl text-center font-semibold">
            Do you want to submit this translation?
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex m-auto gap-5">
              <button
                type="button"
                className="text-blue-800 bg-white border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4"
                onClick={() => document.getElementById("modal_submit").close()}
              >
                No
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
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

export default SaveSubmitModal;
