import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { socket } from "../../service";
import "./Room.scss"
import WaitingRoom from "../../Components/WaitingRoom/WaitingRoom";
import GameRoom from "../../Components/GameRoom/GameRoom";
import { useLanguageContext } from "../../Components/Language/LanguageProvider";

function Room() {
  const navigate = useNavigate();
  const { room, name } = useParams();
  const { createAlert, clearAlerts, blockAlerts } = useLanguageContext();
  const [roomData, setRoomData] = useState<GameData>();
  const joinedRef = useRef(false);

  const messageHandler = (message: { type: string; message: string }) => {
    if (message.type === "error") {
      navigate("/");
      createAlert(message.message, message.type);
    }
  }
  const roomUpdateHandler = (info: any) => { setRoomData(info); }
  const beforeUnload = () => {
    socket.emit('user-disconnect', { roomId: room })
    clearAlerts();
    blockAlerts();
  }

  useEffect(() => {
    if (!room || !name || room === "" || name === "") {
      return navigate("/")
    }

    socket.emit('user-join', { name, roomId: room });
    joinedRef.current = true

    socket.on('message', messageHandler)
    socket.on('room-info', roomUpdateHandler)

    window.addEventListener("beforeunload", beforeUnload);

    return () => {
      socket.emit('user-disconnect', { roomId: room })
      socket.off('message', messageHandler);
      socket.off('room-info', roomUpdateHandler);
      window.removeEventListener("beforeunload", beforeUnload)
    }
  }, [])

  return (
    <div className="c-room -page -bg-special">
      {roomData && roomData.status === 2 ? <GameRoom roomData={roomData} socket={socket} /> : <WaitingRoom roomData={roomData} socket={socket} />}
    </div>
  )
}

export default Room