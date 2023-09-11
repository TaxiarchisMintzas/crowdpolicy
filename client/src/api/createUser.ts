import { API_URL } from "./config"
import { TUser } from "./TUser";

export async function createUser(user: TUser) {
    
    const response = await fetch(`${API_URL}`,{
        method: "POST",
        body: JSON.stringify({
            user
        }),
        headers: {
            "Content-Type": "application/json" 
        }
    })
    console.log(response);
    return response.json();
}