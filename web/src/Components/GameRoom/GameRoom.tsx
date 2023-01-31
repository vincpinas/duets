import { GameRoomProps } from "../../@types/client";
import { useEffect, useState } from "react";
import { uniqueId } from "../../utils";
import GameIntro from "../GameIntro/GameIntro";
import GameWaitEnd from "../GameWaitEnd/GameWaitEnd";
import GameEnd from "../GameEnd/GameEnd";
import "./GameRoom.scss";

function GameRoom({ roomData, socket }: GameRoomProps) {
  const [intro, setIntro] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const gameEndHandler = (data: boolean) => setGameEnd(data);
  const validateQuestion = (bool: number | boolean) => {
    socket.emit("game-validate-question", { bool, roomId: roomData.id });
    setQuestionIndex(questionIndex + 1);
  }

  useEffect(() => {
    socket.on("game-end-result", gameEndHandler);

    return () => {
      socket.off("game-end-result", gameEndHandler)
    }
  }, [])

  if(questionIndex > roomData.questions.questions.length - 1 && gameEnd) return <GameEnd socket={socket} roomData={roomData} />;

  if(questionIndex > roomData.questions.questions.length - 1 && !gameEnd) return <GameWaitEnd socket={socket} roomData={roomData} />;

  return (
    <div className="c-gameroom">
      {intro ? <GameIntro title={roomData.questions.name} text={roomData.questions.description} setter={setIntro} /> : null}
      {questionIndex <= roomData.questions.questions.length - 1 ?
        <>
          <h2 className="c-gameroom__question">{roomData.questions.questions[questionIndex].question}</h2>
          <ul className="c-gameroom__answerWrapper">
            {roomData.questions.questions[questionIndex].answers.map((answer) => {
              return (
                <li key={uniqueId()} className="c-gameroom__answer" onClick={() => validateQuestion(answer.c)}>
                  {answer.a}
                </li>
              )
            })}
          </ul>
        </>
        : null}
    </div>
  )
}

export default GameRoom