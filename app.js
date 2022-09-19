const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require('./routeHandler/todoHandler');

//Express app initialization
const app = express();
app.use(express.json());

//Database connection with mongoose
mongoose
  .connect("mongodb://localhost/todo_app")
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log(err));

//App routes
app.use('/api', todoHandler);

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});
