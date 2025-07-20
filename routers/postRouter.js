import { Router } from "express";
import postController from "../controller/post.js";
import passport from "passport";

const router = Router();

router.get("/", postController.getAllPosts);

router.get("/:id", postController.getOnePost);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  postController.changeVisibility
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  postController.deletePost
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.createPost
);

export default router;
