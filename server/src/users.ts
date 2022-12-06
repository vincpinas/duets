import { Iuser } from "./interfaces";

export default class UserManager {
  allUsers: Iuser[];

  constructor() {
    this.allUsers = [];
  }

  addUser({ id, name, room }: Iuser) {
    if (!name && !room) return { error: 'No name & no room was provided' }
    if (!name) return { error: 'No name was provided' }
    if (!room) return { error: 'No room was provided' }

    name = name.trim();
    room = room.trim().toLowerCase();

    const existingUser = this.allUsers.find((user: Iuser) => user.name === name);

    if (existingUser) {
      return { error: 'Username is already taken.' }
    }

    const user = { id, name, room };

    this.allUsers.push(user);

    return { user }
  }

  removeUser(id: string) {
    const index = this.allUsers.findIndex((user) => user.id === id);

    if (index !== -1) {
      return this.allUsers.splice(index, 1)[0];
    }
  }

  getUser = (id: string) => this.allUsers.find((user) => user.id === id);

  getUsersInRoom = (room: string) => this.allUsers.filter((user) => user.room === room);
}