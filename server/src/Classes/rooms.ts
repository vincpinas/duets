import { RoomConfig } from "./config";
import { IncomingUserData, IRoom, IUser } from "../@types/rooms";

export default class RoomManager {
  allRooms: IRoom[];
  config: RoomConfig;

  constructor() {
    this.allRooms = [];
    this.config = new RoomConfig();
  }

  // Add user to a room if the room exists, otherwise create a new room and add the user to that room.
  addUser({ id, name, room }: IncomingUserData) {
    if (!name && !room) return { error: 'No name & no room was provided' }
    if (!name) return { error: 'No name was provided' }
    if (!room) return { error: 'No room was provided' }

    name = name.trim();
    room = room.trim().toLowerCase();

    const existingRoom = this.allRooms.find((roomItem: IRoom) => roomItem.id === room);

    const user = { id, name, room, score: 0, questions_answered: 0, };

    if (existingRoom) {
      if (existingRoom?.users.find((userItem: IUser) => userItem.name === user.name)) return { error: 'This name is already taken.' }
      if (existingRoom?.users.length >= this.config.max_players) return { error: 'Room has reached capacity' }
      if (existingRoom?.status === 2) return { error: 'Room has already started' }
      existingRoom.users.push(user);
    } else {
      this.allRooms.push({
        id: room,
        users: [user],
        status: 0,
        min_players: this.config.min_players,
        max_players: this.config.max_players,
        questions: this.config.randomize(this.config.questions_lists),
        start_delay: this.config.start_delay,
      });
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