import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log("in middleware", token);
  // Get the URL of the request
  const url = req.nextUrl.clone();

  // Define the protected paths
  const protectedPaths = [
    "/employee/dashboard",
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

  // Check if the request URL matches any protected path
  const isProtectedPath = protectedPaths.some((path) =>
    url.pathname.startsWith(path)
  );

  // If the user is not authenticated and tries to access a protected path, redirect to /login
  if (isProtectedPath && !token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if it is not a protected path or the user is authenticated
  return NextResponse.next();
}

// Define the paths that should be matched by the middleware
export const config = {
  matcher: [
    "/employee/dashboard",
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
