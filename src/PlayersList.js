// src/PlayersList.js
import React from "react";
import Player from "./player";
import players from "./players";

export default function PlayersList  () {
const PlayerStyle={
display:"flex",
justifyContent:"center",
margin:"8rem",
marginTop:"0"
}
  return (
      <div style={PlayerStyle}>
      {players.map((players, index) => (
        <Player Player={index} {...players} />
      ))}
    </div>
  );
};


