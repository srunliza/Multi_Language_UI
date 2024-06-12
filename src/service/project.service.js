"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

const header = await headerToken();

export const getAllProjectService = async () => {
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-all-current-user-project?size=50&page=1`,
    {
      headers: header,
    }
  );

  const data = await res.json();
  return data;
};

export const createProjectService = async (projectDetails) => {
  const res = await fetch(`${baseUrl}/api/v1/project/create-new-project`, {
    method: "POST",
    body: JSON.stringify(projectDetails),
    headers: header,
  });
  const data = await res.json();
  return data;
};
