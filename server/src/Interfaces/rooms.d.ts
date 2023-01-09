export interface Iuser {
  id: string;
  name: string;
  room: string;
}

export interface Iroom {
  id: string;
  users: Iuser[];
  status: number;
  maxplayers: number;
}