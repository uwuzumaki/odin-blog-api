import { Router } from "express";
import postController from "../controller/post.js";
import passport from "passport";

const router = Router();

router.get("/", postController.getAllPosts);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.createPost
);

export default router;
