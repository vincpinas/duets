import { Socket } from "socket.io-client";
import { GameData } from "../../Interfaces/server";

interface GRProps {
  roomData: GameData;
  socket: Socket;
}

function GameRoom({ roomData, socket }: GRProps) {
  console.log(socket, roomData)

  return (
    <div className="c-gameroom">
      
    </div>
  )
}

export default GameRoom