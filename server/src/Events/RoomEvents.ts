import { Server, Socket } from "socket.io";
import RoomManager from "../Classes/rooms";

export default function roomEvents(socket: Socket, rooms: RoomManager, io: Server) {
  // Return room data on request.
  socket.on("room-info", (room, callback) => {
    let temp = rooms.getRoom(room.toLowerCase())

    callback(temp)
  });

  // Set room status to starting if required amount of players is present.
  socket.on("user-join", ({ roomId }) => {
    roomId = roomId.toLowerCase();
    const room = rooms.getRoom(roomId)
    if (room && room?.users.length >= 2) {
      room.status = 1
      io.to(room.id).emit('room-info', room);
    }
  })

  // Set room status back to waiting if the game hasn't started yet and players is less than required.
  socket.on("user-disconnect", ({ roomId }) => {
    roomId = roomId.toLowerCase();
    const room = rooms.getRoom(roomId)
    if (room && room?.users.length < 2 && room.status !== 2) {
      room.status = 0
      io.to(room.id).emit('room-info', room);
    }
  })
}