import { Schema, model, Document } from "mongoose";

interface ITodo extends Document {
  task: string;
  status: boolean;
}

const todoSchema = new Schema<ITodo>({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

export default model<ITodo>("Todo", todoSchema);
