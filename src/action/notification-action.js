"use server";
import { isReadService } from "@/service/notification.service";
import { revalidateTag } from "next/cache";

export const isReadAction = async (notificationId) => {
    console.log(notificationId)
  const result = await isReadService(notificationId);
  revalidateTag("notification");
  return result;
};
