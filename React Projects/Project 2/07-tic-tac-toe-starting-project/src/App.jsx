import PlayerCard from "./components/PlayerCard/PlayerCard.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import { useState } from "react";
function App() {
	const [players, setPlayers] = useState([
		{ name: "Player 1", symbol: "X", isTurn: true },
		{ name: "Player 2", symbol: "O", isTurn: false },
	]);

	const [gameTurns, setGameTurns] = useState([]);

	function handleSquareSelect(row, col) {
		setPlayers((players) => {
			const newPlayers = [...players.map((player) => ({ ...player }))];
			const currentPlayer = newPlayers.find((player) => player.isTurn);
			const nextPlayer = newPlayers.find((player) => !player.isTurn);
			currentPlayer.isTurn = false;
			nextPlayer.isTurn = true;
			setGameTurns((gameTurns) => {
				const newGameTurns = [...gameTurns];
				newGameTurns.unshift({ square: { row, col }, player: currentPlayer.symbol });
				return newGameTurns;
			});
			return newPlayers;
		});
	}

	return (
		<main>
			<div id='game-container'>
				<ol
					id='players'
					className='highlight-player'
				>
					<PlayerCard
						initialName='Player 1'
						symbol='X'
						isActive={players[0].isTurn}
					/>
					<PlayerCard
						initialName='Player 2'
						symbol='O '
						isActive={players[1].isTurn}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handleSquareSelect}
					activePlayer={players.find((elm) => elm.isTurn)}
          turns={gameTurns}
				/>
			</div>
		
		</main>
	);
}

export default App;
