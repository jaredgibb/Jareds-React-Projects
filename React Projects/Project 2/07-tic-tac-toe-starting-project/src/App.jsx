import PlayerCard from "./components/PlayerCard/PlayerCard.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";
import { useState } from "react";

import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js";
const PLAYERS = [
	{ name: "Player 1", symbol: "X", isTurn: true },
	{ name: "Player 2", symbol: "O", isTurn: false },
]
import deriveWinner from "./deriveWinner.js";
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, setGameTurns] = useState([]);
	let gameBoard = [...initialGameBoard.map((row) => [...row])];
	
	for (const turn of gameTurns) {
		gameBoard[turn.square.row][turn.square.col] = turn.player;
	}
	const winner = deriveWinner(gameBoard, WINNING_COMBINATIONS);
	//we will derive the winner from the gameTurns

	const hasDraw = gameTurns.length === 9 && !winner;

	function handleSquareSelect(row, col) {
		setPlayers((players) => {
			const newPlayers = [...players.map((player) => ({ ...player }))];
			const currentPlayer = newPlayers.find((player) => player.isTurn);
			const nextPlayer = newPlayers.find((player) => !player.isTurn);
			currentPlayer.isTurn = false;
			nextPlayer.isTurn = true;
			setGameTurns((gameTurns) => {
				const newGameTurns = [...gameTurns];
				newGameTurns.unshift({ square: { row: row, col: col }, player: currentPlayer.symbol });
				return newGameTurns;
			});
			return newPlayers;
		});
	}

	function resetGame() {
		setPlayers([
			{ name: "Player 1", symbol: "X", isTurn: true },
			{ name: "Player 2", symbol: "O", isTurn: false },
		]);

		setGameTurns([]);
	}

	function setPlayerName(playerSymbol, name) {
		console.log("seeking:", playerSymbol, name);
		setPlayers((players) => {
			const newPlayers = [
				...players.map((elm) => {
					return { ...elm };
				}),
			];

			const player = newPlayers.find((player) => {
				return player.symbol === playerSymbol;
			});

			player.name = name;

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
						initialName={players[0].name}
						symbol={players[0].symbol}
						isActive={players[0].isTurn}
						setPlayerName={setPlayerName}
					/>
					<PlayerCard
						initialName={players[1].name}
						symbol={players[1].symbol}
						isActive={players[1].isTurn}
						setPlayerName={setPlayerName}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver
						winner={players.find((player) => player.symbol == winner).name}
						resetGame={resetGame}
					/>
				)}
				<GameBoard
					onSelectSquare={handleSquareSelect}
					turns={gameTurns}
					board={gameBoard}
				/>
			</div>
			<Log log={gameTurns} />
		</main>
	);
}

export default App;
