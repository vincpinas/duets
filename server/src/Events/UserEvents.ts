import { Server, Socket } from "socket.io";
import RoomManager from "../Classes/rooms";

export default function userEvents(socket: Socket, rooms: RoomManager, io: Server) {
  // User joins room event.
  socket.on('user-join', ({ name, roomId }) => {
    const { error, user } = rooms.addUser({ id: socket.id, name, room: roomId });

    if (error) return socket.emit('message', { type: 'error', message: error });

    if (user && typeof error === "undefined") {
      socket.join(user.room);
      io.to(user.room).emit('room-info', rooms.getRoom(user.room) );
    }
  });

  // User leaves room event.
  socket.on('user-disconnect', ({ roomId }) => {
    roomId = roomId.toLowerCase();
    let copy = Object.assign({}, rooms.getUserInRoom(roomId, socket.id))

    if (copy) {
      rooms.removeUser(roomId, socket.id);
      io.to(copy.room).emit('room-info', rooms.getRoom(copy.room));
    }
  });
}