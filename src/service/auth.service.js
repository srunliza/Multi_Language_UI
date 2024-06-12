'use server'
import { baseUrl } from "@/utils/constants";

export const loginService = async (userInfo) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const registerService = async (userDetail) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/register`, {
    method: "POST",
    body: JSON.stringify(userDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export const otpVerifyService = async (otp) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/verify?otp=${otp}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Check the content type of the response
  const contentType = res.headers.get("content-type");
  let data;
  if (contentType && contentType.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  return data;
};


export const forgotPasswordService = async (email) => {
  try {
    console.log("email: ", email);

    const res = await fetch(`${baseUrl}/auth/send-otp?email=${encodeURIComponent(email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to send OTP");
    }

    // Check if the response has a body
    const text = await res.text();
    if (text) {
      const data = JSON.parse(text);
      return data;
    }

    return "OTP sent successfully.";
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { error: error.message };
  }
};

