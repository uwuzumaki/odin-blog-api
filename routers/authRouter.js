import { Router } from "express";
import authController from "../controller/auth.js";

const router = Router();

router.post("/", authController.loginPost);
// router.post("/register", authController.registerPost);

export default router;
