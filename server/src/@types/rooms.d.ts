interface IUser {
  id: string;
  name: string;
  room: string;
}

interface IRoom {
  id: string;
  users: IUser[];
  status: number;
  min_players: number;
  max_players: number;
  questions: QuestionList;
  start_delay: number;
}