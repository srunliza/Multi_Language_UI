"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getCurrentUserProfileService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/user/get-user-profile`, {
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const getAllUserService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/user/get-all-users`, {
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const resetPasswordService = async (updatedPassword) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/user/reset-password`, {
    method: "PUT",
    headers: header,
    body: JSON.stringify(updatedPassword),
  });
  const result = await res.json();
  return result;
};

export const updateUserDetailService = async (updatedUserDetail) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/user/update-user-profile`, {
    method: "PUT",
    headers: header,
    body: JSON.stringify(updatedUserDetail),
  });
  const result = await res.json();
  return result;
};
