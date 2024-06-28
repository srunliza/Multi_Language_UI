import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";

// Get all static keys from api
export const getAllStaticKeyService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/v1/static-key/get-all-key`, {
    headers: header,
  });
  const data = await res.json();
  console.log("response static key in service", data);
  return data;
};
