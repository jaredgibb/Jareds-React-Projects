import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import CustomInput from "./CustomInput";




export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	constd emailNotValid = (submitted && !enteredEmail.includes("@")) || undefined;
	const passwordNotValid = (submitted && enteredPassword.trim().length < 6) || undefined;

	return (
		<div id='auth-inputs' className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
			<div className='flex flex-col gap-2 mb-6' >
				<p>
					<CustomInput
						invalid={emailNotValid}
						label='Email'
						onChange={(event) => handleInputChange("email", event.target.value)}
						type='email'
					></CustomInput>

				</p>
				<p>
					<CustomInput
						invalid={passwordNotValid}
						label='Password'
						onChange={(event) => handleInputChange("password", event.target.value)}
						type='password'
					></CustomInput>


				</p>
			</div>
			<div className='flex justify-end gap-4'>
				<button
					type='button'
					className='text-amber-400 hover:text-amber-500'
				>
					Create a new account
				</button>
				<Button
					onClick={handleLogin}
				>
					Sign In
				</Button>
			</div>
		</div>
	);
}
