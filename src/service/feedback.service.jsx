"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getFeedbackByAttachmentIdService = async (id) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/feedback/get-all-feedback/${id}`, {
    headers: header,
    next: { tags: ["feedback"] },
    cache: "no-store"
  });
  const data = await res.json();
  return data;
};

export const deleteFeedbackService = async (id) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/feedback/delete-comment/${id}`, {
    method: "DELETE",
    headers: header,
  });
  const result = await res.json();
  return result;
};

export const updateFeedbackService = async (feedbackId, updatedFeedback) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/feedback/edit-comment/${feedbackId}`,
    {
      method: "PUT",
      headers: header,
      body: JSON.stringify(updatedFeedback),
    }
  );
  const result = await res.json();
  return result;
};

export const createFeedbackService = async (attachmentId, comment) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/feedback/comment-feedback/${attachmentId}`, {
    method: "POST",
    headers: header,
    body: JSON.stringify(comment),
  });
  const data = await res.json();
  return data;
};