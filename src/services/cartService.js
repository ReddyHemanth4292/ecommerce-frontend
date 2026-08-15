import {apiRequest} from "./api";

export const getCart=async()=>{
    return apiRequest("/api/cart");
}