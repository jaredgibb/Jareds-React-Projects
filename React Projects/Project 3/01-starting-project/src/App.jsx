import UserInputs from "./components/userInputs/UserInputs";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment.js";
import Results from "./components/results/Results";

function App() {
	const [initialInvestment, setInitialInvestment] = useState(10000);
	const [annualInvestment, setAnnualInvestment] = useState(0);
	const [expectedReturn, setExpectedReturn] = useState(0);
	const [duration, setDurationOfInvestment] = useState(0);

	const setVal = (newVal, state) => {
		newVal = parseInt(newVal);
		switch (state) {
			case "Initial Investment":
				setInitialInvestment(newVal);
				break;
			case "Annual Investment":
				setAnnualInvestment(newVal);
				break;
			case "Expected Return":
				setExpectedReturn(newVal);
				break;
			case "Duration of Investment in years":
				setDurationOfInvestment(newVal);
				break;
			default:
				break;
		}
	};

	const results = calculateInvestmentResults({
		initialInvestment,
		annualInvestment,
		expectedReturn,
		duration,
	});

	console.log(results);

	return (
		<>
			<UserInputs setVal={setVal} />
			{(results.length > 0) && <Results results={results || []} initialInvestment={initialInvestment} annualInvestment={annualInvestment} />}
		</>
	);
}

export default App;
