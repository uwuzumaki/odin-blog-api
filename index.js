import express from "express";
import router from "./routers/index.js";
import passport from "passport";
import "dotenv/config";

// App instantiation
const app = express();

import "./authentication/passport.js";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Routes
app.use("/post", router.post);
app.use("/comment", router.comment);
app.use("/login", router.auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
