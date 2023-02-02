import { useEffect, useState } from 'react'
import { ConnectingProps } from "../../@types/client"
import { ENDPOINT } from '../../service';
import { uniqueId } from '../../utils';
import { useLanguageContext } from '../Language/LanguageProvider';
import "./Connecting.scss"

function Connecting({ setConnected }: ConnectingProps) {
  const { dict } = useLanguageContext();
  const [letters, setLetters] = useState<string[]>(dict.connecting.split(""))

  useEffect(() => {
    setLetters(dict.connecting.split(""))
  }, [dict])

  const connectionCheck = () => {
    fetch(`${ENDPOINT}/server`)
      .then((res) => res.status === 200 ? setConnected(true) : null)
  }

  useEffect(() => {
    connectionCheck();

    const interval = setInterval(() => {
      connectionCheck();
    }, 4000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="c-connecting -bg-special">
      <h2 className="c-connecting__title">
        {letters.map(letter => {
          return (<span className="c-connecting__letter" key={uniqueId()}>{letter}</span>)
        })}
      </h2>
    </div>
  )
}

export default Connecting