import { QuestionList } from "./game"

export interface IUser {
  id: string;
  name: string;
  room: string;
  score: number;
  questions_answered: number;
}

export interface IncomingUserData {
  id: string;
  name: string;
  room: string;
}

export interface IRoom {
  id: string;
  users: IUser[];
  status: number;
  min_players: number;
  max_players: number;
  questions: QuestionList;
  start_delay: number;
  winners?: IUser[];
  users_done?: string[];
}