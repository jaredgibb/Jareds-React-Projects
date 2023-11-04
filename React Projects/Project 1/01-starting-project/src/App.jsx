import Header from "./components/header/Header" ;
const reactDescriptions = [
  "Declarative",
  "Component-Based",
  "Learn Once, Write Anywhere",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max );
}

function App() {
	return (
		<div>
			<Header description={reactDescriptions[getRandomInt(reactDescriptions.length)]}/>
			<main>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
