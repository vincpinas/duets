import { useEffect, useState } from "react";
import { WaitingRoomProps } from "../../@types/client";
import { useLanguageContext } from '../Language/LanguageProvider';
import RoomHeader from '../RoomHeader/RoomHeader';
import './WaitingRoom.scss'

function WaitingRoom({ roomData, socket }: WaitingRoomProps) {
  const { createAlert, clearAlerts, dict } = useLanguageContext();
  const [ready, setReady] = useState(false);
  const readyHandle = () => {
    socket.emit('user-ready', { roomId: roomData?.id }, (bool: boolean) => setReady(bool));
  }
  
  useEffect(() => {
    setTimeout(() => {
      if (roomData) {
        if (roomData?.min_players - roomData?.users.length > 0) {
          createAlert(`${dict.room.waiting_for} ${roomData?.min_players - roomData?.users.length} ${dict.room.more_players}`)
        } else if(roomData?.min_players - roomData?.users.length <= 0 && roomData.status === 0) {
          createAlert(`${dict.room.waiting_for} ${roomData?.users.length - roomData?.users_ready.length } ${dict.room.ready_up}`)
        } else {
          createAlert(`${dict.room.starting_in} ${roomData.start_delay / 1000} ${dict.room.seconds}`)
        }
      }
      return () => clearAlerts();
    })
  }, [roomData])


  return (
    <div className='c-waitingroom'>
      <RoomHeader roomData={roomData} />
      <ul>
        {roomData ? roomData.users.map((user: any) => {
          return (
            <li className={socket.id === user.id ? 'user user__highlight' : 'user'} key={user.id}>{user.name}</li>
          )
        }) : null}
      </ul>
      <button
        disabled={ready}
        className={ready ? "c-waitingroom__button -active" : "c-waitingroom__button"}
        onClick={readyHandle}
      >
        { ready ? `${dict.room.go}`: `${dict.room.ready}`}
      </button>
    </div>
  )
}

export default WaitingRoom