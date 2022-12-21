import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { io } from 'socket.io-client';
import { ENDPOINT } from "../../constants";
import "./Room.scss"

function Room() {
  let socket: any;
  const navigate = useNavigate();
  const { room, name } = useParams();

  useEffect(() => {
    if (!room || room === "") return navigate("/")
    if (!name || name === "") return navigate("/")

    socket = io(ENDPOINT);
    socket.emit('user-join', { name, room }, () => { });

    socket.on('message', (m: any) => {
      console.log(m)
      if (m.type === "error") navigate("/")
    })
  }, [room, name])

  window.onbeforeunload = () => {
    socket.emit('user-disconnect');
    socket.off();
  }

  return (
    <div className="c-room -page">

    </div>
  )
}

export default Room