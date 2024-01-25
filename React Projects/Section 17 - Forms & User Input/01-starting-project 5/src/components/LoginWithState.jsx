import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    isValid: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    isValid: passwordIsInvalid,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  function handleSubmission(event) {
    event.preventDefault();
    console.log(event);
  }

  console.log('email is valid', emailIsInvalid)
  console.log('password is valid', passwordIsInvalid)

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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={email}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          autoComplete="current password"
          name="password"
          error={passwordIsInvalid && "Please enter a valid email password"}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
