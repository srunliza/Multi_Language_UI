"use client";
import { useState, useRef, useEffect } from "react";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import ChatbotPopover from "@/components/ChatbotPopover";
import HintPopupComponent from "./HintPopupComponent";
import FeedbackComponent from "./FeedbackComponent";
import IconButton from "@mui/material/IconButton";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CloseModal from "./CloseModal";
import SaveSubmitModal from "./SaveSubmitComponent";
import Toast from "@/components/ToastComponent";

const TranslatorWorkSpaceClient = ({ feedback, previewData }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [translationData, setTranslationData] = useState(previewData.data);
  const [showToast, setShowToast] = useState(false); // State for showing toast

  const attachmentId = previewData.attachmentId;
  const projectId = previewData.projectId;
  const data = previewData.data;

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (id, value) => {
    const updatedTranslations = translationData.map((translation) =>
      translation.id === id ? { ...translation, value: value } : translation
    );
    setTranslationData(updatedTranslations);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        inputRefs.current[prevIndex].focus();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const filteredTranslationData = translationData.filter(
    (item) => item.value !== null && item.value !== ""
  );

  const handleSave = () => {
    if (filteredTranslationData.length === 0) {
      setShowToast(true);
    } else {
      // Proceed with saving
      // Your saving logic here
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="flex h-full px-3 justify-between items-center">
            <h1 className="gap-5 text-gray-800 text-2xl font-semibold">
              {previewData.attachmentName}
            </h1>
            <CloseModal
              attachmentId={attachmentId}
              projectId={projectId}
              translationData={filteredTranslationData}
            />
          </div>
        </div>

        <div className="col-span-4">
          <HintPopupComponent previewData={data} />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <div className="rounded-xl bg-white border pb-3 overflow-hidden shadow-md">
            <div className="flex bg-[#dbebfe] font-semibold text-gray-800 p-3 justify-evenly items-center">
              <h3>{previewData.baseLanguage}</h3>
              <SwapHorizOutlinedIcon />
              <h3>{previewData.language.language}</h3>
            </div>
            <div className="max-h-[460px] no-scrollbar overflow-auto">
              <table className="min-w-full bg-white border-6">
                <tbody>
                  {translationData.map((item, index) => (
                    <tr key={item.id}>
                      <td className="py-2 px-6 border-b border-r w-[50%]">
                        {item.key}
                      </td>
                      <td className="border-b w-[50%]">
                        <input
                          type="text"
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="border-0 focus:ring-1 placeholder:whitespace-tracking-wide transition ring-blue-600 h-full placeholder:text-gray-400 w-full px-2 placeholder:text-xs py-2"
                          placeholder="translate here"
                          value={item.value || ""}
                          onChange={(e) =>
                            handleInputChange(item.id, e.target.value)
                          }
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) =>
                            (e.target.placeholder = "translate here")
                          }
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-4 mt-4 justify-end">
            <SaveSubmitModal
              attachmentId={attachmentId}
              projectId={projectId}
              translationData={filteredTranslationData}
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-end">
          <div className="md:flex lg:hidden xl:hidden">
            <IconButton onClick={() => setShowFeedback(true)}>
              <FeedbackIcon className="text-4xl" />
            </IconButton>
            {showFeedback && (
              <FeedbackComponent
                feedback={feedback}
                closeFeedback={() => setShowFeedback(false)}
              />
            )}
          </div>
          <div className="hidden lg:flex">
            <FeedbackComponent feedback={feedback} />
          </div>
          <ChatbotPopover />
        </div>
      </div>

      {showToast && (
        <Toast
          message="At least one translated word is required to save."
          type="error"
          show={showToast}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default TranslatorWorkSpaceClient;
