"use client";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
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

const projects = [
  { name: "Spring translate", icon: "/path/to/icon1.png" },
  { name: "Web Application", icon: "/path/to/icon2.png" },
  { name: "Next js translation", icon: "/path/to/icon3.png" },
  { name: "Java translation", icon: "/path/to/icon4.png" },
  { name: "UX/UI", icon: "/path/to/icon5.png" },
  { name: "Java Script", icon: "/path/to/icon6.png" },
  { name: "Database Design", icon: "/path/to/icon7.png" },
];

const NotificationItem = ({ notification, onClick }) => (
  <div
    className={`flex gap-1 h-auto py-2 items-center cursor-pointer ${notification.unread ? "bg-blue-100" : "hover:bg-gray-100"
      }`}
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = projects.filter(project =>
        project.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
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
          <div className="relative w-full max-w-[20rem]">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search project"
              className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-500" />
            {searchResults.length > 0 && (
              <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10">
                {searchResults.map((project, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                    <img src={project.icon} alt={project.name} className="w-5 h-5 mr-2" />
                    <span>{project.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <div className="relative">
            <Popover placement="bottom" offset={20} showArrow>
              <PopoverTrigger>
                <button className="transition-transform duration-200 ease-in-out transform hover:scale-110 focus:outline-none">
                  <NotificationsOutlinedIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent className="items-start static px-1 py-2 border rounded-md w-[20rem] md:w-[35rem] bg-white">
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
                className="h-8 w-8 rounded-full mb-4 cursor-pointer"
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
