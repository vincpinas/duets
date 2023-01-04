import { Server, Socket } from "socket.io";
import RoomManager from "../rooms";

export default function userEvents(socket: Socket, rooms: RoomManager, io: Server) {
  // User joins room event.
  socket.on('user-join', ({ name, room }) => {

    const { error, user } = rooms.addUser({ id: socket.id, name, room });

    if (error) {
      return socket.emit('message', { type: 'error', message: error });
    }

    if (user) {
      socket.join(user.room);
      socket.emit('message', { type: 'sucess', message: `Welcome to the fun ${user.name}!` })
      io.to(user.room).emit('message', { type: `message`, message: `Player ${user.name} has joined the fray` })
      io.to(user.room).emit('user-update', rooms.getRoom(user.room)?.users );
    }
  });

  // User leaves room event.
  socket.on('user-disconnect', ({ roomId }) => {
    roomId = roomId.toLowerCase();

    const user = rooms.getUserInRoom(roomId, socket.id)
    let copy = Object.assign({}, user)

    if (copy) {
      io.to(copy.room).emit('message', {
        type: 'message',
        message: 'Looks like a player has left!'
      })
      rooms.removeUser(roomId, socket.id);
      io.to(copy.room).emit('user-update', rooms.getRoom(copy.room)?.users);
    }
  });
}