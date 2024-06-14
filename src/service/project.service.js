"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllProjectService = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-all-current-user-project?size=200&page=1`,
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
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-total-project-with-status`,
    {
      headers: header,
      next: { tags: ["project"] },
    }
  );
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
  console.log(id + "in service");
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/delete-project-by-Id/${id}`,
    {
      method: "DELETE",
      headers: header,
    }
  );

  const result = await res.json();
  return result;
};
