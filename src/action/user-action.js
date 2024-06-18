import {
  resetPasswordService,
  updateUserDetailService,
} from "@/service/user.service";

export const resetPasswordAction = async (updatedPassword) => {
  await resetPasswordService(updatedPassword);
  return { success: true };
};

export const updateUserDetailAction = async (updatedUserDetail) => {
  await updateUserDetailService(updatedUserDetail);
  return { success: true };
};
