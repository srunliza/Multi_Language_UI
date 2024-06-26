"use client";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const FeedbackComponent = ({ feedback, closeFeedback }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    if (feedback && feedback.payload) {
      setFeedbacks(feedback.payload);
    }
  }, [feedback]);

  return (
    <div className="bg-white w-[26rem] py-5 px-5 shadow-md rounded-lg h-[520px] border relative">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-gray-800 text-xl font-semibold">Feedback</h1>
        {closeFeedback && (
          <IconButton onClick={closeFeedback}>
            <CloseIcon />
          </IconButton>
        )}
      </div>
      <div className="overflow-auto max-h-[400px] mb-4 no-scrollbar">
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
                    "../../../../Images/user-profile.png"
                  }
                  alt="profile user image"
                />
              </div>
              <div className="ml-0 sm:ml-3 mt-7 flex-1 relative">
                <div className="text-gray-800 mr-7 top-0 mt-[-20px] md:text-sm lg:text-md font-semibold">
                  {feedback.commentBy.fullName}
                </div>
                <div className="text-green-600 text-xs md:text-[11px] lg:text-sm">
                  {feedback.commentBy.role.roleName}
                </div>
                <div className="relative mt-3.5 text-gray-700 text-sm md:mt-[10px] ml-[-66px] mr-0 lg:text-md line-clamp-6 xl:w-[22rem] lg:w-[10rem] sm:w-[30rem] sm:pt-3 lg:mt-1 xl:mt-1 break-words">
                  {feedback.comment}
                </div>
                <div className="text-gray-500 sm:text-xs md:text-xs lg:text-xs mt-2 ml-[-66px]">
                  {new Date(feedback.createdDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
