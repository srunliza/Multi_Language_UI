import React from "react";
import Image from "next/image";
import ViewMemberProjectLeader from "./ViewMemberForProjectLeader";
import ViewMember from "./ViewMember";

const MemberImages = ({
  project,
  handleSeeAll,
  isViewMemberOpen,
  viewMemberRole,
  modalRef,
  handleModalClose,
}) => {
  return (
    <div className="flex -space-x-2 -mt-2">
      {[...Array(4)].map((_, idx) => (
        <Image
          key={idx}
          src={`/assets/images/${project.image}`}
          alt={project.name}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      ))}
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
        +2
      </div>
      <button
        onClick={() => handleSeeAll(project.members[0].role)}
        className="text-gray-600 text-right ml-auto self-end grow"
      >
        See All
      </button>

      {isViewMemberOpen && viewMemberRole === "Project Leader" && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div ref={modalRef} className="p-4 rounded-lg">
            <ViewMemberProjectLeader onClose={handleModalClose} />
          </div>
        </div>
      )}

      {isViewMemberOpen &&
        (viewMemberRole === "Translator" || viewMemberRole === "Developer") && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalRef} className="p-4 rounded-lg">
              <ViewMember onClose={handleModalClose} />
            </div>
          </div>
        )}
    </div>
  );
};

export default MemberImages;
