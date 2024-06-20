"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const postImageService = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);

  const res = await fetch(`${baseUrl}/api/v1/image/upload-image-profile`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data;
};
