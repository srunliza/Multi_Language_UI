'use client';
import React, { useState, useEffect, useRef } from 'react';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from "flowbite-react";
// import ConfirmPopup from '../components/ConfirmToDeleteComponent';
// import editIcon from "../../public/assets/icons/icon_edit.svg";
// import deleteIcon from "../../public/assets/icons/icon_delete.svg";
// import EditFeedbackComponent from './EditFeedbackComponent';
// import send from "../../public/assets/icons/send.svg";

const FeedbackTranslatorComponent = () => {
  const feedbackData = [
    {
      id: 1,
      name: "Kroem Vandy",
      image: '/assets/images/Vandy.png',
      position: "Developer",
      comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
      date: "24 May 2024",
    },
    {
      id: 2,
      name: "Srun Lisa",
      image: '/assets/images/lisa.png',
      position: "Developer",
      comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
      date: "24 May 2024",
    },
    {
      id: 3,
      name: "Tep Thean",
      image: '/assets/images/thean.png',
      position: "Developer",
      comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
      date: "24 May 2024",
    },
    {
      id: 4,
      name: "Ret Sokhim",
      image: '/assets/images/sokhim.png',
      position: "Developer",
      comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
      date: "24 May 2024",
    },
    {
      id: 5,
      name: "Tey Sokheng",
      image: '/assets/images/sokheng.png',
      position: "Developer",
      comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
      date: "24 May 2024",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(null);
  const popupRef = useRef(null);


  const handleIconClick = (index) => {
    if (currentPopupIndex === index) {
      setShowPopup(!showPopup);
    } else {
      setShowPopup(true);
      setCurrentPopupIndex(index);
    }
  };

  const handleEdit = (feedback) => {
    setCurrentFeedback(feedback);
    setEditPopupOpen(true);
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setEditPopupOpen(false);
  };

  const handleDelete = () => {
    setShowConfirmPopup(true);
    setShowPopup(false);
  };

  const confirmDelete = () => {
    // Handle delete confirmation logic here
    setShowConfirmPopup(false);
  };

  const cancelDelete = () => {
    setShowConfirmPopup(false);
  };

  const handleEditClick = () => {
    console.log('Edit clicked');
    setEditPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);


  return (
    <main className="max-w-4xl mx-auto">
      <div className="bg-white w-full py-3 px-5 shadow-md rounded-xl min-h-[100px] border">
        <h1 className="text-gray-800 text-xl font-semibold mb-5">Feedback</h1>
        <div className="overflow-auto max-h-[426px] mb-4 no-scrollbar">
          {feedbackData.map((feedback, index) => (
            <div key={index} className="bg-white shadow-sm px-4 py-2 border rounded-xl mb-2.5">
              <div className="flex flex-col sm:flex-row pb-2">
                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={feedback.image}
                    alt="profile user image"
                  />
                </div>

                <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 flex-1 relative">
                  <div className="font-medium text-gray-800 mr-7 top-0  md:text-sm lg:text-lg">{feedback.name}</div>
                  <div className="text-gray-600 text-xs md:text-[11px] lg:text-sm">{feedback.position}</div>
                  <div className="mt-3.5 text-gray-700 text-[12.8px] md:mt-[10px] ml-[-66px] mr-0 line-clamp-2 lg:mt-5 lg:text-sm">{feedback.comment}</div>
                  <div className="text-gray-500 sm:text-xs md:text-sm lg:text-[15px] mt-2 ml-[-66px]">{feedback.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeedbackTranslatorComponent