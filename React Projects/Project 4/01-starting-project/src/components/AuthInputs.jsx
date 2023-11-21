import { useState } from "react";
import { styled } from "styled-components";

const ControlDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: ${({ invalid }) => {
		return invalid ? "#f87171" : "#6b7280";
	}};
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 0.75rem 1rem;
	line-height: 1.5;
	background-color: ${({ invalid }) => {
		return invalid ? "red" : "lightgrey";
	}};
	color: ${({ invalid }) => {
		return invalid ? "white" : "black";
	}};
	border: 1px solid
		${({ invalid }) => {
			invalid ? "red" : "transparent";
		}};
	border-radius: 0.25rem;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const StyledButton = styled.button`
	padding: 1rem 2rem;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 0.25rem;
	color: #1f2937;
	background-color: #f0b322;
	border-radius: 6px;
	border: none;

	&:hover {
		background-color: #f0920e;
	}
`;
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

	const emailNotValid = (submitted && !enteredEmail.includes("@")) || undefined;
	const passwordNotValid = (submitted && enteredPassword.trim().length < 6) || undefined;

	return (
		<div id='auth-inputs'>
			<ControlDiv>
				<p>
					<Label invalid={emailNotValid}>Email</Label>
					<StyledInput
						type='email'
						invalid={emailNotValid}
						onChange={(event) => handleInputChange("email", event.target.value)}
					/>
				</p>
				<p>
					<Label invalid={passwordNotValid}>Password</Label>
					<StyledInput
						type='password'
						invalid={passwordNotValid}
						// className={passwordNotValid ? 'invalid' : undefined}
						onChange={(event) => handleInputChange("password", event.target.value)}
					/>
				</p>
			</ControlDiv>
			<div className='actions'>
				<StyledButton
					type='button'
					className='text-button'
				>
					Create a new account
				</StyledButton>
				<StyledButton
					className='button'
					onClick={handleLogin}
				>
					Sign In
				</StyledButton>
			</div>
		</div>
	);
}
