export const GameOver = ({ winner, handleRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p className="name">{winner ? winner + " Won!" : "It's a Draw!"}</p>
      <p>
        <button onClick={() => handleRematch()}>Rematch!</button>
      </p>
    </div>
  );
};
