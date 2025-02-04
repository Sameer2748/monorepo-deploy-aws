import { WebSocketServer } from "ws";
const client = require("@repo/db/client");

const wsserver = new WebSocketServer({ port: 3001 });

wsserver.on("connection", async (socket) => {
  console.log("client connected");
  await client.user.create({
    data: {
      username: Math.random().toString(),
      email: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  socket.on("message", (message) => {
    console.log("received message:", message);
  });

  socket.on("close", () => {
    console.log("client disconnected");
  });
});
