const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  is_completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = todoSchema;
