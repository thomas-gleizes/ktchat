const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function (socket) {
  console.log("connection");

  socket.on("global", function (payload) {
    console.log("received global", payload);
  });

  socket.on("disconnect", function () {
    console.log("disconnect");
  });
});

http.listen(8080, function () {
  console.log("listening on *:3000");
});
