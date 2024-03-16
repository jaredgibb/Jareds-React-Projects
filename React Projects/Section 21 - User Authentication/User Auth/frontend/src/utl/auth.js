import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration === null) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return { token };
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token || token === "EXPIRED") {
    return redirect("/auth");
  } else {
    return null;
  }
}

export function getTokenDuration() {
  const storedExpirationDate = sessionStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const currentTime = new Date();
  if (currentTime >= expirationDate) {
    return null;
  } else {
    return expirationDate.getTime() - currentTime.getTime();
  }
}
