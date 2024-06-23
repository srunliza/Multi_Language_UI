"use server"
import { deleteFeedbackService } from "@/service/feedback.service";
import { revalidateTag } from "next/cache";

export const removeFeedbackAction = async (feedbackId) => {
  const result = await deleteFeedbackService(feedbackId);
  revalidateTag("feedback");
  console.log(result)
  return result;
};

