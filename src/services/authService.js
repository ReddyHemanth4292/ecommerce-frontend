import { apiRequest } from "./api";
const API_URL="http://localhost:8080/api/auth";

export const registerUser = async (userData) => {
    return apiRequest("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
};

export const loginUser = async (loginData) => {
    return apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
    });
}