import { GameRoomProps } from "../../@types/client";
import "./GameWaitEnd.scss";

function GameWaitEnd({ roomData, socket }: GameRoomProps) {
  return (
    <div className="c-gamewaitend">
      <h3>Please wait for the other players to finish before we look at the results!</h3>
      <button>Players Finished: <span>{ roomData?.users_done.length }</span></button>
    </div>
  )
}

export default GameWaitEnd