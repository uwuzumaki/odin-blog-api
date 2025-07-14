import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  return res.send("comment router");
});

export default router;
