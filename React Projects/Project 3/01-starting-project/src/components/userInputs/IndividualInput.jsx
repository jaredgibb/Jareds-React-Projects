export default function IndividualInput({ label, defaultText, updateFunc }) {
	
	return (
		<div>
			<label>{label}</label>
			<input
				defaultValue={defaultText}
				type='number'
				onChange={(e) => updateFunc(e.target.value, label)}
			></input>
		</div>
	);
}
