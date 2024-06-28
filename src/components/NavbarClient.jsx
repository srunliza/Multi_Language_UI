import React, { useState, useEffect, useRef } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./style/styles.css";
import PopUpProfileComponent from "./PopUpProfileComponent";
import Link from "next/link";
import { getAllProjectService } from "@/service/project.service";
import { getAllNotificationService } from "@/service/notification.service";

const NotificationItem = ({ notification, onClick }) => (
  <div
    className={`flex gap-1 h-auto py-2 px-3 items-center cursor-pointer ${
      !notification.isRead ? "bg-blue-100" : "hover:bg-gray-100"
    }`}
    onClick={() => onClick(notification)}
  >
    <div>
      <img
        className="inline-block h-[60px] w-[60px] rounded-full mr-1"
        src={notification.sender.image}
        alt="Profile Image"
      />
    </div>
    <div className="flex flex-col ">
      <div className="font-semibold text-blue-500">{notification.title}</div>
      <div className="text-sm overflow-hidden overflow-ellipsis line-clamp-2">
        {notification.description}
      </div>
    </div>
    <div className="">
      <div className="text-sm">{notification.createDate}</div>
      <div className="w-4 h-4">
        {!notification.isRead ? null : (
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/double-tick.png"
            alt="double-tick"
          />
        )}
      </div>
    </div>
  </div>
);

const NavbarClient = ({ toggleSidebar }) => {
  const [showAll, setShowAll] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [animateNotification, setAnimateNotification] = useState(false);
  const [animateSearch, setAnimateSearch] = useState(false);
  const notificationRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjectService();
        console.log(response);
        setProjects(response.payload);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getAllNotificationService();
        console.log("Notifications", response);
        setNotifications(response.payload);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setPopupVisible(false);
      }
    };

    const handleScroll = () => {
      setPopupVisible(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowUnread = () => {
    setShowAll(false);
  };

  const handleNotificationClick = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = projects.filter((project) =>
        project.projectName.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleNotificationIconClick = () => {
    setAnimateNotification(true);
    setTimeout(() => setAnimateNotification(false), 300);
    setPopupVisible(!popupVisible);
  };

  const handleSearchBarClick = () => {
    setAnimateSearch(true);
    setTimeout(() => setAnimateSearch(false), 500);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 shadow-sm h-16 flex px-10 justify-between items-center z-50">
        <div className="flex items-center w-1/2">
          <button
            onClick={toggleSidebar}
            className="md:hidden mr-4 focus:outline-none"
          >
            <MenuIcon className="text-black" />
          </button>
          <div className="relative w-[25rem]">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search project"
              className={`border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600`}
              onClick={handleSearchBarClick}
            />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-500" />
            {searchResults.length > 0 && (
              <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10 max-h-80 overflow-hidden overflow-x-auto ">
                {searchResults.map((project) => (
                  <Link
                    href={`/project-leader/dashboard/${project.projectId}`}
                    key={project.projectId}
                  >
                    <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                      <span>{project.projectName}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <div className="relative" ref={notificationRef}>
            <Popover placement="bottom" offset={20} showArrow>
              <PopoverTrigger>
                <button
                  className={`transition-transform duration-200 ease-in-out transform focus:outline-none ${
                    animateNotification ? "animate-scale-up" : ""
                  }`}
                  onClick={handleNotificationIconClick}
                >
                  <NotificationsOutlinedIcon />
                </button>
              </PopoverTrigger>

              <PopoverContent className="items-start px-1 py-2 border rounded-md w-[30rem] h-[30rem] bg-white z-20">
                <div className="text-xl font-bold pt-2 px-3">Notifications</div>
                <div className="flex gap-4 px-3 py-2">
                  <button className="text-tiny" onClick={handleShowAll}>
                    All
                  </button>
                  <button className="text-tiny" onClick={handleShowUnread}>
                    Unread
                  </button>
                </div>
                <div className="no-scrollbar overflow-y-auto">
                  {notifications
                    .filter((notification) => showAll || !notification.isRead)
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
          <PopUpProfileComponent />
        </div>
      </nav>
    </>
  );
};

export default NavbarClient;
