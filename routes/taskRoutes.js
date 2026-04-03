import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// CREATE TASK
router.post("/", async (req, res) => {
  try {
    // validate request body
    await taskValidationSchema.validate(req.body, { abortEarly: false });

    const task = new Task(req.body);
    const savedTask = await task.save();

    res.status(201).json(savedTask);

  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        errors: err.errors
      });
    }

    res.status(500).json({ error: err.message });
  }
});

// GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;