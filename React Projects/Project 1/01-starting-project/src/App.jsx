import Header from "./components/header/Header";
import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/tabButton/TabButton";

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
					</ul>
				</section>
        <section id="examples">
          <h2> Examples</h2>
          <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
          </menu>
        </section>
			</main>
		</div>
	);
}

export default App;
