import { PrismaClient , Prisma } from "../../../generated/prisma/client";
import { ResultModelTotalCount } from "../../../model/pagination";
import { RequestType } from "../../../generated/prisma/client";

type CriteriaRequestsByCriteriaAndPagination = {
    search?: string;
    request_type?: RequestType | RequestType[];
};

type ResultRequestsByCriteriaAndPagination = {
    request_number: string,
    title: string,
    request_type: RequestType,
    requester_name: string,
    requester_email: string,
    created_at: Date,
};

type RequestsByCriteriaAndPagination = {
    execute: (
        db: PrismaClient,
        page: number,
        limit: number,
        criteria: CriteriaRequestsByCriteriaAndPagination,
    ) => Promise<ResultModelTotalCount<ResultRequestsByCriteriaAndPagination>>;
};

export const repoCustomRequestsByCriteriaAndPagination: RequestsByCriteriaAndPagination = {
    execute: async (
        db: PrismaClient,
        page: number,
        limit: number,
        criteria: CriteriaRequestsByCriteriaAndPagination,
    ) => {
        const whereClause: Prisma.RequestsWhereInput = {
            is_delete: false,
        };

        if(criteria?.request_type) {
            whereClause.request_type = Array.isArray(criteria.request_type) ? { in: criteria.request_type } : criteria.request_type;
        }

        if (criteria?.search) {
            whereClause.OR = [
                {
                    request_number: {
                        contains: criteria.search,
                        mode: "insensitive",
                    },
                },
                {
                    title: {
                        contains: criteria.search,
                        mode: "insensitive",
                    },
                },
                {
                    requester_name: {
                        contains: criteria.search,
                        mode: "insensitive",
                    },
                },
            ];
        }

        const total_count = await db.requests.count({
            where: whereClause,
        });

        const skip = (page - 1) * limit;

        const requests = await db.requests.findMany({
            where: whereClause,
            orderBy: { created_at: "desc" },
            skip,
            take: limit,
            select: {
                request_number: true,
                title: true,
                request_type: true,
                requester_name: true,
                requester_email: true,
                created_at: true,
            }
        });

        const data: ResultRequestsByCriteriaAndPagination[] = requests.map((req) => {
            return {
                request_number: req.request_number,
                title: req.title,
                request_type: req.request_type,
                requester_name: req.requester_name,
                requester_email: req.requester_email,
                created_at: req.created_at,
            }
        });

        return {
            total_count,
            data
        };
    }
}