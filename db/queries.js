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

export default { getAdmin };
