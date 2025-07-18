import db from "../db/queries.js";

const getAllPosts = async (req, res) => {
  const posts = db.getAllPosts();
  res.json({ posts });
};

const createPost = (req, res) => {
  res.json({ msg: "wahoo" });
};

export default {
  getAllPosts,
  createPost,
};
