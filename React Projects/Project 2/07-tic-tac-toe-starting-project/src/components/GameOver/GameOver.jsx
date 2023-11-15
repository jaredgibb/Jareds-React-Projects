export default function GameOver({winner, resetGame}){


    return (
        <div id='game-over'>
            <h1>Game Over</h1>
           { winner && <p>{winner} won!</p>}
           {!winner && <p>It's a draw!</p>}
            <button onClick={resetGame}>Play Again</button>
        </div>
    )
}