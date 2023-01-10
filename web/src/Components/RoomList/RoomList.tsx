import React, { useEffect, useRef, useState } from 'react'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';
import { Link } from 'react-router-dom';
import { socket } from '../../service'
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from '../Language/LanguageProvider';
import { useAudioContext } from '../Audio/AudioProvider';
import { sfx } from '../Audio/audiofiles';
import './RoomList.scss'

interface IRoom {
  id: string;
  users: [];
  status: number;
  maxplayers: number;
}

interface RoomListProps {
  duration: number;
  setTransition: (state: boolean) => void;
  transition: boolean;
}

function RoomList({ duration, setTransition, transition }: RoomListProps) {
  const navigate = useNavigate();
  const [roomList, setRoomList] = useState<IRoom[] | []>([]);
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
      socket.emit('room-list', (rooms: IRoom[]) => setRoomList(rooms));
      fetched.current = true
    }

    setGeneratedName(uniqueNamesGenerator(nameConfig))

    setTimeout(() => {
      socket.emit('room-list', (rooms: IRoom[]) => setRoomList(rooms));
    }, 5000)
  }, [roomList])

  const stringToSpan = (s: string) => {
    return s.split("").map((item, i) => {
      return <span key={"c-roomlist__title" + item + i}>{item}</span>
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

  return (
    <div className='c-roomlist -noselect'>
      <h4 className='c-roomlist__title'>{stringToSpan(dict.join.rooms)}</h4>
      <ul className='c-roomlist__list'>
        {roomList.map((room) => {
          return (
            <li onClick={() => submit(room.id)} key={room.id} className="c-roomlist__room">
              <Link to={`/room/${room.id}/${generatedName}`} onClick={(e) => e.preventDefault() }>
                <span>{room.users.length} / {room.maxplayers}</span>
                <span>{room.id.toUpperCase()}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RoomList