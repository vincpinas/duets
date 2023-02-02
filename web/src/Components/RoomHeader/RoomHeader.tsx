import { useState, useEffect } from 'react'
import { RoomHeaderProps } from '../../@types/client';
import { useLanguageContext } from '../Language/LanguageProvider'
import './RoomHeader.scss'

function RoomHeader({ roomData }: RoomHeaderProps) {
  const { dict } = useLanguageContext();
  const [dots, setDots] = useState("");
  const dotsMove = (dots: string) => {
    if (dots.length <= 1) setDots(dots + ".")
    else setDots("")
  }
  const statusString = (s: number) => {
    switch (s) {
      case 0:
        return `${dict.room.wait}`;
      case 1:
        return `${dict.room.start}`;
      case 2:
        return `${dict.room.running}`;
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
      {roomData ?
        <>
          <p className='c-roomheader__item'>
            Room ID: <span className='c-roomheader__itemHighlight'>{roomData.id}</span>
          </p>
          <p className='c-roomheader__item'>
            {dict.room.players}: <span className='c-roomheader__itemHighlight'>{roomData.users.length} / {roomData.max_players}</span>
          </p>
          <p className='c-roomheader__item'>
            Selected quiz: <span className='c-roomheader__itemHighlight'>{roomData.questions.name}</span>
          </p>
          <p className='c-roomheader__item c-roomheader__status'>
            {statusString(roomData.status)}{dots}
          </p>
        </>
        : null}
    </header>
  )
}

export default RoomHeader