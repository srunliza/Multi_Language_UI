import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req, secret });

  // Define the paths that should be protected
  const protectedPaths = [
    "/employee/dashboard",
    "/employee/profile",
    "/employee/calendar",
    "/employee/project-card",
    "/employee/project-list",
    "/employee/setting",
    "/employee/change-password",
    "/translator/calendar",
    "/translator/dashboard",
    "/translator/dashboard/workspace",
    "/project-leader/calendar",
    "/project-leader/dashboard",
    "/project-leader/dashboard/add-key-value",
    "/project-leader/dashboard/preview-json-file",
    "/project-leader/dashboard/preview-xml-file",
    "/project-leader/dashboard/preview-string-file",
    "/project-leader/dashboard/preview-page",
    "/project-leader/dashboard/upload-file",
    "/project-leader/dashboard/view-attachment",
    "/developer/calendar",
    "/developer/dashboard/",
    "/developer/dashboard/preview-json-file",
    "/developer/dashboard/preview-xml-file",
    "/developer/dashboard/preview-string-file",
    "/developer/dashboard/preview-page",
  ];

  // Check if the request is for a protected path
  const isProtectedPath = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath) {
    // If the user is not authenticated, redirect to the login page
    if (!token) {
      const url = new URL("/login", req.url);
      url.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(url);
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/employee/dashboard",
    "/employee/profile",
    "/employee/calendar",
    "/employee/project-card",
    "/employee/project-list",
    "/employee/setting",
    "/employee/change-password",
    "/translator/calendar",
    "/translator/dashboard",
    "/translator/dashboard/workspace",
    "/project-leader/calendar",
    "/project-leader/dashboard",
    "/project-leader/dashboard/add-key-value",
    "/project-leader/dashboard/preview-json-file",
    "/project-leader/dashboard/preview-xml-file",
    "/project-leader/dashboard/preview-string-file",
    "/project-leader/dashboard/preview-page",
    "/project-leader/dashboard/upload-file",
    "/project-leader/dashboard/view-attachment",
    "/developer/calendar",
    "/developer/dashboard/",
    "/developer/dashboard/preview-json-file",
    "/developer/dashboard/preview-xml-file",
    "/developer/dashboard/preview-string-file",
    "/developer/dashboard/preview-page",
  ],
};
