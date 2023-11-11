//import the Header, CoreConcept and TabButton components
import Header from "./components/header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
//import the data that will be used to render the components
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {


	return (
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;