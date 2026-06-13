import { PrismaClient, Requests } from "../../../generated/prisma/client";
import { RequestsCreateInput , RequestsUpdateInput , RequestsWhereUniqueInput , RequestsWhereInput } from "../../../generated/prisma/models";

type RequestRepository = {
    search: (
        db: PrismaClient,
        condition: RequestsWhereInput,
    ) => Promise<Requests | null>;
    searches: (
        db: PrismaClient,
        condition: RequestsWhereInput,
    ) => Promise<Requests[]>;

    create: (
        db: PrismaClient,
        data: RequestsCreateInput,
    ) => Promise<Requests>;
    update: (
        db: PrismaClient,
        condition: RequestsWhereUniqueInput,
        data: RequestsUpdateInput,
    ) => Promise<Requests>;
    softDelete: (
        db: PrismaClient,
        condition: RequestsWhereUniqueInput,
    ) => Promise<Requests>;
};

export const repoGenericRequest: RequestRepository = {
    search: async (
        db: PrismaClient,
        condition: RequestsWhereInput,
    ) => {
        return await db.requests.findFirst({
            where: condition
        });
    },
    searches: async (
        db: PrismaClient,
        condition: RequestsWhereInput,
    ) => {
        return await db.requests.findMany({
            where: condition,
        });
    },

    create: async (
        db: PrismaClient, 
        data: RequestsCreateInput
    ) => {
        return await db.requests.create({
            data,
        });
    },

    update: async (
        db: PrismaClient,
        condition: RequestsWhereUniqueInput,
        data: RequestsUpdateInput,
    ) => {
        return await db.requests.update({
            where: condition,
            data,
        });
    },

    softDelete: async (
        db: PrismaClient, 
        condition: RequestsWhereUniqueInput
    ) => {
        return await db.requests.update({
            where: condition,
            data: {
                is_delete: true,
            },
        });
    },
}