const TabButton = ({ children, ...props }) => {
	function clickHandler() {
		console.log("clicked");
	}

	return (
		<li>
			<button onClick={clickHandler}>{children}</button>
		</li>
	);
};

export default TabButton;
