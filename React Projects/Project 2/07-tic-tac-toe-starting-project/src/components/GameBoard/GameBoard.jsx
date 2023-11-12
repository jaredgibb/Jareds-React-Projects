import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;
    let playerSymbol = 'X'
    if (turns.length > 0 && turns[0].player === 'Player 2'){
        playerSymbol = 'O'
    }
    for (const turn of turns){
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }

 
	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => {
				return (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, columnIndex) => {
								return (
									<button
										key={columnIndex}
										onClick={()=>onSelectSquare(rowIndex, columnIndex)}
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
