import { db } from "../../../../lib/prisma";
import { repoGenericRequest } from "../../../repository/generic/request";

type ModelUpdateRequest = {
    request_id: string;
    title?: string;
    request_type?: string;
    requester_name?: string;
    requester_email?: string;
    detail?: string;
};

export const updateRequest = async (body: ModelUpdateRequest) => {
    const { request_id, ...data } = body;
    return await repoGenericRequest.update(db, { request_id }, data as any);
};
