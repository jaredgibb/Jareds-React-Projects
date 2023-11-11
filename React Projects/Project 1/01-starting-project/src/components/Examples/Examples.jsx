import React, { useState } from "react";
import TabButton from "../tabButton/TabButton";
import Section from "../Section";
import { EXAMPLES } from "../../data.js";
import Tabs from '../tabs/Tabs.jsx'

export default function Examples() {
	//state to store the selected tab content
	const [selectedTabContent, setTabContent] = useState();
	//array of options that will be rendered as tab buttons
	const tabOptions = ["components", "jsx", "props", "state"];

	//function to handle the click event on the tab buttons
	function clickHandler(selectedButton) {
		//selectedButton => components, jsx, props, state
		setTabContent(selectedButton);
	}

	let tabContent = <p>Please Select a Topic</p>;
	if (selectedTabContent) {
		tabContent = (
			<div id='tab-content'>
				<h3>{EXAMPLES[selectedTabContent].title}</h3>
				<p>{EXAMPLES[selectedTabContent].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTabContent].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<Section
			id='examples'
			title='Examples'
		>
			<Tabs 
			buttonsContainer="menu"
			buttons={<>{tabOptions.map((tabOption) => (
					<TabButton
						key={tabOption}
						onClick={() => clickHandler(tabOption)}
						isSelected={selectedTabContent == tabOption}
					>
						{EXAMPLES[tabOption].title}
					</TabButton>
				))}</>}>{tabContent}</Tabs>
			<menu>
				
			</menu>
		</Section>
	);
}
