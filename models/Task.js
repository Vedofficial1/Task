import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  dueDate: String,
  completed: {
    type: Boolean,
    default: false
  },
  category: String,
  estimated: String
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);