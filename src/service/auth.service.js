"use server";
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
  console.log(data);
  return data;
};

export const loginSclService = async (userInfo) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/login-with-third-party`, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const registerService = async (userDetail) => {
  console.log(userDetail);
  const res = await fetch(`${baseUrl}/api/v1/auth/register`, {
    method: "POST",
    body: JSON.stringify(userDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const otpVerifyService = async (otp) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/verify?otp=${otp}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data);
  return data;
};

export const forgotPasswordService = async (email) => {
  console.log("email : ", email);
  const res = await fetch(`${baseUrl}/api/v1/auth/send-otp?email=${email}`, {
    method: "POST",
  });

  const data = await res.json();
  const code = data.code;
  return { code, email };
};

export const resetPasswordService = async (email, passowrds) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/forgot-password/${email}`, {
    method: "PUT",
    body: JSON.stringify(passowrds),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = res.json();
  return data;
};
