import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// CREATE TASK
router.post("/", async (req, res) => {
  try {
    // Empty body check
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Body is required" });
    }

    // Create task directly from request body (manual id)
    const task = new Task(req.body);
    const savedTask = await task.save();

    res.status(201).json(savedTask);

  } catch (err) {
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