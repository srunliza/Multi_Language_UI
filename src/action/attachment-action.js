"use server";
import {
  deleteAttachmentService,
  updateAttachmentService,
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
