import { GameData } from '../../Interfaces/server';
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
            <li key={user.id}>{user.name}</li>
          )
        }) : null}
      </ul>
    </div>
  )
}

export default WaitingRoom