import { useRef, useState } from "react";

export default function Login() {
  const inputs = useRef({ email: "", password: "" });
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  function handleSubmission(event) {
    event.preventDefault();
    const emailIsValid = inputs.current.email.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
  }

  function onChange(event) {
    inputs.current[event.target.name] = event.target.value;
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
            ref={inputs.email}
            onChange={(e) => onChange(e)}
          />
          <div className="control-error">
            {emailIsInvalid && <p> Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current password"
            name="password"
            ref={inputs.password}
            onChange={(e) => onChange(e)}
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
