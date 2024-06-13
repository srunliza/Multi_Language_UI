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
  console.log("otp: ", otp)
  const res = await fetch(`${baseUrl}/api/v1/auth/verify?otp=${otp}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  
  let data = await res.text();
  return data;
};




export const forgotPasswordService = async (email) => {
  try {
    console.log("email: ", email);

    const res = await fetch(`${baseUrl}/api/v1/auth/send-otp?email=${encodeURIComponent(email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = await res.text();
    return text;
  } catch (error) {
    console.error("Error sending OTP: ", error);
    throw error;
  }
};

