import { postImageService } from "@/service/image.service";

export const postImageAction = async (imageFile) => {
  const data = await postImageService(imageFile);
  console.log(imageFile);
  return { success: true, ...data };
};
