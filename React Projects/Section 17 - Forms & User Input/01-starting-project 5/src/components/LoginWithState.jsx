import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [vals, setVals] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleSubmission(event) {
    event.preventDefault();
    console.log(vals);
  }

  const emailIsInvalid =
    !vals.email.includes("@") && didEdit.email && vals.email !== "";

  const passwordIsInvalid = vals.password.length < 8 && didEdit.password;

  function onChange(event) {
    setVals({
      ...vals,
      [event.target.name]: event.target.value,
    });

    setDidEdit({
      ...didEdit,
      [event.target.name]: false,
    });
  }

  function handleInputBlur(id) {
    setDidEdit({
      ...didEdit,
      [id]: true,
    });
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid && "Please enter a valid email address"}
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => onChange(e)}
          value={vals.email}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          autoComplete="current password"
          name="password"
          error={passwordIsInvalid && "Please enter a valid email password"}
          onChange={(e) => onChange(e)}
          value={vals.password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
