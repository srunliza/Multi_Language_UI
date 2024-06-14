export { default } from "next-auth/middleware";

//Define the route that you wish to protect
export const config = {
  matcher: ["/employee"]
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
