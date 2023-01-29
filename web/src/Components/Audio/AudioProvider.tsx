import { createContext, useContext, useRef, useState, useEffect } from "react";
import { joinMusic, sfx } from "./audiofiles";

const INITIAL_STATE: AudioProviderInitialState = {
  audioRef: null,
  src: "",
  setSrc: () => { },
  playing: false,
  setPlaying: () => { },
  createSFX: () => { },
}

// Context initialization
export const AudioContext = createContext(INITIAL_STATE);

export const AudioProvider = ({ children }: LPProps) => {
  const [src, setSrc] = useState(joinMusic);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    Object.values(sfx).forEach(value => {
      new Audio(value).preload = "auto"
    })
  }, [])

  const createSFX = (src: string, options?: SFXOptions) => {
    let temp = new Audio(src);

    if (options?.volume) temp.volume = options.volume;
    if (options?.start) temp.currentTime = options.start;

    temp.play();
    if (options?.duration) {
      setTimeout(() => {
        console.log("removing audio from virtual DOM")
        temp.pause();
      }, options.duration)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      if (playing) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [playing])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.05;
      audioRef.current.src = src;
    }
  }, [src])

  return (
    <AudioContext.Provider
      value={{ audioRef, src, setSrc, playing, setPlaying, createSFX }}
    >
      <audio ref={audioRef}></audio>
      {children}
    </AudioContext.Provider>
  )
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);

  return context;
};