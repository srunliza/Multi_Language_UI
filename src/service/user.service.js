"use server";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllUserProfileService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/user/get-current-user-profile`, {
    headers: header,
  });

  const data = await res.json();
  return data;
};

export const getProfileImageService = async (name) => {
  console.log(name);
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/image/view-profile-image/${name}`,
    {
      headers: header,
    }
  );

  // Ensure the response is a blob for image data
  const blob = await res.blob();
  // Create a URL for the blob
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
};
