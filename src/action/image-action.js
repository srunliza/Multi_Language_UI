"use server";
import { postImageService } from "@/service/image.service";
import { revalidateTag } from "next/cache";

export const postImageAction = async (imageFile) => {
  const result = await postImageService(imageFile);
  revalidateTag("user");
  return result;
};
