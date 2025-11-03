import express from "express";
import Todo from "../model/Todo.model.js";
const router = express.Router();

router.get("/allTodo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/create", async (req, res) => {
  const todoInput = req.body;
  console.log(req.body);
  
  try {
    const todo = await Todo.create(todoInput);
    res.status(201).json({ message: "Todo created." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const todoID = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(todoID);
    res.status(201).json({ message: "Todo deleted." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    const todo = await Todo.deleteMany({});
    res.status(200).json({ message: "All are Todo deleted." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put("/update/:id", async (req, res) => {
  const todoInput = req.body;
  const todoID = req.params.id;
  try {
    const todo = await Todo.findByIdAndUpdate(todoID,todoInput,{
        new:true
    });
    res.status(201).json({ message: "Todo updated." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
