import express from "express";
import router from "./routers/index.js";
import "dotenv/config";

// App instantiation
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/post", router.post);
app.use("/comment", router.comment);
app.use("/login", router.auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
