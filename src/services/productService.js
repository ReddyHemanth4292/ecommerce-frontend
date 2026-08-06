const API_URL="http://localhost:8080/api/products";

export const getProducts= async() => {
    const response=await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}

export const getProductById = async(id) => {
    const response=await fetch(`${API_URL}/${id}`);
    if(!response!=0){
        return new Error("Failed to fetch product");
    }
    return response.json();
}