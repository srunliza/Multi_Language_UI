import React from 'react';
import AddMemberModal from './AddMemberModal';
import ViewMember from './ViewMember';
import NavbarProjectLeaderComponent from '@/app/project-leader/_components/NavbarProjectLeaderComponent';
import AttactmentComponent from './AttactmentComponent';

const ProjectLeaderAttachment = () => {
  return (
    <div className="ml-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-color-text-black ">Project Name</h2>
        <AddMemberModal />
      </div>
      <div className="flex flex-col lg:flex-row py-2">
        <div className="w-full lg:w-[900px] overflow-hidden border border-blue-300 rounded-t-lg">
          {/* Header */}
          <NavbarProjectLeaderComponent />
          {/* Text */}
          <AttactmentComponent />
        </div>
        <div className="mt-5 lg:mt-0 w-full lg:w-auto lg:flex-1">
          <ViewMember />
        </div>
      </div>
    </div>
  );
};

export default ProjectLeaderAttachment;
