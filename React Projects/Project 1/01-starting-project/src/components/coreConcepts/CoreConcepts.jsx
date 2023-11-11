import CoreConcept from "../coreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data.js";
import Section from "../Section";

export default function CoreConcepts ( ) {

	return (
		<>
			<Section id='core-concepts'>
				<ul>
					{CORE_CONCEPTS.map((concept) => (
						<CoreConcept
							key={concept.title}
							{...concept}
						/>
					))}
				</ul>
			</Section>
		</>
	);
};
