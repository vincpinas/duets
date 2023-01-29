interface RubberSpanProps {
  letters: string;
  margin?: number|string;
  hero?: boolean;
  emoji?: string;
  br?: boolean;
}

interface alert {
  text: string;
  type?: number;
}

interface language {
  lang: string; // Language name
  abbreviation: string; // Language code
  sub?: string | null; // Sub text in the language list
  status: number; // 0: Inactive, 1: Active
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
  alerts: alert[];
  setAlerts: Dispatch<alert>;
}

interface WaitingRoomProps {
  roomData: GameData | undefined;
}

interface RoomInterface {
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

interface RoomHeaderProps {
  roomData: GameData | undefined;
}

interface GameRoomProps {
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