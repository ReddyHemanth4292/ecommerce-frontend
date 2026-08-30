import { apiRequest } from "./api";

export const createProduct = async (product) => {
    return apiRequest("/api/products",{
        method:"POST",
        body:JSON.stringify(product),
    });
};

export const updateProduct = async(id,product)=>{
    return apiRequest(`/api/products/${id}`,{
        method:"PUT",
        body:JSON.stringify(product),
    });
};

export const deleteProduct = async(id)=>{
    return apiRequest(`/api/products/${id}`,{
        method:"DELETE",
    });
};