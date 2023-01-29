interface IUser {
  id: string;
  name: string;
  room: string;
}

interface IRoom {
  id: string;
  users: IUser[];
  status: number;
  maxplayers: number;
  questions: QuestionList;
}