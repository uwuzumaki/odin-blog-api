import express from "express";
import router from "./routers/index.js";
import passport from "passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

// App instantiation
const app = express();

import "./authentication/passport.js";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://elaborate-sherbet-930a23.netlify.app",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());

// Routes
app.use("/post", router.post);
app.use("/comment", router.comment);
app.use("/auth", router.auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
