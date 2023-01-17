import { io } from "socket.io-client";
export const ENDPOINT = window.location.href.includes("localhost") ? 'localhost:5000' : 'localhost:5000';

export const socket = io(ENDPOINT, {
  closeOnBeforeunload: false,
});