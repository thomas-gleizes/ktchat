const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const Moment = require("moment");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const log = (...str) =>
  console.log(`${Moment().format("YYYY-MM-DD HH:mm:ss")} >`, ...str);

app.use(cors());

io.on("connection", (socket) => {
  log("client connected");

  socket.on("join", (content) => {
    log("join", content);
    socket.broadcast.emit("join", content);
  });

  socket.on("disconnect", () => {
    log("connected left");
  });
});

server.listen(8080, () => {
  console.log(
    "\x1b[32m",
    "===================== Server start =====================",
    "\x1b[0m"
  );
});
