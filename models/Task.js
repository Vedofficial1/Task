import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
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