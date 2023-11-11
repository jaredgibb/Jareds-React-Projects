const Tabs = ({ children, buttons, buttonsContainer = "menu" }) => {
	
   const ButtonContainer = buttonsContainer
    
    
    
    return (
		<>
			<ButtonContainer>{buttons}</ButtonContainer>
			{children}
		</>
	);
}

export default Tabs;