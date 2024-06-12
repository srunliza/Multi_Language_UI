"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

const header = await headerToken();

export const getAllProjectService = async () => {
  console.log("Header in service: ",header)
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-all-current-user-project?size=5&page=1`,
    {
      headers: header,
    }
  );

  const data = await res.json();
  console.log("Base URL: ", baseUrl);
  return data;
};

export const createProjectService = async (projectDetails) => {
  console.log("Header: ", header);
  console.log("Project detail in service: ", projectDetails);
  const res = await fetch(`${baseUrl}/api/v1/project/create-new-project`, {
    method: "POST",
    body: JSON.stringify(projectDetails),
    headers: header,
  });
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
};
