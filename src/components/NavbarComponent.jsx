"use client";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const notifications = [
  {
    imgSrc: "/Images/Thean.png", 
    title: "UXUI",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: true,
  },
  {
    imgSrc: "/Images/Thean.png", 
    title: "Java",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: false,
  },
  {
    imgSrc: "/Images/Thean.png", 
    title: "UXUI",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: true,
  },
  {
    imgSrc: "/Images/Thean.png",
    title: "NextJS",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: false,
  },
  {
    imgSrc: "/Images/Thean.png",
    title: "UXUI",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: true,
  },
  {
    imgSrc: "/Images/Thean.png",
    title: "NextJS",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: false,
  },
  {
    imgSrc: "/Images/Thean.png",
    title: "HTML",
    description: "add you to Project's name UXUI as Developer ",
    date: "02/05/2022",
    unread: true,
  },
];

const NotificationItem = ({ notification, onClick }) => (
  <div
    className={`flex gap-1 h-auto py-2 items-center cursor-pointer ${notification.unread ? "bg-blue-100" : "hover:bg-gray-100"}`}
    onClick={() => onClick(notification)}
  >
    <div>
      <img
        className="inline-block h-[60px] w-[60px] rounded-full mr-1"
        src={notification.imgSrc}
        alt="Profile Image"
      />
    </div>
    <div className="flex flex-col w-[400px]">
      <div className="font-semibold">UX UI</div>
      <div className="text-sm">{notification.description}</div>
    </div>
    <div className="flex flex-col items-center">
      <div className="text-sm">{notification.date}</div>
      <div className="w-4 h-4">
        {notification.unread ? null : (
          <img width="50" height="50" src="https://img.icons8.com/ios/50/double-tick.png" alt="double-tick" />
        )}
      </div>
    </div>
  </div>
);

const NavbarComponent = ({ toggleSidebar }) => {
  const [showAll, setShowAll] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowUnread = () => {
    setShowAll(false);
  };

  const handleNotificationClick = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 shadow-md h-16 flex px-3 justify-between items-center border z-50">
        <div className="flex items-center w-1/2">
          <button
            onClick={toggleSidebar}
            className="md:hidden mr-4 focus:outline-none"
          >
            <MenuIcon className="text-black" />
          </button>
          <div className="relative w-[17rem]">
            <input
              type="text"
              placeholder="Search project"
              className="border border-gray-300 rounded-lg py-2 pl-5 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="relative">
            <Popover placement="bottom" offset={20} showArrow>
              <PopoverTrigger>
                <button>
                  <NotificationsOutlinedIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent className="items-start static px-1 py-2 border rounded-md  w-[35rem]  bg-white">
                <div className="text-xl items-start font-bold pt-2 px-3">Notifications</div>
                <div className="flex gap-4 px-3 py-2">
                  <button className="text-tiny" onClick={handleShowAll}>
                    All
                  </button>
                  <button className="text-tiny" onClick={handleShowUnread}>
                    Unread
                  </button>
                </div>
                <div className="max-h-[300px] no-scrollbar overflow-y-auto">
                  {notifications
                    .filter(notification => showAll || notification.unread)
                    .map((notification, index) => (
                      <NotificationItem
                        key={index}
                        notification={notification}
                        onClick={handleNotificationClick}
                      />
                    ))}
                </div>
              </PopoverContent>
            </Popover>
            <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>

          <div className="flex items-center">
            <img
              className="inline-block h-[38px] w-[38px] rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz-0gZGjxoAp2wa6pbtGIR_9nsVwQZMHbOQ&s"
              alt="Profile Image"
            />
          </div>
        </div>
      </nav>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-[500px]">
            <div className="flex justify-between pb-5">
              <div className="flex items-center gap-2">
                <div>
                  <img
                    className="h-full w-[60px] rounded-full"
                    src={popupContent.imgSrc}
                    alt="Profile Image"
                  />
                </div>
                <div>
                  <div className="font-semibold">Tep Thean</div>
                  <div>Project Leader</div>
                </div>
              </div>
              <img
                onClick={closePopup}
                className="h-4 w-4 rounded-full mb-4 cursor-pointer"
                src="/assets/icons/cancel.png"
                alt="Cancel"
              />
            </div>
            <div className="text-xl">UX UI</div>
            <div className="text-sm mb-4">
              {popupContent.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
