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

export default { getAdmin, getAllPosts, getOnePost, createPost, createComment };
