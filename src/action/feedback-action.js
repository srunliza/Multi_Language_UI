"use server";
import {
  createFeedbackService,
  deleteFeedbackService,
  updateFeedbackService,
} from "@/service/feedback.service";
import { revalidateTag } from "next/cache";

export const removeFeedbackAction = async (feedbackId) => {
  const result = await deleteFeedbackService(feedbackId);
  revalidateTag("feedback");
  return result;
};

export const editFeedbackAction = async (formData) => {
  const feedbackId = formData?.get("feedbackId");
  const updatedFeedback = { comment: formData?.get("comment") };
  const result = await updateFeedbackService(feedbackId, updatedFeedback);
  revalidateTag("feedback");
  return result;
};

export const postFeedbackAction = async (formData) => {
  const attachmentId = formData?.get("attachmentId");
  const comment = { comment: formData?.get("comment") };
  const result = await createFeedbackService(attachmentId, comment);
  revalidateTag("feedback");
  return result;
};
