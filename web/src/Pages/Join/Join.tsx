import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { sfx } from "../../Components/Audio/audiofiles";
import { useAudioContext } from "../../Components/Audio/AudioProvider";
import { useLanguageContext } from "../../Components/Language/LanguageProvider";
import RoomList from "../../Components/RoomList/RoomList";
import "./Join.scss"

function Join() {
  const navigate = useNavigate();
  const { dict } = useLanguageContext();
  const { createSFX } = useAudioContext();
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [transition, setTransition] = useState(false);
  const duration = 1000
  const sElem = useRef<HTMLInputElement>(null);

  const validate = (val: string, regex: RegExp) => {
    return regex.test(val)
  }

  const setter = (setFunc: React.Dispatch<string>, regex: RegExp, e: React.KeyboardEvent<HTMLInputElement>, ref?: React.RefObject<HTMLElement>) => {
    const target = e.target as HTMLInputElement

    if (validate(target.value, regex)) {
      setFunc(target.value.toLowerCase());

      if (ref?.current) {
        ref.current.focus()
      }
    }
    else setFunc("")
  }

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (room && name) {
      if (!transition) {
        setTransition(true)
        createSFX(sfx.drip, { start: 1, duration: duration })
        setTimeout(() => {
          navigate(`/room/${room}/${name}`)
        }, duration / 2)
      }
    }
  }

  return (
    <>
      { transition ? <div className="c-join__transition -transition"></div> : null}
      <RoomList setTransition={setTransition} duration={duration} transition={transition} />
      <main className="c-join -page -bg-special">
        <div className="c-join__titles -noselect">
          <h1 className="c-join__title">Duets!</h1>
          <h4 className="c-join__subTitle">Beta</h4>
        </div>
        <form className="c-join__form">
          <input
            className="c-join__formField"
            type="text"
            placeholder={dict.join.room}
            onKeyUp={(e) => setter(setRoom, /^[A-Za-z]{2}[0-9]{4}/, e, sElem)}
            maxLength={6}
          />
          {room.length === 6 ?
            <input
              className="c-join__formField"
              type="text"
              ref={sElem}
              placeholder={dict.join.name}
              onKeyUp={(e) => setter(setName, /^[A-Za-z0-9@#$^!]{3,15}/, e)}
              maxLength={15}
            />
            : null
          }
          <div className="c-join__button">
            <span></span>
            <button className="c-join__formField" type="submit" onClick={submit}>
              {dict.join.button}
            </button>
          </div>
        </form>
        <footer>
          <p>
            {dict.join.footer} <a href="https://duet.digital/" target="_blank" rel="noopener noreferrer"><strong>Duet Digital</strong></a>
          </p>
        </footer>
      </main>
    </>
  )
}

export default Join