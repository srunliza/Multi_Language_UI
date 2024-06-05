'use client';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import send from "../../public/assets/icons/send.svg";
import Image from 'next/image';
import { useState } from 'react';
import ConfirmPopup from '../components/ConfirmToDeleteComponent'
import editIcon from "../../public/assets/icons/icon_edit.svg"
import deleteIcon from "../../public/assets/icons/icon_delete.svg"


const FeedbackComponent = () => {
    const feedbackData = [
        {
            id: 1,
            name: "Kroem Vandy",
            image: './assets/images/vandy.png',
            position: "Developer",
            comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            date: "24 May 2024",
        },
        {
            id: 2,
            name: "Srun Liza",
            image: './assets/images/lisa.png',
            position: "Developer",
            comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            date: "24 May 2024",
        },
        {
            id: 3,
            name: "Tep Thean",
            image: './assets/images/thean.png',
            position: "Developer",
            comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            date: "24 May 2024",
        },
        {
            id: 4,
            name: "Ret Sokhim",
            image: './assets/images/sokhim.png',
            position: "Developer",
            comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            date: "24 May 2024",
        },
        {
            id: 5,
            name: "Tey Sokheng",
            image: './assets/images/sokheng.png',
            position: "Developer",
            comment: "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            date: "24 May 2024",
        },
    ];


    const [showPopup, setShowPopup] = useState(false);
    const [currentPopupIndex, setCurrentPopupIndex] = useState(null);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const handleIconClick = (index) => {
        if (currentPopupIndex === index) {
            setShowPopup(!showPopup);
        } else {
            setShowPopup(true);
            setCurrentPopupIndex(index);
        }
    };

    const handleEdit = () => {
        // Add edit functionality here
        setShowPopup(false);
    };

    const handleDelete = () => {
        // Show confirm delete popup
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


    return (
        <main className="max-w-4xl mx-auto">
            {/* card */}
            <div className="bg-white w-full py-3 px-5 shadow-md rounded-xl min-h-[100px] border">
                {/* title */}
                <h1 className="text-gray-800 text-xl font-semibold mb-5">Feedback</h1>

                {/* feedback map data */}
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

                                {/* icon click to popup delete or edit */}
                                <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 flex-1 relative">
                                    <div className="text-gray-800 flex justify-end pr-0 md:mr-[-10px]">
                                        <MoreVertIcon onClick={() => handleIconClick(index)} />
                                    </div>

                                    {showPopup && currentPopupIndex === index && (
                                        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                            <ul>
                                                <li
                                                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm cursor-pointer flex pl-2"
                                                    onClick={handleEdit}
                                                >
                                                    <Image src={editIcon} width={18} height={18} alt='edit icon' />
                                                    Edit
                                                </li>
                                                <li
                                                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm cursor-pointer flex pl-2"
                                                    onClick={handleDelete}
                                                >
                                                    <Image src={deleteIcon} width={18} height={18} alt='delete icon' /> 
                                                    Delete
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                    <div className="font-medium text-gray-800 mr-7 top-0 mt-[-20px] md:text-sm lg:text-lg">{feedback.name}</div>
                                    <div className="text-gray-600 text-xs md:text-[11px] lg:text-sm">{feedback.position}</div>
                                    <div className="mt-3.5 text-gray-700 text-[12.8px] md:mt-[10px] ml-[-66px] mr-0 line-clamp-2 lg:mt-5 lg:text-sm">{feedback.comment}</div>
                                    <div className="text-gray-500 sm:text-xs md:text-sm lg:text-[15px] mt-2 ml-[-66px]">{feedback.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* form to comment feedback */}
                <form className="sticky bottom-0 bg-white w-full">
                    <div className="py-1">
                        <div className="relative text-gray-800">
                            <input
                                type="text"
                                id="new-comment"
                                className="w-full bg-gray-50 text-gray-800 text-sm px-10 pl-2 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                                placeholder="Enter your feedback here..."
                            />

                            <span className="absolute inset-y-0 flex items-center right-3 text-gray-500">
                                <Image src={send} width={20} height={20} alt="send icon" />
                            </span>
                        </div>
                    </div>
                </form>
            </div>

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
