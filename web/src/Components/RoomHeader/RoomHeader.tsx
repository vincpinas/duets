import React, { useState, useEffect } from 'react'
import { useLanguageContext } from '../Language/LanguageProvider'
import './RoomHeader.scss'

interface RHeaderProps {
  roomData: {
    id: string;
    status: number;
    maxplayers: number;
    users: [];
  }
}

function RoomHeader({ roomData }: RHeaderProps) {
  const { dict } = useLanguageContext();
  const [dots, setDots] = useState("");
  const dotsMove = (dots: string) => {
    if (dots.length <= 2) setDots(dots + ".")
    else setDots("")
  }
  const statusString = (s: number) => {
    switch (s) {
      case 0:
        return `${dict.room.wait}`;
      case 1:
        return `${dict.room.start}`;
      default:
        break;
    }
  }

  useEffect(() => {
    let temp = setTimeout(() => dotsMove(dots), 600)

    return () => {
      clearTimeout(temp)
    }
  }, [dots])


  return (
    <header className='c-roomheader'>
      <p className='c-roomheader__item'>
        {roomData ? roomData.id : null}
      </p>
      <p className='c-roomheader__item'>
        {roomData ? `${dict.room.players}: ${roomData.users.length} / ${roomData.maxplayers}` : null}
      </p>
      <p className='c-roomheader__item c-roomheader__status'>
        {roomData ? `${statusString(roomData.status)}${dots}` : null}
      </p>
    </header>
  )
}

export default RoomHeader