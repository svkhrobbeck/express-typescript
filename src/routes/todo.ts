import { Router } from "express";
import { getAllTodos } from "../controllers/todo";

const router: Router = Router();

router.get("/", getAllTodos);

export default router;
