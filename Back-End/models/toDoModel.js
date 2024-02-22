const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema(
  {
    todo: String,
    // required: true,
  },
  {
    versionKey: false,
  }
);

const ToDoModel = mongoose.model("todo", toDoSchema);

module.exports = { ToDoModel };
