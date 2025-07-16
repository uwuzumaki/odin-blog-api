import passport from "passport";
import { Router } from "express";
import authController from "../controller/auth.js";

const router = Router();

router.post(
  "/",
  passport.authenticate("local", { session: false }),
  authController.loginPost
);
// router.post("/register", authController.registerPost);

export default router;
