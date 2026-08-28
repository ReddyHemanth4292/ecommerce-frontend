import { apiRequest } from "./api";

export const checkout = async () => {
  return apiRequest("/api/orders/checkout", {
    method: "POST",
  });
};

export const getMyOrders = async () => {
  return apiRequest("/api/orders");
};

export const getOrderById = async (id) => {
  return apiRequest(`/api/orders/${id}`);
};

export const cancelOrder = async (id) => {
  return apiRequest(`/api/orders/${id}/cancel`, {
    method: "PUT",
  });
};
