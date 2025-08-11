import jwt from "../authentication/jwt.js";
// import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const loginPost = async (req, res) => {
  const token = await jwt.sign(req.body.username, req.body.password);
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ token });
};

// One time registration for Admin user
// const registerPost = async (req, res) => {
//   console.log(req.body.username);
//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   const user = await prisma.admin.create({
//     data: {
//       username: req.body.username,
//       password: hashedPassword,
//     },
//   });
//   res.json({
//     response: user,
//   });
// };

export default {
  loginPost,
  //   registerPost,
};
