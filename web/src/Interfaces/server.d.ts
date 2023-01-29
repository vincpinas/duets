export interface Player {
  id: string;
  name: string;
  room: string;
}

export interface QuestionList {
  name: string;
  description: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answers: { a: string; c: boolean | number; }[];
}

interface GameData {
  id: string;
  users: Player[];
  status: number;
  maxplayers: number;
  questions: QuestionList;
}