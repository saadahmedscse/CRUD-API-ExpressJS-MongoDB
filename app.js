const express = require("express");
const mongoose = require("mongoose");
const socket = require("socket.io");
const fs = require("fs");
const todoHandler = require("./routeHandler/todoHandler");

//Express app initialization
const app = express();
app.use(express.json());
app.use(express.static("public"));

//Database connection with mongoose
mongoose
  .connect("mongodb://localhost/todo_app")
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log(err));

//App routes
app.use("/api", todoHandler);

const server = app.listen(3000);

const io = socket(server);

let count = 0;

io.on("connection", (socket) => {
  console.log(`New socket connection: ${socket.id}`);

  socket.on("counter", () => {
    count++;
    io.emit("counter", count);
  });
});
