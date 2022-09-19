const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");

const Todo = new mongoose.model("Todo", todoSchema);

//Get all the Todos
router.get("/get-todos", async (req, res) => {
  await Todo.find()
    .select({
      _id: 0,
      __v: 0,
    })
    .exec((err, data) => {
      if (err) {
        res.status(400).json({ status: "Server error" });
      } else {
        res.json({
          status: "Success",
          data: data,
        });
      }
    });
});

//Get a todo by id
router.get("/get-todo/:id", async (req, res) => {
  await Todo.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Server error" });
    } else {
      res.json({
        status: "Success",
        data: data,
      });
    }
  }).clone();
});

//Post a todo
router.post("/add", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save((err, data) => {
    if (err) {
      res.status(400).json({ status: "Bad request" });
    } else {
      res.json({
        status: "Todo added successfully",
        data: data,
      });
    }
  });
});

//Post multiple todo
router.post("/add-multiple", async (req, res) => {
  await Todo.insertMany(req.body, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Bad request" });
    } else {
      res.json({
        status: "Todo added successfully",
        data: data,
      });
    }
  });
});

//Update a todo
router.put("/update/:id", async (req, res) => {
  await Todo.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: {
        status: req.body.status,
        is_completed: req.body.is_completed,
      },
    },
    {},
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Bad request" });
      } else {
        res.json({
          status: "Success",
          message: "Todo updated successfully",
        });
      }
    }
  ).clone();
});

//Delete a todo
router.delete("/delete/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Server error" });
    } else {
      res.json({
        status: "Success",
        data: data,
      });
    }
  }).clone();
});

module.exports = router;
