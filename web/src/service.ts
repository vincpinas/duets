import { io } from "socket.io-client";
export const ENDPOINT = window.location.href.includes("localhost") || window.location.href.includes("127.0.0.1") ? "localhost:5000" : "https://duetsserver.onrender.com/";

export const socket = io(ENDPOINT, {
  closeOnBeforeunload: false,
});