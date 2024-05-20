import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow w-[360px] h-[317px]">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">{project.name}</div>
        <div className="text-gray-500 text-sm">{project.timeLeft}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600">Translation Progress</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {project.members.map((member, index) => (
            <img key={index} className="w-8 h-8 rounded-full border-2 border-white" src={member.image} alt={member.name} />
          ))}
          {project.members.length > 4 && <span className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center">+{project.members.length - 4}</span>}
        </div>
        <button className="text-blue-500 text-sm">See All</button>
      </div>
    </div>
  );
};

export default ProjectCard;
