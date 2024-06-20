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

export const editUserRoleAction = async (formData) => {
  const projectId = formData.get("projectId");
  const userId = formData.get("userId");
  const roleId = formData.get("roleId");
  await updateUserRoleService(projectId, userId, roleId);
  revalidateTag("project");
  return { success: true };
};

export const removeMemberAction = async (projectId, userId) => {
  const result = await removeMemberService(projectId, userId);
  revalidateTag("project");
  return result;
};

export const addMemberAction = async (formData) => {
  console.log("In action ............", formData);

  const projectId = formData.get("projectId");
  console.log("Project ID:", projectId);

  const userIds = JSON.parse(formData.get("userIds"));
  console.log("User IDs:", userIds);

  const roleId = formData.get("roleId");
  console.log("Role ID:", roleId);

  const member = {
    projectId: projectId,
    userId: userIds,
    roleId: roleId,
  };

  console.log("Member object:", member);

  await addMemberService(member);
  revalidateTag("project");
};
