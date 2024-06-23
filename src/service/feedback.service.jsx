"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getFeedbackByAttachmentIdService = async (id) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/feedback/get-all-feedback/${id}`, {
    headers: header,
    next: { tags: ["feedback"] },
  });
  const data = await res.json();
  return data;
};
