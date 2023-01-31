import { Server, Socket } from "socket.io";
import RoomManager from "../Classes/rooms";

export default function gameEvents(socket: Socket, rooms: RoomManager, io: Server) {
  socket.on("game-validate-question", ({ bool, roomId }, callback) => {
    let user = rooms.getUserInRoom(roomId, socket.id);
    if (bool) {
      user.score++
    }

    user.questions_answered++
  });

  socket.on("game-validate-question", ({ bool, roomId }) => {
    let temp = false, users_done = [];
    const room = rooms.getRoom(roomId)

    room.users.forEach(user => {
      if (user.questions_answered === room.questions.questions.length && !users_done.includes(user.id)) {
        users_done.push(user.id)
      }
    })

    if (users_done.length === room.users.length) {
      temp = true;
      room.winners = room.users.sort((a, b) => b.score - a.score).splice(0, 3);
    }

    room.users_done = users_done;

    io.to(roomId).emit("game-end-result", temp)
    io.to(roomId).emit("room-info", room)
  });
}