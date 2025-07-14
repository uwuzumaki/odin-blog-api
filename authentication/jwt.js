import jwt from "jsonwebtoken";
import db from "../db/queries.js";
import bcrypt from "bcryptjs";

const sign = async (username, password) => {
  const admin = await db.getAdmin(username);
  const match = await bcrypt.compare(password, admin.password);
  if (match) {
    const token = jwt.sign({ admin: admin }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } else {
    return null;
  }
};

const getToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
};

export default { sign, getToken };
