import { useState } from "react";
import { Socket } from "socket.io-client";
import { GameData } from "../../Interfaces/server";
import GameIntro from "../GameIntro/GameIntro";
import "./GameRoom.scss";

interface GRProps {
  roomData: GameData;
  socket: Socket;
}

function GameRoom({ roomData, socket }: GRProps) {
  const [intro, setIntro] = useState(true);

  return (
    <div className="c-gameroom">
      { intro ? <GameIntro title={roomData.questions.name} text={roomData.questions.description} setter={setIntro} /> : null }
    </div>
  )
}

export default GameRoom