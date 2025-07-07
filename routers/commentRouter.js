import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("comment router");
});

export default router;
