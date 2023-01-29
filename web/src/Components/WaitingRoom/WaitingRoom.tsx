import { useEffect } from "react";
import { socket } from '../../service';
import { useLanguageContext } from '../Language/LanguageProvider';
import RoomHeader from '../RoomHeader/RoomHeader';
import './WaitingRoom.scss'

function WaitingRoom({ roomData }: WaitingRoomProps) {
  const { createAlert, clearAlerts } = useLanguageContext();

  useEffect(() => {
    setTimeout(() => {
      if (roomData) {
        if (roomData?.min_players - roomData?.users.length > 0) {
          createAlert(`Waiting for ${roomData?.min_players - roomData?.users.length} more players`)
        } else {
          createAlert(`Starting game in ${roomData.start_delay / 1000} seconds`)
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
    </div>
  )
}

export default WaitingRoom