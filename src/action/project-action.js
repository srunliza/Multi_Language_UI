"use server";
import {
  createProjectService,
  deleteProjectService,
} from "@/service/project.service";
import { revalidateTag } from "next/cache";

export const createProjectAction = async (formData) => {
  const project = {
    projectName: formData?.get("projectName"),
  };
  await createProjectService(project);
  revalidateTag("projects");
  return { success: true };
};

export const deleteProjectAction = async (id) => {
  const project = await deleteProjectService(id);
  revalidateTag("projects");
  return { success: true };
};
