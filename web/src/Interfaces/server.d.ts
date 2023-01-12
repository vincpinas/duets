export interface Player {
  id: string;
  name: string;
  room: string;
}

interface GameData {
  id: string;
  users: Player[];
  status: number;
  maxplayers: number;
}