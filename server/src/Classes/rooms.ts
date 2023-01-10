import { IUser, IRoom, IConfig } from "../Interfaces/rooms";
import config from "./config";

export default class RoomManager {
  allRooms: IRoom[];
  config: IConfig;

  constructor() {
    this.allRooms = [];
    this.config = config;
  }

  // Add user to a room if the room exists, otherwise create a new room and add the user to that room.
  addUser({ id, name, room }: IUser) {
    if (!name && !room) return { error: 'No name & no room was provided' }
    if (!name) return { error: 'No name was provided' }
    if (!room) return { error: 'No room was provided' }

    name = name.trim();
    room = room.trim().toLowerCase();

    const existingRoom = this.allRooms.find((roomItem: IRoom) => roomItem.id === room);

    const user = { id, name, room };

    if (existingRoom) {
      if (existingRoom?.users.find((userItem: IUser) => userItem.name === user.name)) return { error: 'This name is already taken.' }
      if (existingRoom?.users.length >= this.config.max_players) return { error: 'Room has reached capacity' }
      if (existingRoom?.status === 2) return { error: 'Room has already started' }
      existingRoom.users.push(user);
    } else {
      this.allRooms.push({ id: room, users: [], status: 0, maxplayers: this.config.max_players });
      this.allRooms.find((roomItem: IRoom) => roomItem.id === room)?.users.push(user);
    }

    return { user }
  }

  // Filter through rooms using id and return a specific room object.
  getRoom = (roomId: string) => this.allRooms.find((roomItem: IRoom) => roomItem.id === roomId);

  // Filter through users in specific room and return a specific user object.
  getUserInRoom = (roomId: string, userId: string) => this.getRoom(roomId)?.users.find((user: IUser) => user.id === userId);

  // Remove a user from a specific room.
  removeUser(roomId: string, userId: string) {
    const userRoom = this.getRoom(roomId);
    const index = userRoom?.users.findIndex((user: IUser) => user.id === userId);

    if (typeof index !== "undefined" && index !== -1) {
      return userRoom?.users.splice(index, 1)[0];
    }
  }

  removeRoom = (roomId: string) => {
    const index = this.allRooms.findIndex((room: IRoom) => room.id === roomId);

    if (typeof index !== "undefined" && index !== -1) {
      return this.allRooms.splice(index, 1)[0];
    }
  }
}