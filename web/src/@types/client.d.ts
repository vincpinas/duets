import { Socket } from "socket.io-client";

interface RubberSpanProps {
  letters: string;
  margin?: number|string;
  hero?: boolean;
  emoji?: string;
  br?: boolean;
}

interface alert {
  id: string;
  text: string;
  type?: number;
}

interface language {
  lang: string; // Language name
  abbreviation: string; // Language code
  sub?: string | null; // Sub text in the language list
  status: number; // 0: Inactive, 1: Active
}

interface ConnectingProps {
  setConnected: (state: boolean) => void;
  text: string;
}

interface LanguageProviderProps {
  children: ReactNode;
  lang: language;
  setLang: Dispatch<language>;
  alerts: alert[];
  setAlerts: Dispatch<alert>;
};

interface LanguageProviderInitialState {
  dict: any;
  lang: language;
  setLang: Dispatch<language>;
  createAlert: (text: string) => void;
  clearAlerts: () => void;
  blockAlerts: () => void;
}

interface WaitingRoomProps {
  roomData: GameData | undefined;
  socket: Socket;
}

interface RoomListProps {
  duration: number;
  setTransition: (state: boolean) => void;
  transition: boolean;
}

interface RoomHeaderProps {
  roomData: GameData | undefined;
}

export interface GameRoomProps {
  roomData: GameData;
  socket: Socket;
}

interface GameIntroProps {
  title: string;
  text?: string;
  duration?: number;
  setter: (state: boolean) => void
}

interface LPProps {
  children: React.ReactNode;
};

interface SFXOptions {
  start?: number;
  duration?: number;
  volume?: number;
}

interface AudioProviderInitialState {
  audioRef: React.RefObject<HTMLAudioElement> | null;
  src: string;
  setSrc: React.Dispatch<string>;
  playing: boolean;
  setPlaying: React.Dispatch<boolean>;
  createSFX: (src: string, options?: SFXOptions) => void,
}

interface AlertsProps {
  alerts: alert[];
}