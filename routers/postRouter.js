import { Router } from "express";
import authentication from "../authentication/jwt.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/", authentication.getToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      res.json({ err });
    } else {
      res.json({ data });
    }
  });
});

export default router;
