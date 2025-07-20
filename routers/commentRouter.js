import { Router } from "express";
import commentController from "../controller/comment.js";

const router = Router();

router.post("/:post_id", commentController.createComment);
router.get("/:post_id", commentController.getAllComments);

export default router;
