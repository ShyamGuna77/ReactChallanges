import React, { useRef } from "react";

export default function Player() {
  const [value, setValue] = React.useState("");
  const PlayerName = useRef();

  function HandleSubmit() {
    setValue(PlayerName.current.value); // Update the player name
    PlayerName.current.value = ""; // Clear the input after submission
  }

  return (
    <section id="player">
      <h2>Welcome {value ? value : "King"}</h2>
      <p>
        <input ref={PlayerName} type="text" placeholder="Enter your name" />
        <button onClick={HandleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
