export interface LPProps {
  children: React.ReactNode;
};

export interface SFXOptions {
  start?: number;
  duration?: number;
  volume?: number;
}

export interface InitialStateType {
  audioRef: React.RefObject<HTMLAudioElement> | null;
  src: string;
  setSrc: React.Dispatch<string>;
  playing: boolean;
  setPlaying: React.Dispatch<boolean>;
  createSFX: (src: string, options?: SFXOptions) => void,
}