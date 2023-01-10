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
  const { dict } = useLanguageContext();
  const { createSFX } = useAudioContext();
  const fetched = useRef(false);

  useEffect(() => {
    if (!fetched.current) {
      socket.emit('room-list', (rooms: IRoom[]) => setRoomList(rooms));
      fetched.current = true
    }

    setTimeout(() => {
      socket.emit('room-list', (rooms: IRoom[]) => setRoomList(rooms));
    }, 5000)
  }, [roomList])

  const stringToSpan = (s: string) => {
    return s.split("").map((item, i) => {
      return <span key={"c-roomlist__title" + item + i}>{item}</span>
    })
  }

  const nameConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: '',
    length: 2,
  };

  const submit = (room: string) => {
    if (!transition) {
      setTransition(true)
      createSFX(sfx.drip, { start: 1, duration: duration })
      setTimeout(() => {
        navigate(`/room/${room}/${uniqueNamesGenerator(nameConfig)}`)
      }, duration / 2)
    }
  }

  return (
    <div className='c-roomlist'>
      <h4 className='c-roomlist__title'>{stringToSpan(dict.join.rooms)}</h4>
      <ul className='c-roomlist__list'>
        {roomList.map((room) => {
          return (
            <li onClick={() => submit(room.id)} key={room.id} className="c-roomlist__room">
              <span>{room.users.length} / {room.maxplayers}</span>
              <span>{room.id.toUpperCase()}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RoomList