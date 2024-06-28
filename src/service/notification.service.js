"use server"
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllNotificationService = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/notification/get-all-notification`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};
