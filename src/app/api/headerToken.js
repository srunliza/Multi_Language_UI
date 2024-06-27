import { auth } from "@/auth";

export const headerToken = async () => {
  const session = await auth();

  return {
    authorization: `Bearer ${session?.user?.newToken}`,
    "Content-Type": "application/json",
  };
};

export const headerTokenFormData = async () => {
  const session = await auth();
  return {
    authorization: `Bearer ${session?.user?.newToken}`,
  };
};
