import { Socket } from "socket.io";
import RoomManager from "../Classes/rooms";
import { IroomData } from "../Interfaces/rooms";

export default function roomEvents(socket: Socket, rooms: RoomManager) {
  // Return room data on request.
  socket.on("room-info", (room, callback) => {
    let temp: IroomData = Object.assign({}, rooms.getRoom(room))
    delete temp.users
    
    callback(temp)
  });
}