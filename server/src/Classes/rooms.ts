import { Iuser, Iroom } from "../Interfaces/rooms";

export default class RoomManager {
  allRooms: Iroom[];

  constructor() {
    this.allRooms = [];
  }

  // Add user to a room if the room exists, otherwise create a new room and add the user to that room.
  addUser({ id, name, room }: Iuser) {
    if (!name && !room) return { error: 'No name & no room was provided' }
    if (!name) return { error: 'No name was provided' }
    if (!room) return { error: 'No room was provided' }

    name = name.trim();
    room = room.trim().toLowerCase();

    const existingRoom = this.allRooms.find((roomItem: Iroom) => roomItem.id === room);

    const user = { id, name, room };


    if (existingRoom) {
      if (existingRoom?.users.find((userItem: Iuser) => userItem.name === user.name)) return { error: 'This name is already taken.' }
      existingRoom.users.push(user);
    } else {
      this.allRooms.push({ id: room, users: [], status: 0, maxplayers: 8 });
      this.allRooms.find((roomItem: Iroom) => roomItem.id === room)?.users.push(user);
    }

    return { user }
  }

  // Remove a user from a specific room.
  removeUser(roomId: string, id: string) {
    const userRoom = this.getRoom(roomId);
    const index = userRoom?.users.findIndex((user: Iuser) => user.id === id);

    if (typeof index !== "undefined" && index !== -1) {
      return userRoom?.users.splice(index, 1)[0];
    }
  }

  // Filter through rooms using id and return a specific room object.
  getRoom = (roomId: string) => this.allRooms.find((roomItem: Iroom) => roomItem.id === roomId.toLowerCase());

  // Filter through users in specific room and return a specific user object.
  getUserInRoom = (roomId: string, id: string) => this.getRoom(roomId)?.users.find((user: Iuser) => user.id === id);
}