import { useState } from "react";



export default function GameBoard({ onSelectSquare, board }) {
	let playerSymbol = "X";
	if (board.length > 0 && board[0].player === "Player 2") {
		playerSymbol = "O";
	}


	return (
		<ol id='game-board'>
			{board.map((row, rowIndex) => {
				return (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, columnIndex) => {
								return (
									<button
										key={columnIndex}
										onClick={() => onSelectSquare(rowIndex, columnIndex)}
										disabled={playerSymbol !== null}
									>
										{playerSymbol}
									</button>
								);
							})}
						</ol>
					</li>
				);
			})}
		</ol>
	);
}
