"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllUserProfileService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/user/get-user-profile`, {
    headers: header,
  });

  const data = await res.json();
  return data;
};
