import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { io } from 'socket.io-client';
import { ENDPOINT } from "../../constants";
import "./Room.scss"

function Room() {
  let socket: any;
  const navigate = useNavigate();
  const { room, name } = useParams();

  useEffect(() => {
    if(!room) return navigate("/")
    if(!name) return navigate("/")

    socket = io(ENDPOINT);
    socket.emit('user-join', { name, room }, () => {});

    socket.on('message', (m: any) => {
      console.log(m)
      if(m.type === "error") navigate("/")
    })
  }, [room, name])

  return (
    <div className="c-room -page -bg-special">
        
    </div>
  )
}

export default Room