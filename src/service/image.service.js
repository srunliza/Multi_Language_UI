"use server";
import { headerTokenFormData } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const postImageService = async (imageFile) => {
  const header = await headerTokenFormData();
  const formData = imageFile;
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  const res = await fetch(`${baseUrl}/api/v1/image/upload-image-profile`, {
    method: "POST",
    headers: {
      ...header,
    },
    body: formData,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  return data;
};
