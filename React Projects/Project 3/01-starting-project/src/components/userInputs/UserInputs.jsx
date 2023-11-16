import { useState } from "react";
import IndividualInput from "./IndividualInput";
export default function UserInputs({ setVal }) {
	return (
		<>
			<div id='user-input'>
				<div className='input-group'>
					<IndividualInput
						label='Initial Investment'
						defaultText='10000'
						updateFunc={setVal}
					/>
					<IndividualInput
						label='Annual Investment'
						defaultText='0'
						updateFunc={setVal}
					/>
				</div>
				<div className='input-group'>
					<IndividualInput
						label='Expected Return'
						defaultText='0'
						updateFunc={setVal}
					/>
					<IndividualInput
						label='Duration of Investment in years'
						defaultText='0'
						updateFunc={setVal}
					/>
				</div>
			</div>
		</>
	);
}
