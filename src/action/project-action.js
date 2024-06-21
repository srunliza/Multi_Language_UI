"use server";
import {
  addMemberService,
  createProjectService,
  deleteProjectService,
  removeMemberService,
  updateProjectService,
  updateUserRoleService,
} from "@/service/project.service";
import { revalidateTag } from "next/cache";

export const createProjectAction = async (formData) => {
  const project = {
    projectName: formData?.get("projectName"),
  };
  const result = await createProjectService(project);
  revalidateTag("project");
  return result;
};

export const deleteProjectAction = async (id) => {
  const result = await deleteProjectService(id);
  revalidateTag("project");
  return result;
};

export const editProjectAction = async (formData) => {
  const projectId = formData?.get("projectId");
  const updatedProjectName = { projectName: formData?.get("projectName") };
  const result = await updateProjectService(projectId, updatedProjectName);
  revalidateTag("project");
  return result;
};

export const editUserRoleAction = async (formData) => {
  const projectId = formData.get("projectId");
  const userId = formData.get("userId");
  const roleId = formData.get("roleId");
  const result = await updateUserRoleService(projectId, userId, roleId);
  revalidateTag("project");
  return result;
};

export const removeMemberAction = async (projectId, userId) => {
  const result = await removeMemberService(projectId, userId);
  revalidateTag("project");
  return result;
};

export const addMemberAction = async (formData) => {
  const projectId = formData.get("projectId");
  const userIds = JSON.parse(formData.get("userIds"));
  const roleId = formData.get("roleId");
  const member = {
    projectId: projectId,
    userId: userIds,
    roleId: roleId,
  };
  const result = await addMemberService(member);
  revalidateTag("user");
  return result;
};
