"use client";
import send from "../../public/assets/icons/send.svg";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import DropdownMenu from "./DropdownFeedback";
import ModalComponent from "./ModalFeedback";
import Toast from "./ToastComponent";
import {
  removeFeedbackAction,
  editFeedbackAction,
  postFeedbackAction,
} from "@/action/feedback-action";

const FeedbackComponent = ({ feedback, attachmentId }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showPopup, setShowPopup] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFeedback, setEditFeedback] = useState({ id: null, comment: "" });
  const [newComment, setNewComment] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const modalRef = useRef();

  useEffect(() => {
    if (feedback && feedback.payload) {
      setFeedbacks(feedback.payload);
    }
  }, [feedback]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsEditing(false);
        setShowConfirmPopup(false);
        setShowPopup(null);
      }
    };
    if (isEditing || showConfirmPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, showConfirmPopup]);

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNewCommentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("attachmentId", attachmentId);
    formData.append("comment", newComment);

    const result = await postFeedbackAction(formData);
    if (result.status === "CREATED") {
      setToast({
        show: true,
        message: result.message || "Comment is successfully created",
        type: "success",
      });
    } else if (result.status === 404) {
      setToast({
        show: true,
        message: result.detail || "There is no translator in the project",
        type: "error",
      });
    }
  };

  const handleEditClick = (id, comment) => {
    setIsEditing(true);
    setShowPopup(null);
    setEditFeedback({ id: id, comment: comment });
  };

  const handleDeleteClick = (id) => {
    setShowConfirmPopup(true);
    setShowPopup(null);
    setEditFeedback({ id: id });
  };

  const handleDeleteConfirm = async () => {
    const result = await removeFeedbackAction(editFeedback.id);
    console.log("Delete Feedback Result:", result); // Debug log
    if (result.status === "OK") {
      const updatedFeedbacks = feedbacks.filter(
        (feedback) => feedback.feedbackId !== editFeedback.id
      );
      setFeedbacks(updatedFeedbacks);
      setToast({
        show: true,
        message: result.message || "Comment is successfully deleted",
        type: "success",
      });
    } else if (result.status === 404) {
      setToast({
        show: true,
        message: result.detail || "There is no translator in the project",
        type: "error",
      });
    }
    setShowConfirmPopup(false);
  };

  const handleEditConfirm = async () => {
    const formData = new FormData();
    formData.append("feedbackId", editFeedback.id);
    formData.append("comment", editFeedback.comment);

    const result = await editFeedbackAction(formData);
    console.log("Edit Feedback Result:", result); // Debug log
    if (result.status === "OK") {
      const updatedFeedbacks = feedbacks.map((feedback) =>
        feedback.feedbackId === editFeedback.id
          ? { ...feedback, comment: editFeedback.comment }
          : feedback
      );
      setFeedbacks(updatedFeedbacks);
      setToast({
        show: true,
        message: result.message || "Comment is successfully updated",
        type: "success",
      });
    } else if (result.status === 404) {
      setToast({
        show: true,
        message: result.detail || "There is no translator in the project",
        type: "error",
      });
    }
    setIsEditing(false);
  };

  const togglePopup = (index) => {
    if (showPopup === index) {
      setShowPopup(null);
    } else {
      setShowPopup(index);
    }
  };

  return (
    <main className="max-w-4xl mx-auto relative">
      <div className="bg-white w-full py-5 px-5 shadow-md rounded-lg h-[40rem] border relative">
        <h1 className="text-gray-800 text-xl font-semibold mb-5">Feedback</h1>
        <div className="overflow-auto max-h-[480px] mb-4 no-scrollbar">
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.feedbackId}
              className="bg-white shadow-sm px-4 py-2 border rounded-x mt-3 rounded-md"
            >
              <div className="flex flex-col sm:flex-row pb-2">
                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={
                      feedback.commentBy.image ||
                      "../../Images/user-profile.png"
                    }
                    alt="profile user image"
                  />
                </div>
                <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 flex-1 relative">
                  <div className="text-gray-800 flex justify-end pr-0 md:mr-[-10px]">
                    <div className="dropdown dropdown-end relative">
                      <div onClick={() => togglePopup(index)}>
                        <DropdownMenu
                          feedback={feedback}
                          index={index}
                          onDeleteClick={() =>
                            handleDeleteClick(feedback.feedbackId)
                          }
                          onEditClick={() =>
                            handleEditClick(
                              feedback.feedbackId,
                              feedback.comment
                            )
                          }
                        />
                      </div>

                      {showPopup === index && (
                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box absolute right-0">
                          <li>
                            <button
                              className="text-black hover:text-blue-600"
                              onClick={() =>
                                handleEditClick(
                                  feedback.feedbackId,
                                  feedback.comment
                                )
                              }
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </span>
                              <span className="hidden md:inline-block">
                                Edit
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="text-black hover:text-red-600"
                              onClick={() =>
                                handleDeleteClick(feedback.feedbackId)
                              }
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </span>
                              <span className="hidden md:inline-block">
                                Delete
                              </span>
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="font-medium text-gray-800 mr-7 top-0 mt-[-20px] md:text-sm lg:text-lg">
                    {feedback.commentBy.fullName}
                  </div>
                  <div className="text-green-600 text-xs md:text-[11px] lg:text-sm">
                    {feedback.commentBy.role.roleName}
                  </div>
                  <div className="relative mt-3.5 text-gray-700 text-md md:mt-[10px] ml-[-66px] mr-0 lg:text-md line-clamp-6 xl:w-[22rem] lg:w-[10rem] sm:w-[30rem] sm:pt-3 lg:mt-0 xl:mt-0 break-words">
                    {feedback.comment}
                  </div>
                  <div className="text-gray-500 sm:text-xs md:text-sm lg:text-sm mt-2 ml-[-66px]">
                    {new Date(feedback.createdDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="absolute bottom-4 w-full pr-10"
          onSubmit={handleNewCommentSubmit}
        >
          <div className="">
            <div className="text-gray-800">
              <input
                type="text"
                id="new-comment"
                value={newComment}
                onChange={handleNewCommentChange}
                className="w-full bg-gray-50 text-gray-800 text-sm px-10 pl-2 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                placeholder="Enter your feedback here..."
              />

              <span className="absolute inset-y-0 flex items-center right-3 text-gray-500 pr-10">
                <button type="submit">
                  <Image src={send} width={20} height={20} alt="send icon" />
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>

      <ModalComponent
        isVisible={showConfirmPopup}
        onClose={() => setShowConfirmPopup(false)}
        confirmText="Delete"
        onConfirm={handleDeleteConfirm}
      >
        <div className="text-md -mt-3 font-semibold">Are you sure you want to delete this comment?</div>
      </ModalComponent>

      <ModalComponent
        isVisible={isEditing}
        onClose={() => setIsEditing(false)}
        title="Edit Comment"
        confirmText="Save"
        onConfirm={handleEditConfirm}
      >
        <form>
          <input
            type="text"
            value={editFeedback.comment}
            onChange={(e) =>
              setEditFeedback({ ...editFeedback, comment: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter your comment"
          />
        </form>
      </ModalComponent>

      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </main>
  );
};

export default FeedbackComponent;
