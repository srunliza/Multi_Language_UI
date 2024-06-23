"use server";
import { deleteAttachmentService } from "@/service/attachment.service";
import { revalidateTag } from "next/cache";

export const deleteAttachmentAction = async (id) => {
  const result = await deleteAttachmentService(id);
  revalidateTag("attachment");
  return result;
};
