import { GameRoomProps } from "../../@types/client";
import Confetti from "../Confetti/Confetti";
import Crown from "../Crown/Crown";
import { useLanguageContext } from "../Language/LanguageProvider";
import "./GameEnd.scss";

function GameEnd({ roomData }: GameRoomProps) {
  const { dict } = useLanguageContext();
  
  return (
    <div className="c-gameend">
      <Confetti delay={3000} />
      {roomData.winners ?
        <ul className="c-gameend__stage">
          {roomData.winners[1] ?
            <li className="c-gameend__stagePlacing">
              <div className="c-gameend__stageWinner">
                <Crown />
                <span>{roomData.winners[1]?.name}</span>
              </div>
              <div className="c-gameend__stageOutline">
                <span>{dict.game_end.second}</span>
                <span>{dict.game_end.score}: {roomData.winners[1]?.score}/{roomData.questions.questions.length}</span>
              </div>
            </li>
            : null}
          {roomData.winners[0] ?
            <li className="c-gameend__stagePlacing">
              <div className="c-gameend__stageWinner">
                <Crown />
                <span>{roomData.winners[0]?.name}</span>
              </div>
              <div className="c-gameend__stageOutline">
                <span>{dict.game_end.first}</span>
                <span>{dict.game_end.score}: {roomData.winners[0]?.score}/{roomData.questions.questions.length}</span>
              </div>
            </li>
            : null}
          {roomData.winners[2] ?
            <li className="c-gameend__stagePlacing">
              <div className="c-gameend__stageWinner">
                <Crown />
                <span>{roomData.winners[2]?.name}</span>
              </div>
              <div className="c-gameend__stageOutline">
                <span>{dict.game_end.third}</span>
                <span>{dict.game_end.score}: {roomData.winners[2]?.score}/{roomData.questions.questions.length}</span>
              </div>
            </li>
            : null}
        </ul>
        : null}
    </div>
  )
}

export default GameEnd