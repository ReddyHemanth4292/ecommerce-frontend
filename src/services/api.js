const API_BASE_URL = "http://localhost:8080";

export const apiRequest = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("token");
      throw new Error("Session expired. Please login again.");
    }

    if (response.status === 403) {
      throw new Error("You don't have permission to perform this action.");
    }

    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
};
