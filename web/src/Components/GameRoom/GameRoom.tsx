import { useState } from "react";
import { Socket } from "socket.io-client";
import GameIntro from "../GameIntro/GameIntro";
import "./GameRoom.scss";

function GameRoom({ roomData, socket }: GameRoomProps) {
  const [intro, setIntro] = useState(true);

  return (
    <div className="c-gameroom">
      { intro ? <GameIntro title={roomData.questions.name} text={roomData.questions.description} setter={setIntro} /> : null }
    </div>
  )
}

export default GameRoom