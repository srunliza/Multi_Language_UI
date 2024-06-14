import { getServerSession } from "next-auth";
import { authOption } from "./auth/[...nextauth]/route";

export const headerToken = async () => {
  const session = await getServerSession(authOption);
  console.log("Token:", session?.user);
  return {
    authorization: `Bearer ${session?.user?.token}`,
    "Content-Type": "application/json",
  };
};
