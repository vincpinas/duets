import "./AudioToggle.scss"
import { MdMusicNote, MdMusicOff } from "react-icons/md"
import { useAudioContext } from "./AudioProvider"

function AudioToggle() {
  const { playing, setPlaying, audioRef } = useAudioContext();

  return (
    <div className="c-audio">
      <button className="c-audio__button -menuButton" onClick={() => setPlaying(!playing)}>
        {playing ? <MdMusicNote /> : <MdMusicOff />}
      </button>
    </div>
  )
}

export default AudioToggle