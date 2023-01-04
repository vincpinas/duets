import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { socket } from "../../service";
import "./Room.scss"

function Room() {
  const navigate = useNavigate();
  const { room, name } = useParams();
  const [users, setUsers] = useState([]);
  const joinedRef = useRef(false);

  useEffect(() => {
    if (!room || !name || room === "" || name === "") {
      socket.off();
      return navigate("/")
    }

    if(!joinedRef.current) {
      socket.emit('user-join', { name, room });
      joinedRef.current = true;
    }

    socket.on('message', (message: { type: string; message: string }) => {
      if (message.type === "error") navigate("/")
    })

    socket.on('user-update', (users: []) => setUsers(users))

    return () => {
      socket.emit('user-disconnect', { roomId: room })
      socket.off();
    }
  }, [])

  window.onbeforeunload = () => {
    socket.emit('user-disconnect', { roomId: room });
    socket.off();
  }

  return (
    <div className="c-room -page">
      <ul>
        {users.map((user: any) => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Room