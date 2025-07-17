import { Router } from "express";
import homeController from "../controller/home.js";

const router = Router();

router.get("/", homeController.homeGet);

export default router;
