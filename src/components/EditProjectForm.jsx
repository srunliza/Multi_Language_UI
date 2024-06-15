import { editProjectAction } from "@/action/project-action";
import React from "react";

const EditProjectForm = ({ project, onClose, onSubmit }) => {
  return (
    <form action={editProjectAction}>
      <input type="hidden" name="projectId" value={project.projectId} />
      <div className="mb-4">
        <label htmlFor="projectName" className="block text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          name="projectName"
          defaultValue={project.projectName}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-outline btn-blue-800 mr-2"
        >
          No
        </button>
        <button
          type="submit"
          className="btn bg-blue-800 hover:bg-blue-700 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProjectForm;
