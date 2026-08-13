import { getToken } from "../utils/auth";
import { apiRequest } from "./api";
const API_URL="http://localhost:8080/api/products";

export const getProducts= async() => {
    return apiRequest("/api/products");
}

export const getProductById = async(id) => {
    const response=await fetch(`${API_URL}/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch product");
    }
    return response.json();
}