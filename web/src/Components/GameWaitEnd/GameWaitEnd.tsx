import { GameRoomProps } from "../../@types/client";
import { useLanguageContext } from "../Language/LanguageProvider";
import "./GameWaitEnd.scss";

function GameWaitEnd({ roomData, socket }: GameRoomProps) {
  const { dict } = useLanguageContext();

  return (
    <div className="c-gamewaitend">
      <h3>{dict.game_end_wait.please_wait}</h3>
      <button>{dict.game_end_wait.finished}: <span>{ roomData?.users_done.length }</span></button>
    </div>
  )
}

export default GameWaitEnd