import { Server, Socket } from "socket.io";
import RoomManager from "../Classes/rooms";
import { IRoom } from "../@types/rooms";

export default function roomEvents(socket: Socket, rooms: RoomManager, io: Server) {
  // Return room data on request.
  socket.on("room-list", (callback) => {
    let temp = rooms.allRooms.filter((room: IRoom) => room.status !== 2 && room.users.length < room.max_players);

    callback(temp);
  });

  socket.on("user-ready", ({ roomId }, callback) => {
    let temp = false, users_ready = [socket.id];
    
    if(roomId) {
      temp = true;
      roomId = roomId.toLowerCase();
      const room = rooms.getRoom(roomId);

      if(!room.users_ready) room.users_ready = users_ready;
      else room.users_ready.push(socket.id);
    }

    callback(temp);
  });

  /* 
    Set room status from waiting (0) to starting (1) when minimum amount of players is present.
    Set a starting period of 30sec before setting status to running (2) and no more players can join.
  */
  socket.on("user-ready", ({ roomId }, callback) => {
    roomId = roomId.toLowerCase();
    const room = rooms.getRoom(roomId);
    io.to(room.id).emit('room-info', room);
    if (room && room?.users.length >= rooms.config.min_players && room.users_ready.length === room.users.length) {
      room.status = 1
      io.to(room.id).emit('room-info', room);

      setTimeout(() => {
        if (room.status === 1) {
          room.status = 2
          io.to(room.id).emit('room-info', room);
        }
      }, rooms.config.start_delay)
    }
  })

  // Set room status back to waiting if the game hasn't started yet and amount players is less than required.
  socket.on("user-disconnect", ({ roomId }) => {
    roomId = roomId.toLowerCase();
    const room = rooms.getRoom(roomId);
    if (room && room?.users.length < rooms.config.min_players && room.status !== 2) {
      room.status = 0
      io.to(room.id).emit('room-info', room);
    }
  })

  // Remove room when amount of players hits 0.
  socket.on("user-disconnect", ({ roomId }) => {
    roomId = roomId.toLowerCase();
    const room = rooms.getRoom(roomId);
    
    if(room && room.users_ready && room.users_ready.includes(socket.id)) {
      const index = room.users_ready.findIndex(id => socket.id === id)
      room.users_ready.splice(index, 1)
    }

    if (room && room?.users.length <= 0) {
      rooms.removeRoom(roomId);
    }
  })
}