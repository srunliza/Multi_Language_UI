"use server";
import { headerTokenFormData } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const postImageService = async (imageFile) => {
  console.log("In service ...........", imageFile);
  const header = await headerTokenFormData();
  const formData = new FormData();
  formData.append("file", imageFile);
  console.log(formData);
  console.log(header);
  const res = await fetch(`${baseUrl}/api/v1/image/upload-image-profile`, {
    method: "POST",
    headers: header,
    body: formData,
  });
  const data = await res.json();
  console.log(data);
  return data;
};
