import { GameRoomProps } from "../../@types/client";
import Crown from "../Crown/Crown";
import "./GameEnd.scss";

function GameEnd({ roomData }: GameRoomProps) {
  return (
    <div className="c-gameend">
      {roomData.winners ?
        <ul className="c-gameend__stage">
          {roomData.winners[1] ?
            <li className="c-gameend__stagePlacing">
              <div className="c-gameend__stageWinner">
                <Crown />
                <span>{roomData.winners[1]?.name}</span>
              </div>
              <div className="c-gameend__stageOutline">
                <span>2nd</span>
                <span>Score: {roomData.winners[1]?.score}/{roomData.questions.questions.length}</span>
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
                <span>1st</span>
                <span>Score: {roomData.winners[0]?.score}/{roomData.questions.questions.length}</span>
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
                <span>3rd</span>
                <span>Score: {roomData.winners[2]?.score}/{roomData.questions.questions.length}</span>
              </div>
            </li>
            : null}
        </ul>
        : null}
    </div>
  )
}

export default GameEnd