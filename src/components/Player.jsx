import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEdit = (event) => {
    event.preventDefault();
    setIsEditing((editing) => !editing);

    onNameChange(symbol, playerName);

  };

  let editablePlayerField = <span className="player-name">{playerName}</span>;
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  if (isEditing) {
    editablePlayerField = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
