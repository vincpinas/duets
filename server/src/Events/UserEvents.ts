import { Server, Socket } from "socket.io";
import UserManager from "../users";

export default function userEvents(socket: Socket, users: UserManager, io: Server) {
  socket.on('user-join', ({ name, room }, callback) => {
    const { error, user } = users.addUser({ id: socket.id, name, room });

    if (error) {
      return socket.emit('message', { type: 'error', message: error });
    }

    if (user) {
      socket.join(user.room);
      socket.emit('message', { type: 'sucess', message: `Welcome to the fun ${user.name}!` })
      socket.broadcast.emit('message', { type: `message`, message: `Player ${user.name} has joined the fray` })
    }

    callback();
  });

  socket.on('user-disconnect', () => {
    const user = users.getUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', {
        type: 'message',
        message: 'Looks like a player has left!'
      })
    }

    users.removeUser(socket.id);
  });
}