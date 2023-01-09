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
}

export interface IConfig {
  max_players: number;
  min_players: number;
  start_delay: number;
}