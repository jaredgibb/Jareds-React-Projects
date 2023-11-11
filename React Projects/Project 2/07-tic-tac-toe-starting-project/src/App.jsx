import PlayerCard from "./components/PlayerCard/PlayerCard.jsx";
 
function App() {
	return (
		<main>
			<div id='game-container'>
				<ol id='players'>
					<PlayerCard
						initialName='Player 1'
						symbol='X'
					/>
					<PlayerCard
						initialName='Player 2'
						symbol='O '
					/>
				</ol>
				Game Board
			</div>
		</main>
	);
}

export default App;
