import {apiRequest} from "./api";

export const getCart=async()=>{
    return apiRequest("/api/cart");
}

export const addToCart=async(productId)=>{
    return apiRequest(`/api/cart/add/${productId}`,{
        method : "POST",
    });
};

export const removeCartItem= async(cartItemId)=>{
    return apiRequest(`/api/cart/items/${cartItemId}`,{
        method: "DELETE",
    });
};

export const updateCartItem = async(cartItemId, quantity) =>{
    return apiRequest(`/api/cart/items/${cartItemId}`,{
        method:"PUT",
        body: JSON.stringify({
            quantity : quantity,
        }),
    });
};

export const clearCart = async()=>{
    return apiRequest("/api/cart", {
        method: "DELETE",
    });
}