import React from "react";
import ViewMember from "@/components/ViewMember";
import ViewMemberProjectLeader from "@/components/ViewMemberForProjectLeader";

const MemberImage = ({
  project,
  currentUserRole,
  isViewMemberOpen,
  viewMemberRole,
  modalRef,
  handleModalClose,
  setViewMemberRole,
  setIsViewMemberOpen,
}) => {
  const memberImages = project.members.slice(0, 4);
  const remainingCount = project.members.length - 4;

  const handleImageClick = (role) => {
    setViewMemberRole(role);
    setIsViewMemberOpen(true);
  };

  return (
    <div className="flex -space-x-2 -mt-2">
      {memberImages.map((member) => (
        <img
          key={member.userId}
          src={member.image ? member.image : "../../Images/user-profile.png"}
          alt={member.fullName}
          width={28}
          height={26}
          className="w-7 h-7 rounded-full border-2 border-white cursor-pointer"
          onClick={() => handleImageClick(currentUserRole)}
        />
      ))}
      {remainingCount > 0 && (
        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
          +{remainingCount}
        </div>
      )}

      {isViewMemberOpen && viewMemberRole === "Project Leader" && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div ref={modalRef} className="p-4 rounded-lg">
            <ViewMemberProjectLeader
              project={project}
              onClose={handleModalClose}
            />
          </div>
        </div>
      )}

      {isViewMemberOpen &&
        (viewMemberRole === "Translator" || viewMemberRole === "Developer") && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalRef} className="p-4 rounded-lg">
              <ViewMember project={project} onClose={handleModalClose} />
            </div>
          </div>
        )}
    </div>
  );
};

export default MemberImage;
