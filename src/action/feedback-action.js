"use server";
import {
  deleteFeedbackService,
  updateFeedbackService,
} from "@/service/feedback.service";
import { revalidateTag } from "next/cache";

export const removeFeedbackAction = async (feedbackId) => {
  const result = await deleteFeedbackService(feedbackId);
  revalidateTag("feedback");
  console.log(result);
  return result;
};

export const editFeedbackAction = async (formData) => {
  console.log(formData);
  const feedbackId = formData?.get("feedbackId");
  const updatedFeedback = { comment: formData?.get("comment") };
  const result = await updateFeedbackService(feedbackId, updatedFeedback);
  revalidateTag("feedback");
  console.log(result);
  return result;
};
