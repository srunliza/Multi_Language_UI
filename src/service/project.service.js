
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
import { getServerSession } from "next-auth";



// Get all category services
export const getAllProjectServices = async () => {

    const session = await getServerSession(authOption);
    const header = await headerToken();
    const res = await fetch(
        `${baseUrl}/api/v1/project/get-all-current-user-project`,
        {
            headers: header,
        }
    );

    
    // console.log(res)
    const data = await res.json();
    return data;
};