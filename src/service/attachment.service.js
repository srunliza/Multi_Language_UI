"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAttachmentByProjectIdService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/get-attachment-in-projectId/${id}?page=1&size=200`,
    {
      headers: header,
      next: { tags: ["attachment"] },
    }
  );
  const data = await res.json();
  return data;
};

export const deleteAttachmentService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/delete-attachment/${id}`,
    {
      method: "DELETE",
      headers: header,
    }
  );
  const result = await res.json();
  return result;
};

export const updateAttachmentService = async (
  projectId,
  updatedProjectName
) => {
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
