import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => onChange(e)}
            value={vals.email}
          />
        </div>
        <div className="control-error">
          {emailIsInvalid && <p>Please enter a valid email address</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current password"
            name="password"
            onChange={(e) => onChange(e)}
            value={vals.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
