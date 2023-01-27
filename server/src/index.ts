// Libs
import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'
// Custom functions
import router from './router'
import RoomManager from './Classes/rooms'
import userEvents from './Events/UserEvents'
import roomEvents from './Events/RoomEvents'
import gameEvents from './Events/GameEvents'

const rooms = new RoomManager();

// If no production PORT is available it tries to run on PORT 5000 for development.
const PORT = process.env.PORT || 5000;

// Express and http server to be passed to the Socket.io server.
const app = express();
const server = http.createServer(app);

// The actual socket.io server to handle process all your events
const io = new Server(server, {
  cors: {

  }
})

// Socket.io Event Handlers.
io.on('connection', (socket) => {
  userEvents(socket, rooms, io)
  roomEvents(socket, rooms, io)
  gameEvents(socket, rooms, io)
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`Welcome, Server has started on port ${PORT}`));