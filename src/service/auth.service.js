'use server'
import { baseUrl } from "@/utils/constants";

export const loginService = async (userInfo) => {
  console.log(userInfo)
  const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data)
  return data;
};



export const registerService = async (userDetail) => {

  const res = await fetch(`${baseUrl}/api/v1/auth/register`, {
    method: 'POST',
    body: JSON.stringify(userDetail),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();
  return data;
}

export const otpVerifyService = async (otp) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/verify?otp=${otp}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();
  return data;
}

export const forgotPasswordService = async (email) => {
  const res = await fetch(`${baseUrl}/api/v1/auth/forgot-password/${email}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();
  return data;
}


