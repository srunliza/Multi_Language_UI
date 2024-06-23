import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllLanguageService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/language/get-all-languages`, {
    headers: header,
  });
  const data = await res.json();
  return data;
};
