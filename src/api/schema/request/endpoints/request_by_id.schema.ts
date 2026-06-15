import { t } from "elysia";
import { RequestType } from "../../../../generated/prisma/enums";

export const requestRequestById = t.Object({
    request_id: t.String({ format: "uuid" })
});

export const resultRequestById = t.Object({
    request_id: t.String(),
    request_number: t.String(),
    title: t.String(),
    request_type: t.Enum(RequestType),
    requester_name: t.String(),
    requester_email: t.String(),
    detail: t.String(),
    is_delete: t.Boolean(),
    created_at: t.Date(),
    updated_at: t.Date(),
});

export type RequestRequestById = typeof requestRequestById.static;
export type ResultRequestById = typeof resultRequestById.static;
