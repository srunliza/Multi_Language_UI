import { headerToken } from "@/app/api/headerToken"
import { baseUrl } from "@/utils/constants"


export const loginService = async (userInfo) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: header
    })  
    const data = await res.json()
    return data;
}