"use client";
import { useEffect, useState } from "react";

const Toast = ({ message, type, show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300); // Additional delay for fade-out effect
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) return null;

  const getBackgroundColor = (type) => {
    switch (type) {
      case "error":
        return "bg-red-500 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "warning":
        return "bg-yellow-500 text-black";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`toast fixed top-10 right-4 m-4 z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`alert ${getBackgroundColor(type)} p-4 rounded-lg shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="text-white btn btn-sm btn-circle btn-ghost"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
