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

export const previewXMLService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/get-attachment/XML/${id}`,
    {
      headers: header,
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

export const updateAttachmentService = async (attachmentId, newAttachment) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/update-attachment/${attachmentId}`,
    {
      method: "PUT",
      headers: {
        ...header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttachment),
    }
  );
  const result = await res.json();
  return result;
};

// export const uploadAttachmentManuallyService = async (req) => {
//   const header = await headerToken();
//   const res = await fetch(
//     `${baseUrl}/api/v1/attachment/upload-attachment-manual`,
//     {
//       method: "POST",
//       headers: header,
//       body: JSON.stringify(req),
//     }
//   )
//     .then((r) => r.json())
//     .catch((e) => console.log(e));
//   return res;
// };
