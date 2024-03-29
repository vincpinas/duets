interface Player {
  id: string;
  name: string;
  room: string;
  questions_answered?: number;
  score?: number;
}

interface QuestionList {
  name: string;
  description: string;
  questions: Question[];
}

interface Question {
  question: string;
  answers: { a: string; c: boolean | number; }[];
}

interface GameData {
  id: string;
  users: Player[];
  status: number;
  min_players: number;
  max_players: number;
  questions: QuestionList;
  start_delay: number;
  winners: Player[];
  users_done: string[];
  users_ready: string[];
}

interface ServerInfo {
  version: string;
  status: number;
}