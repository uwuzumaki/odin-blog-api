import jwt from "jsonwebtoken";
import db from "../db/queries.js";
import bcrypt from "bcryptjs";

const sign = async (username, password) => {
  const admin = await db.getAdmin(username);
  const match = await bcrypt.compare(password, admin.password);
  if (match) {
    const token = jwt.sign(
      { username: admin.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    return token;
  } else {
    return null;
  }
};

export default { sign };
