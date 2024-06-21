import React, { useRef } from "react";
import ViewMember from "@/components/ViewMember";

const ViewMemberModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-5 flex items-center justify-center z-50">
      <div ref={modalRef}>
        <ViewMember onClose={onClose} />
      </div>
    </div>
  );
};

export default ViewMemberModal;
