const express = require("express");
const { ToDoModel } = require("../models/toDoModel");

const toDoRouter = express.Router();

toDoRouter.post("/create", async (req, res) => {
  try {
    const todo = new ToDoModel(req.body);
    await todo.save();
    
    res.send({ msg: "A new todo has been created", data: {todo} });

  } catch (error) {
    res.send({ error: error });
  }
});

toDoRouter.get("/", async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.send(todos);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

toDoRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ToDoModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "Todo has been updated" });
  } catch (error) {
    res.send({ error: error });
  }
});


toDoRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ToDoModel.findByIdAndDelete({ _id: id }, req.body);
    res.send({ msg: "Todo has been deleted" });
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = { toDoRouter };
