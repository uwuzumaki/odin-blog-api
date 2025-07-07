import express from "express";
import router from "./routers/index.js";

// App instantiation
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/post", router.post);
app.use("/comment", router.comment);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
