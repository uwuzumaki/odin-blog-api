import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAdmin = async (username2) => {
  const admin = await prisma.admin.findUnique({
    where: {
      username: username2,
    },
  });
  return admin;
};

const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

const getOnePost = async (id) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return post;
};

const createPost = async (title, content) => {
  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  return post;
};

const changeVisibility = async (id) => {
  const vis = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  const post = await prisma.post.update({
    where: {
      id,
    },
    data: {
      status: {
        set: !vis.status,
      },
    },
  });
  return post;
};

const deletePost = async (id) => {
  console.log(id);
  const post = await prisma.post.delete({
    where: {
      id,
    },
  });
  return post;
};

const createComment = async (user, content, post_id) => {
  const name = user ? user : "Anonymous";
  const post = await prisma.comment.create({
    data: {
      name,
      content,
      postId: post_id,
    },
  });
  return post;
};

const getPostComments = async (id) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: id,
    },
  });
  return comments;
};

export default {
  getAdmin,
  getAllPosts,
  getOnePost,
  createPost,
  changeVisibility,
  deletePost,
  createComment,
  getPostComments,
};
