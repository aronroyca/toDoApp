const mongoose = require("mongoose");

const todoSchema = {
  user: String,
  task: String,
};

const TodoItem = mongoose.model("todo", todoSchema);

module.exports = TodoItem;
