"use server";
import {
  AddValueService,
  deleteAttachmentService,
  insertFileAttachmentService,
  submitService,
  updateAttachmentService,
  updateKeyService,
  uploadAttachmentManuallyService,
} from "@/service/attachment.service";
import { identity } from "@fullcalendar/core/internal";
import { revalidateTag } from "next/cache";

export const deleteAttachmentAction = async (id) => {
  const result = await deleteAttachmentService(id);
  revalidateTag("attachment");
  return result;
};

export const editAttachmentAction = async (formData) => {
  const attachmentId = formData.get("attachmentId");
  const languageId = formData.get("languageId");
  let expireDate = formData.get("expireDate");

  expireDate = `${expireDate}T02:40:49.832Z`;

  const newAttachment = {
    language: languageId,
    expireDate: expireDate,
  };

  const result = await updateAttachmentService(attachmentId, newAttachment);
  revalidateTag("attachment");
  return result;
};

export const saveValueAction = async (attachmentId, formDataArray) => {
  const values = {
    keyValueRequests: formDataArray,
  };
  console.log(values);
  const res = await AddValueService(attachmentId, values);
  revalidateTag("data");
  console.log(res);
  return res;
};

export const submitAction = async (id) => {
  const result = await submitService(id);
  revalidateTag("data");
  return result;
};

export const uploadAttachmentManuallyAction = async (req) => {
  const res = await uploadAttachmentManuallyService(req);
  revalidateTag("attachment");
  return res;
};

export async function handlerFileUploadAction(fileUploadData) {
  // Parse the keyAndHint JSON string
  const keyAndHint = JSON.parse(fileUploadData.get("keyAndHint") || "[]");

  // Extract keys and hints into separate arrays
  const keys = keyAndHint.map((el) => el.key);
  const hints = keyAndHint.map((el) => el.hint);

  // Define object structure
  const formData = new FormData();
  formData.append("baseLanguage", fileUploadData.get("baseLanguage"));
  formData.append("language", fileUploadData.getAll("language"));
  formData.append("project", fileUploadData.get("proId"));
  formData.append("file", fileUploadData.get("file"));
  formData.append("key", keys);
  formData.append("hint", hints);
  formData.append("startDate", `${fileUploadData.get("startDate")} 00:00:00`);
  formData.append("expireDate", `${fileUploadData.get("expireDate")} 00:00:00`);

  const response = await insertFileAttachmentService(formData);
  console.log("response from service: ", response)
  return response;
}

export const updateKeyAction = async (id, updateJsonKey) => {
  console.log("In action: ", updateJsonKey);
  const values = {
    updateJsonKey: updateJsonKey,
  };
  const res = await updateKeyService(id, values);
  revalidateTag("data");
  return res;
};
