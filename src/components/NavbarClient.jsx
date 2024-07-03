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
import { isReadAction } from "@/action/notification-action";

const NotificationItem = ({ notification, onClick }) => (
  <div
    className={`flex gap-3 py-2 px-3 items-start cursor-pointer ${
      !notification.isRead ? "bg-blue-100" : "hover:bg-gray-100"
    }`}
    onClick={() => onClick(notification)}
  >
    <div>
      <img
        className="h-[3rem] w-[3rem] mr-10 rounded-full object-cover"
        src={notification.sender.image}
        alt="Profile Image"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <div className="font-semibold text-blue-500">{notification.title}</div>
      <div className="text-sm overflow-hidden overflow-ellipsis line-clamp-2">
        {notification.description}
      </div>
    </div>
    <div className="flex flex-col items-end">
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

const NotificationDetailPopup = ({ notification, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{notification.title}</h2>
        <button onClick={onClose} className="text-gray-500">
          &times;
        </button>
      </div>
      <div>
        <img
          src={notification.sender.image}
          alt="Sender"
          className="rounded-full w-16 h-16 mb-4"
        />
        <p>{notification.description}</p>
        <p className="text-gray-500 text-sm mt-4">{notification.createDate}</p>
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
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [animateNotification, setAnimateNotification] = useState(false);
  const [animateSearch, setAnimateSearch] = useState(false);
  const notificationRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjectService();
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
        setNotifications(response.payload);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowUnread = () => {
    setShowAll(false);
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setPopupVisible(true);
    markNotificationAsRead(notification.notificationId);
  };

  const closePopup = () => {
    setPopupContent(null);
    setPopupVisible(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = projects?.filter((project) =>
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

  const markNotificationAsRead = async (notificationId) => {
    try {
      await isReadAction(notificationId);
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.notificationId === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const filteredNotifications = notifications?.filter(
    (notification) => showAll || !notification.isRead
  );

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
            {searchResults?.length > 0 && (
              <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10 max-h-80 overflow-hidden overflow-x-auto ">
                {searchResults?.map((project) => (
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

        <div className="flex gap-4 items-center">
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

              <PopoverContent className="items-start px-1 py-2 border rounded-md w-[35rem] h-[30rem] bg-white z-20">
                <div className="flex justify-between items-center px-3 py-2 border-b">
                  <div className="text-xl font-bold">Notifications</div>
                  <div className="flex gap-4">
                    <button className="ml-10 text-tiny" onClick={handleShowAll}>
                      All
                    </button>
                    <button className="text-tiny" onClick={handleShowUnread}>
                      Unread
                    </button>
                  </div>
                </div>
                <div className="no-scrollbar overflow-y-auto h-[calc(100%-4rem)] px-3 py-2">
                  {filteredNotifications?.length > 0 ? (
                    filteredNotifications?.map((notification, index) => (
                      <NotificationItem
                        key={index}
                        notification={notification}
                        onClick={handleNotificationClick}
                      />
                    ))
                  ) : (
                    <div className="text-center text-gray-800 py-10 px-5">
                      No notifications available.
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
            <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>
          <PopUpProfileComponent />
        </div>
      </nav>

      {/* {popupVisible && selectedNotification && (
        <NotificationDetailPopup
          notification={selectedNotification}
          onClose={closePopup}
        />
      )} */}
    </>
  );
};

export default NavbarClient;
