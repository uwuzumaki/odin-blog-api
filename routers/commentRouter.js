import { Router } from "express";
import commentController from "../controller/comment.js";

const router = Router();

router.post("/", commentController.commentGet);

export default router;
