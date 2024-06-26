"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChatbotPopover from "@/components/ChatbotPopover";
import HintPopupComponent from "./HintPopupComponent";
import FeedbackComponent from "./FeedbackComponent";
import IconButton from "@mui/material/IconButton";
import FeedbackIcon from "@mui/icons-material/Feedback";

const TranslatorWorkSpaceClient = ({ feedback, previewData }) => {
  console.log(previewData);

  const [showFeedback, setShowFeedback] = useState(false);

  const [translations, setTranslations] = useState(previewData.data);
  const [koreanTranslations, setKoreanTranslations] = useState(
    previewData.data.reduce((acc, item) => {
      acc[item.id] = item.value || "";
      return acc;
    }, {})
  );

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (id, value) => {
    setKoreanTranslations({
      ...koreanTranslations,
      [id]: value,
    });

    setTranslations(
      translations.map((translation) =>
        translation.id === id ? { ...translation, value: value } : translation
      )
    );
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

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="flex h-full px-3 justify-between items-center">
            <h1 className="gap-5 text-gray-800 text-xl font-semibold">
              {previewData.attachmentName}
            </h1>
            <button
              onClick={() => document.getElementById("modal_close").showModal()}
            >
              <CloseOutlinedIcon />
            </button>
            <dialog id="modal_close" className="modal">
              <div className="modal-box w-96">
                <p className="py-4 text-xl text-center font-semibold">
                  Do you want to Save or Not?
                </p>
                <div className="modal-action">
                  <form method="dialog" className="flex m-auto gap-5">
                    <button className="text-blue-800 bg-white border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4">
                      No
                    </button>
                    <button className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white">
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <div className="col-span-4">
          <HintPopupComponent previewData={previewData}/>
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
                  {translations.map((item, index) => (
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
                          value={koreanTranslations[item.id]}
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
            <button
              className="border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-black"
              onClick={() => document.getElementById("modal_save").showModal()}
            >
              Save
            </button>
            <dialog id="modal_save" className="modal">
              <div className="modal-box w-96">
                <p className="py-4 text-xl text-center font-semibold">
                  Do you want to save this translation?
                </p>
                <div className="modal-action">
                  <form method="dialog" className="flex m-auto gap-5">
                  <button className="text-blue-800 bg-white border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4">
                      No
                    </button>
                    <button className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white">
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            <button
              className="bg-blue-800 hover:bg-blue-700 shadow-sm focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm py-[10px] w-[90px] px-5 text-white"
              onClick={() =>
                document.getElementById("modal_submit").showModal()
              }
            >
              Submit
            </button>
            <dialog id="modal_submit" className="modal">
              <div className="modal-box w-96">
                <p className="py-4 text-xl text-center font-semibold">
                  Do you want to submit this translation?
                </p>
                <div className="modal-action">
                  <form method="dialog" className="flex m-auto gap-5">
                  <button className="text-blue-800 bg-white border border-blue-800 hover:border-blue-400 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4">
                      No
                    </button>
                    <button className="bg-blue-800 hover:bg-blue-700 shadow-sm font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white">
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-end">
          <div className="hidden md:flex lg:hidden">
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
    </div>
  );
};

export default TranslatorWorkSpaceClient;
