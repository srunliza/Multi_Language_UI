import { resetPasswordService } from "@/service/user.service";

export const resetPasswordAction = async (updatedPassword) => {
  await resetPasswordService(updatedPassword);
  return { success: true };
};
