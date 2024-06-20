"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllProjectService = async (sortOrder = "asc") => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-all-project?size=100&page=1&sortOrder=${sortOrder}`,
    {
      headers: header,
      next: { tags: ["project"] },
    }
  );
  const data = await res.json();
  return data;
};

export const getAllProjectWithStatusService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/project/get-total-project`, {
    headers: header,
    next: { tags: ["project"] },
  });
  const data = await res.json();
  return data;
};

export const getAllMemberService = async (id) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/project/member-detail/${id}`, {
    headers: header,
    next: { tags: ["project"] },
  });
  const data = await res.json();
  return data;
};

export const createProjectService = async (projectDetails) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/project/create-new-project`, {
    method: "POST",
    headers: header,
    body: JSON.stringify(projectDetails),
  });
  const data = await res.json();
  return data;
};

export const deleteProjectService = async (id) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/project/delete-project/${id}`, {
    method: "DELETE",
    headers: header,
  });
  const result = await res.json();
  return result;
};

export const updateProjectService = async (projectId, updatedProjectName) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/update-project-name/${projectId}`,
    {
      method: "PUT",
      headers: header,
      body: JSON.stringify(updatedProjectName),
    }
  );
  const result = await res.json();
  return result;
};

export const updateUserRoleService = async (projectId, userId, roleId) => {
  
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/update-role-member?projectId=${projectId}&userId=${userId}`,
    {
      method: "PUT",
      headers: header,
      body: JSON.stringify({ roleId }),
    }
  );
  const result = await res.json();
  console.log(result)
  return result;
};

export const removeMemberService = async (projectId, userId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/remove-member/${userId}?projectId=${projectId}`,
    {
      method: "DELETE",
      headers: header,
    }
  );
  const result = await res.json();
  return result;
};

export const addMemberService = async (member) => {
  console.log("In service ..........", member);
  
  const header = await headerToken();
  console.log("Header:", header);
  
  const res = await fetch(`${baseUrl}/api/v1/project/add-member`, {
    method: "POST",
    headers: header,
    body: JSON.stringify(member),
  });
  
  console.log("Fetch response:", res);
  
  const data = await res.json();
  console.log("Response data:", data);
  
  return data;
};
