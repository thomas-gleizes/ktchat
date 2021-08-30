const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("join", (content) => {
    console.log("join", content);
    socket.broadcast.emit("join", content);
  });

  socket.on("disconnect", () => {
    console.log("client left");
  });
});

server.listen(8080, () => {
  console.log(
    "\x1b[32m",
    "===================== Server start =====================",
    "\x1b[0m"
  );
});
