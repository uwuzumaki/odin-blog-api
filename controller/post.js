import db from "../db/queries.js";

const getAllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const posts = await db.getAllPosts(skip, limit);
  res.json({
    posts: posts.posts,
    page,
    totalPages: Math.ceil(posts.total / limit),
  });
};

const getOnePost = async (req, res) => {
  const post = await db.getOnePost(req.params.id);
  res.json(post);
};

const createPost = async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const post = await db.createPost(title, content);
  res.json(post);
};

const changeVisibility = async (req, res) => {
  const id = req.params.id;
  const post = await db.changeVisibility(id);
  res.json(post);
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await db.deletePost(id);
  res.json(post);
};

export default {
  getAllPosts,
  getOnePost,
  createPost,
  changeVisibility,
  deletePost,
};
