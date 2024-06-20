"use server";
import {
  resetPasswordService,
  updateUserDetailService,
} from "@/service/user.service";
import { revalidateTag } from "next/cache";

export const resetPasswordAction = async (updatedPassword) => {
  const result = await resetPasswordService(updatedPassword);
  return result;
};

export const updateUserDetailAction = async (updatedUserDetail) => {
  const result = await updateUserDetailService(updatedUserDetail);
  revalidateTag("user");
  return result;
};
