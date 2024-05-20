import React from "react";

const notifications = [
  {
    id: 1,
    projectName: "Project Name 001",
    userName: "MENG SOKLAY",
    description: "was translated 3 files on and downloaded “JSON...”",
    date: "5-May-2024",
    isUnread: true,
    userImage: "/images/user.jpg",
  },
];

const Notification = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="flex space-x-4">
            <button className="text-black font-medium border-b-2 border-black">
              Unread
            </button>
            <button className="text-gray-600 font-medium">All</button>
          </div>
        </div>
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="border-b px-6 py-4 flex items-center"
            >
              <img
                src={notification.userImage}
                alt={notification.userName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-medium">
                  {notification.projectName}
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">{notification.userName}</span>,{" "}
                  {notification.description}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-500 text-sm">
                  {notification.date}
                </span>
                {notification.isUnread && (
                  <span className="bg-blue-500 w-3 h-3 rounded-full mt-2"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
