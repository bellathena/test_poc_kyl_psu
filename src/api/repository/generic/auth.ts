import { PrismaClient, Users } from "../../../generated/prisma/client";
import {
  UsersWhereInput,
  UsersWhereUniqueInput,
  UsersUpdateInput,
  UsersOrderByWithRelationInput,
  UsersCreateInput,
} from "../../../generated/prisma/models";

type User = {
  // GET
  search: (
    db: PrismaClient ,
    condition: UsersWhereInput,
    orderBy?: UsersOrderByWithRelationInput,
  ) => Promise<Users | null>;
  searches: (
    db: PrismaClient ,
    condition: UsersWhereInput,
    orderBy?: UsersOrderByWithRelationInput,
  ) => Promise<Users[]>;

  // Create, Update, Soft Delete
  create: (db: PrismaClient, data: UsersCreateInput) => Promise<Users>;
  update: (
    db: PrismaClient,
    condition: UsersWhereUniqueInput,
    data: UsersUpdateInput,
  ) => Promise<Users>;
  softDelete: (db: PrismaClient, condition: UsersWhereUniqueInput) => Promise<Users>;
};

export const repoGenericUser: User = {
  search: async (
    db: PrismaClient ,
    condition: UsersWhereInput,
    orderBy?: UsersOrderByWithRelationInput,
  ) => {
    return await db.users.findFirst({
      where: condition,
      orderBy,
    });
  },

  searches: async (
    db: PrismaClient ,
    condition: UsersWhereInput,
    orderBy?: UsersOrderByWithRelationInput,
  ) => {
    return await db.users.findMany({
      where: condition,
      orderBy,
    });
  },

  create: async (db: PrismaClient, data: UsersCreateInput) => {
    return await db.users.create({
      data,
    });
  },

  update: async (
    db: PrismaClient,
    condition: UsersWhereUniqueInput,
    data: UsersUpdateInput,
  ) => {
    return await db.users.update({
      where: condition,
      data,
    });
  },

  softDelete: async (db: PrismaClient, condition: UsersWhereUniqueInput) => {
    return await db.users.update({
      where: condition,
      data: {
        is_delete: true,
      },
    });
  },
};
