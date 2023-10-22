import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Todo } from "../models";

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find();
  res.status(StatusCodes.OK).json({ todos });
};

export const createNewTodo = async (req: Request, res: Response) => {
  const todo = await Todo.create(req.body);
  res.status(StatusCodes.CREATED).json({ todo });
};
