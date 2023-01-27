import { QuestionList } from "./game";

export interface IUser {
  id: string;
  name: string;
  room: string;
}

export interface IRoom {
  id: string;
  users: IUser[];
  status: number;
  maxplayers: number;
  questions: QuestionList;
}