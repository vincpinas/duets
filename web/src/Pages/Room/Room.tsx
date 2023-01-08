import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { socket } from "../../service";
import "./Room.scss"

function Room() {
  const navigate = useNavigate();
  const { room, name } = useParams();
  const [users, setUsers] = useState([]);
  const [roomData, setRoomData] = useState<any>();
  const joinedRef = useRef(false);

  const messageHandler = (message: { type: string; message: string }) => {
    if (message.type === "error") navigate("/")
    console.log(message.message)
  }

  const userUpdateHandler = (users: any) => setUsers(users)
  const beforeUnload = () => socket.emit('user-disconnect', { roomId: room })
  
  useEffect(() => {
    if (!room || !name || room === "" || name === "") {
      return navigate("/")
    }
    
    if(!joinedRef.current) {
      socket.emit('user-join', { name, room });
      socket.emit("room-info", room, (response: any) => setRoomData(response));
      joinedRef.current = true
    }
    
    socket.on('message', messageHandler)
    socket.on('user-update', userUpdateHandler)
    
    window.addEventListener("beforeunload", beforeUnload);

    return () => {
      socket.off('message', messageHandler);
      socket.off('user-update', userUpdateHandler);
      window.removeEventListener("beforeunload", beforeUnload)
    }
  }, [])

  return (
    <div className="c-room -page -bg-special">
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