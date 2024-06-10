import { headerToken } from "@/app/api/headerToken"
import { baseUrl } from "@/utils/constants"


export const loginService = async (userInfo) => {
    const header = await headerToken();
    const res = await fetch("http://68.183.234.148:8180/api/v1/auth/login", {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await res.json()
    return data;
}