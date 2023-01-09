import { Server, Socket } from "socket.io";
import RoomManager from "../Classes/rooms";

export default function userEvents(socket: Socket, rooms: RoomManager, io: Server) {
  // User joins room event.
  socket.on('user-join', ({ name, roomId }) => {

    const { error, user } = rooms.addUser({ id: socket.id, name, room: roomId });

    if (error) {
      return socket.emit('message', { type: 'error', message: error });
    }

    if (user) {
      socket.join(user.room);
      socket.emit('message', { type: 'sucess', message: `Welcome to the fun ${user.name}!` })
      io.to(user.room).emit('message', { type: `message`, message: `Player ${user.name} has joined the fray` })
      io.to(user.room).emit('room-info', rooms.getRoom(user.room) );
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
      io.to(copy.room).emit('room-info', rooms.getRoom(copy.room));
    }
  });
}