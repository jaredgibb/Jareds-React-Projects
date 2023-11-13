import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
	const [editMode, setEditMode] = useState(false);
	const [name, setName] = useState(initialName);

	function handleButtonClick() {
		//best practice when setting a state based on the previous state
		//is to use a callback function
		//this is because the state is not updated immediately and
		//when passing as a value, you ensure that you have the current state of that value
		//because react schedules state updates and updates arent necessarily immediate
		//so if you want to update a state based on the previous state, use a callback function
		setEditMode((editMode) => !editMode);
	}

	function handleInputChange(event) {
		setName(event.target.value);
	}

	let userNameElement = <span className='player-name'>{name}</span>;

	//if editMode is true, then we want to render an input
	if (editMode) {
		userNameElement = (
			<input
				type='text'
				required
				onChange={handleInputChange}
				value={name}
			/>
		);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className='player'>
				{userNameElement}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleButtonClick}>{editMode ? "Save" : "Edit"}</button>
		</li>
	);
}
