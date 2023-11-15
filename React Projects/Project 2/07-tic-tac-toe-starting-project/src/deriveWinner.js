export default function deriveWinner(gameBoard, WINNING_COMBINATIONS){
	let winner;
	for (const winningCombination of WINNING_COMBINATIONS) {
		const firstSquare = gameBoard[winningCombination[0].row][winningCombination[0].column];
		const secondSquare = gameBoard[winningCombination[1].row][winningCombination[1].column];
		const thirdSquare = gameBoard[winningCombination[2].row][winningCombination[2].column];

		if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
			winner = firstSquare;

			break;
		}
	}
	return winner;
}