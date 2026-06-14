import { db } from "../../../../lib/prisma";
import { repoGenericRequest } from "../../../repository/generic/request";

type ModelDeleteRequest = {
    request_id: string;
};

export const deleteRequest = async (body: ModelDeleteRequest) => {
    return await repoGenericRequest.softDelete(db, { request_id: body.request_id });
};
