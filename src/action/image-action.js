"use server";
import { postImageService } from "@/service/image.service";

export const postImageAction = async (imageFile) => {
  console.log("In action..........", imageFile);
  const result = await postImageService(imageFile);
  console.log(result);
  return result;
};
