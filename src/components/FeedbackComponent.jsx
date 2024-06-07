"use client";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import send from "../../public/assets/icons/send.svg";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ConfirmPopup from "../components/ConfirmToDeleteComponent";
import { feedbackData } from "@/obj/feedbackData";

const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState(feedbackData);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFeedback, setEditFeedback] = useState({ id: null, comment: "" });
  const [newComment, setNewComment] = useState("");

  const modalRef = useRef();

  const handleIconClick = (index) => {
    if (currentPopupIndex === index) {
      setShowPopup(!showPopup);
    } else {
      setShowPopup(true);
      setCurrentPopupIndex(index);
    }
  };

  const handleEditClick = (feedback) => {
    setEditFeedback(feedback);
    setIsEditing(true);
    setShowPopup(false);
  };

  const handleEditChange = (e) => {
    setEditFeedback({ ...editFeedback, comment: e.target.value });
  };

  const handleEditSubmit = () => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((fb) =>
        fb.id === editFeedback.id
          ? { ...fb, comment: editFeedback.comment }
          : fb
      )
    );
    setIsEditing(false);
    setCurrentPopupIndex(null);
  };

  const handleDeleteClick = () => {
    setShowConfirmPopup(true);
    setShowPopup(false);
  };

  const confirmDelete = () => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.filter((feedback) => feedback.id !== currentPopupIndex + 1)
    );
    setShowConfirmPopup(false);
    setCurrentPopupIndex(null);
  };

  const cancelDelete = () => {
    setShowConfirmPopup(false);
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setCurrentPopupIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
    };
    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newFeedback = {
        id: feedbacks.length + 1,
        name: "New User",
        position: "Developer",
        comment: newComment,
        date: new Date().toLocaleDateString(),
        image: "../../assets/images/lisa.png",
      };
      setFeedbacks([...feedbacks, newFeedback]);
      setNewComment("");
    }
  };

  return (
    <main className="max-w-4xl mx-auto">
      <div className="bg-white w-full py-3 px-5 shadow-md rounded-xl min-h-[100px] border">
        <h1 className="text-gray-800 text-xl font-semibold mb-5">Feedback</h1>
        <div className="overflow-auto max-h-[426px] mb-4 no-scrollbar">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white shadow-sm px-4 py-2 border rounded-xl mb-2.5"
            >
              <div className="flex flex-col sm:flex-row pb-2">
                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={feedback.image}
                    alt="profile user image"
                  />
                </div>
                <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 flex-1 relative">
                  <div className="text-gray-800 flex justify-end pr-0 md:mr-[-10px]">
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} onClick={() => handleIconClick(index)}>
                        <MoreVertIcon />
                      </div>

                      {showPopup && currentPopupIndex === index && (
                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                          <li>
                            <button
                              className="text-black hover:text-blue-600"
                              onClick={() => handleEditClick(feedback)}
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
                              onClick={handleDeleteClick}
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
                              <span
                                className="hidden md:inline-block"
                                name="delete"
                              >
                                Delete
                              </span>
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="font-medium text-gray-800 mr-7 top-0 mt-[-20px] md:text-sm lg:text-lg">
                    {feedback.name}
                  </div>
                  <div className="text-gray-600 text-xs md:text-[11px] lg:text-sm">
                    {feedback.position}
                  </div>
                  <div className="mt-3.5 text-gray-700 text-[12.8px] md:mt-[10px] ml-[-66px] mr-0 line-clamp-2 lg:mt-5 lg:text-sm">
                    {feedback.comment}
                  </div>
                  <div className="text-gray-500 sm:text-xs md:text-sm lg:text-[15px] mt-2 ml-[-66px]">
                    {feedback.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="sticky bottom-0 bg-white w-full"
          onSubmit={handleNewCommentSubmit}
        >
          <div className="py-1">
            <div className="relative text-gray-800">
              <input
                type="text"
                id="new-comment"
                value={newComment}
                onChange={handleNewCommentChange}
                className="w-full bg-gray-50 text-gray-800 text-sm px-10 pl-2 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                placeholder="Enter your feedback here..."
              />

              <span className="absolute inset-y-0 flex items-center right-3 text-gray-500">
                <button type="submit">
                  <Image src={send} width={20} height={20} alt="send icon" />
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg shadow-lg w-96"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold mb-4">Edit Comment</h3>
              <svg
                className="h-4 w-4"
                onClick={handleModalClose}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            </div>
            <input
              type="text"
              value={editFeedback.comment}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2 border border-blue-500"
              >
                No
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmPopup && (
        <ConfirmPopup
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </main>
  );
};

export default FeedbackComponent;
