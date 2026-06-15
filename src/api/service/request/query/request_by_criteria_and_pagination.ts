import { db } from "../../../../lib/prisma";
import { ResultModelPagination } from "../../../../model/pagination";
import { calculateTotalPage } from "../../../../utils/pagination";
import { repoCustomRequestsByCriteriaAndPagination } from "../../../repository/custom/request_by_criteria_and_pagination";
import { RequestType } from "../../../../generated/prisma/enums";

type CriteriaRequestsByCriteriaAndPagination = {
    search?: string;
    request_type?: RequestType | RequestType[];
};

type RequestRequestsByCriteriaAndPagination = {
    page: number,
    limit: number,
    criteria: CriteriaRequestsByCriteriaAndPagination,
}

type ModelRequestsByCriteriaAndPagination = {
    request_id: string,
    request_number: string,
    title: string,
    request_type: RequestType,
    requester_name: string,
    requester_email: string,
    created_at: Date,
};

export const requestsByCriteriaAndPagination = async (
    body: RequestRequestsByCriteriaAndPagination
) : Promise<ResultModelPagination<ModelRequestsByCriteriaAndPagination>> => {

    const { page , limit , criteria } = body;

    const { data, total_count } = 
    await repoCustomRequestsByCriteriaAndPagination.execute(
        db,
        page,
        limit,
        criteria
    );
    
    return {
        data,
        pagination: {
            total_count,
            total_page: calculateTotalPage(total_count,limit)
        }
    }
}