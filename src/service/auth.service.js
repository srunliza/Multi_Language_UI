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
    method: 'POST',
    body: JSON.stringify(userDetail),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();
  return data;
}

export const otpService = async (otp) => {
  console.log("otp in service: ", otp)
  const res = await fetch(`${baseUrl}/api/v1/auth/verify?otp=${otp}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();
  return data;
}
