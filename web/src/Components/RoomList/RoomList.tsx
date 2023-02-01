import { useEffect, useRef, useState } from 'react'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';
import { Link } from 'react-router-dom';
import { socket } from '../../service'
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from '../Language/LanguageProvider';
import { useAudioContext } from '../Audio/AudioProvider';
import { sfx } from '../Audio/audiofiles';
import './RoomList.scss'
import { uniqueId } from '../../utils';
import Tooltip from '../Tooltip/Tooltip';
import { RoomListProps } from '../../@types/client';

function RoomList({ duration, setTransition, transition }: RoomListProps) {
  const navigate = useNavigate();
  const [roomList, setRoomList] = useState<GameData[] | []>([]);
  const [generatedName, setGeneratedName] = useState<string>("");
  const { dict } = useLanguageContext();
  const { createSFX } = useAudioContext();
  const fetched = useRef(false);

  const nameConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: " ",
    length: 2,
  };

  useEffect(() => {
    if (!fetched.current) {
      socket.emit('room-list', (rooms: GameData[]) => setRoomList(rooms));
      fetched.current = true
    }

    setGeneratedName(uniqueNamesGenerator(nameConfig))

    setTimeout(() => {
      socket.emit('room-list', (rooms: GameData[]) => setRoomList(rooms));
    }, 5000)
  }, [roomList])

  const stringToSpan = (s: string) => {
    return s.split("").map((item, i) => {
      return <span key={uniqueId()}>{item}</span>
    })
  }

  const submit = (room: string) => {
    if (!transition) {
      setTransition(true)
      createSFX(sfx.drip, { start: 1, duration: duration })
      setTimeout(() => {
        navigate(`/room/${room}/${generatedName}`)
      }, duration / 2)
    }
  }

  if (roomList.length > 0) return (
    <div className='c-roomlist -noselect'>
      <h4 className='c-roomlist__title'>{stringToSpan(dict.join.rooms)}</h4>
      <ul className='c-roomlist__list'>
        {roomList.map((room) => {
          let tooltext = room.users.map((user) => {
            return (
              <span key={uniqueId()}>{ String.fromCharCode(0x2022) } { user.name }</span>
            )
          })
          
          return (
            <Tooltip key={room.id} text={tooltext} className="c-roomlist__roomPlayers">
              <li onClick={() => submit(room.id)} className="c-roomlist__room">
                <Link to={`/room/${room.id}/${generatedName}`} onClick={(e) => e.preventDefault()}>
                  <span>{room.users.length} / {room.max_players}</span>
                  <span>{room.id.toUpperCase()}</span>
                </Link>
              </li>
            </Tooltip>
          )
        })}
      </ul>
    </div>
  )

  return null;
}

export default RoomList