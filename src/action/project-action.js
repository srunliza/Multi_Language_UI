"use server";
import {
  createProjectService,
  deleteProjectService,
  updateProjectService,
} from "@/service/project.service";
import { revalidateTag } from "next/cache";

export const createProjectAction = async (formData) => {
  const project = {
    projectName: formData?.get("projectName"),
  };
  await createProjectService(project);
  revalidateTag("project");
  return { success: true };
};

export const deleteProjectAction = async (id) => {
  await deleteProjectService(id);
  revalidateTag("project");
  return { success: true };
};

export const editProjectAction = async (formData) => {
  const projectId = formData?.get("projectId");
  const updatedProjectName = { projectName: formData?.get("projectName") };
  await updateProjectService(projectId, updatedProjectName);
  revalidateTag("project");
  return { success: true };
};
