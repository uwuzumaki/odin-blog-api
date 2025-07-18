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

export default { getAdmin, getAllPosts };
