import { apiRequest } from "./api";

export const getMyProfile = async()=>{
    return apiRequest("/api/users/me");
};

export const updateMyProfile = async (userData) => {
    return apiRequest("/api/users/me",{
        method: "PUT",
        body: JSON.stringify(userData)
    })
};