import db from "../db/queries.js";

const createComment = async (req, res) => {
  const id = req.params.comment_id;
  const post = await db.createComment(req.body.user, req.body.content, id);
  res.json(post);
};

const getAllComments = async (req, res) => {
  const id = req.params.comment_id;
  const comments = await db.getPostComments(id);
  res.json(comments);
};

const deleteComment = async (req, res) => {
  const id = req.params.comment_id;
  const comments = await db.deleteComment(id);
  res.json({ message: "Comment deleted" });
};

export default {
  createComment,
  getAllComments,
  deleteComment,
};
