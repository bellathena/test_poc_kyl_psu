import { db } from "../../../../lib/prisma";
import { repoGenericRequest } from "../../../repository/generic/request";
import { generateRequestNumber } from "../../../../utils/request_number";

type ModelCreateRequest = {
    title: string;
    request_type: string;
    requester_name: string;
    requester_email: string;
    detail: string;
};

export const createRequest = async (body: ModelCreateRequest) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const countToday = await db.requests.count({
        where: { created_at: { gte: today } }
    });

    const request_number = generateRequestNumber(countToday + 1);

    return await repoGenericRequest.create(db, {
        request_number,
        title: body.title,
        request_type: body.request_type as any,
        requester_name: body.requester_name,
        requester_email: body.requester_email,
        detail: body.detail,
    });
};
