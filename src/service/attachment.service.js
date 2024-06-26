"use server";
import { headerToken, headerTokenFormData } from "@/app/api/headerToken";
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

export const getDataByAttachmentIdService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/get-attachment-by-id/${id}`,
    {
      headers: header,
      next: { tags: ["data"] },
    }
  );
  const data = await res.json();
  return data;
};

export const previewJsonService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/get-attachment/JSON/${id}`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

export const previewStringsService = async (id) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/get-attachment/strings/${id}`,
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
      },
      body: JSON.stringify(newAttachment),
    }
  );
  const result = await res.json();
  return result;
};

export const AddValueService = async (attachmentId, payload) => {
  console.log(payload);
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/update-data/${attachmentId}`,
    {
      method: "PUT",
      headers: {
        ...header,
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();
  console.log(data);
  return data;
};

export const submitService = async (attachmentId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/update-attachment-status-submit/${attachmentId}`,
    {
      method: "PUT",
      headers: {
        ...header,
      },
    }
  );

  const data = await res.json();
  return data;
};

export const uploadAttachmentManuallyService = async (req) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/upload-attachment-manual`,
    {
      method: "POST",
      headers: header,
      body: JSON.stringify(req),
    }
  )
    .then((r) => r.json())
    .catch((e) => console.log(e));
    console.log(res)
  return res;
};

export const insertFileAttachmentService = async (attachmentData) => {
  const header = await headerTokenFormData();
  const res = await fetch(
    `${baseUrl}/api/v1/attachment/upload-attachment-with-excel`,
    {
      method: "POST",
      body: attachmentData,
      headers: header,
    }
  );

  const data = await res.json();
  return data;
};
