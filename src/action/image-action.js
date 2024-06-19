"use server";
import { postImageService } from "@/service/image.service";

export const postImageAction = async (imageFile) => {
  try {
    const data = await postImageService(imageFile);
    return { success: true, payload: data };
  } catch (error) {
    console.error("Error posting image:", error);
    return { success: false, error: error.message };
  }
};
