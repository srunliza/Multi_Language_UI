import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

export const getAllProjectServices = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/v1/project/get-all-current-user-project?size=5&page=1`,
    {
      headers: header,
    }
  );

  const data = await res.json();
  return data;
};
