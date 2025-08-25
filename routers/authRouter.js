import passport from "passport";
import { Router } from "express";
import authController from "../controller/auth.js";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authController.loginPost
);

router.get(
  "/verify",
  passport.authenticate("jwt", { session: false }),
  authController.verifyGet
);

router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  authController.logoutGet
);
// router.post("/register", authController.registerPost);

export default router;
