export const saveToken = (token) => {
  localStorage.setItem("token", token);
};
export const getToken = () => {
  return localStorage.getItem("token");
};
export const removeToken = () => {
  localStorage.removeItem("token");
};
export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};
export const isAuthenticated = () => {
  return !!getToken();
};

export const getTokenPayload = () => {
  const token = getToken();
  if (!token) {
    return null;
  }
  try {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Invalid JWT token");
    return null;
  }
};

export const hasRole = (requiredRole) => {
  const payload = getTokenPayload();
  if (!payload) {
    return false;
  }
  const role = payload.role;
  if (!role) {
    return false;
  }
  return role === requiredRole || role === `ROLE_${requiredRole}`;
};

export const getUserRole = () => {
  const token = getToken();
  if (!token) {
    return null;
  }
  try {
    const payload = Json.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch (error) {
    console.error("Unable to read JWT:", error);
    return null;
  }
};

export const isAdmin = () => {
  return getUserRole() === "ADMIN";
};
