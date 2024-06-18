"use client";
import {useEffect } from "react";

const Toast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast toast-${type} fixed top-0 right-4 m-4 z-50`}>
      <div className={`alert alert-${type}`}>
        <div>
          <span>{message}</span>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
