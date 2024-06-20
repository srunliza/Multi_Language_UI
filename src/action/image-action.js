"use server";
import { postImageService } from "@/service/image.service";

export const postImageAction = async (imageFile) => {
    await postImageService(imageFile);
    return { success: true};
};
