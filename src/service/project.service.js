"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllProjectService = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-all-project?size=100&page=1`,
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

export const createProjectService = async (projectDetails) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/project/create-new-project`, {
    method: "POST",
    body: JSON.stringify(projectDetails),
    headers: header,
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
