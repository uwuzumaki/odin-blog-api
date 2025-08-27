import { Router } from "express";
import commentController from "../controller/comment.js";

const router = Router();

router.post("/:comment_id", commentController.createComment);
router.get("/:comment_id", commentController.getAllComments);
router.delete("/:comment_id", commentController.deleteComment);

export default router;
