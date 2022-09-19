const express = require("express");
const router = express.Router();

//Get all the Todos
router.get("/get-todos", async (req, res) => {
  //
});

//Get a todo by id
router.get("/get-todo/:id", async (req, res) => {
  //
});

//Post a todo
router.post("/add", async (req, res) => {
  //
});

//Post multiple todo
router.post("/add-multiple", async (req, res) => {
  //
});

//Update a todo
router.put("/update/:id", async (req, res) => {
  //
});

//Delete a todo
router.delete("/delete/:id", async (req, res) => {
  //
});

module.exports = router;
