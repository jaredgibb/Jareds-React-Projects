import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({
      status: 400,
      statusText: "Bad Request",
      headers: {
        "content-type": "application/json",
      },
      body: {
        message: "Invalid mode.",
      },
    });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: "Authentication failed!" },
      {
        status: 500,
      }
    );
  }

  const resData = await response.json();
  const { token } = resData;

  //store token in session storage
  sessionStorage.setItem("token", token);
  const currentTime = new Date()
  const expiration = new Date(currentTime.setHours(currentTime.getHours() + 1))

  sessionStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
}