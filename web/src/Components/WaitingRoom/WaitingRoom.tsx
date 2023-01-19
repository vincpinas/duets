import { GameData } from '../../Interfaces/server';
import { socket } from '../../service';
import RoomHeader from '../RoomHeader/RoomHeader';
import './WaitingRoom.scss'

interface WRProps {
  roomData: GameData | undefined;
}

function WaitingRoom({ roomData }: WRProps) {
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