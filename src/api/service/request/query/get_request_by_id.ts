import { db } from "../../../../lib/prisma";
import { repoGenericRequest } from "../../../repository/generic/request";

type ModelGetRequestById = {
    request_id: string;
};

export const getRequestById = async (body: ModelGetRequestById) => {
    const result = await repoGenericRequest.search(db, {
        request_id: body.request_id,
        is_delete: false
    });
    if (!result) throw new Error("Request not found");
    return result;
};
