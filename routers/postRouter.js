import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("post router");
});

export default router;
