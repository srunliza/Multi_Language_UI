"use server";
import {
  AddValueService,
  deleteAttachmentService,
  submitService,
  updateAttachmentService,
  uploadAttachmentManuallyService,
} from "@/service/attachment.service";
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
  const res = await AddValueService(attachmentId, formDataArray);
  revalidateTag("data");
  return res;
};

export const submitAction = async (id) => {
  const result = await submitService(id);
  revalidateTag("data");
  return result;
};

export const uploadAttachmentManuallyAction = async (req) => {
  const res = await uploadAttachmentManuallyService(req);
  console.log("data req: ", req);
  console.log("response in action: ", res);
  return res;
};
