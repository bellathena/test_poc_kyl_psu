import { t } from "elysia";
import { RequestType } from "../../../../generated/prisma/enums";

export const criteriaRequest = t.Object({
    search: t.Optional(t.String()),
    request_type: t.Optional(t.Union([t.Enum(RequestType), t.Array(t.Enum(RequestType))]))
});

export const requestRequestsByCriteriaAndPagination = t.Object({
    page: t.Number({ minimum: 1 }),
    limit: t.Number({ minimum: 1 }),
    criteria: t.Optional(criteriaRequest)
});

export const requestResponse = t.Object({
    request_number: t.String(),
    title: t.String(),
    request_type: t.Enum(RequestType),
    requester_name: t.String(),
    requester_email: t.String(),
    created_at: t.Date(),
});

export const resultRequestByCriteriaAndPagination = t.Object({
    data: t.Array(requestResponse),
    pagination: t.Object({
        total_count: t.Number(),
        total_page: t.Number()
    })
});

export type CriteriaRequest = typeof criteriaRequest.static;
export type RequestRequestByCriteriaAndPagination = typeof requestRequestsByCriteriaAndPagination.static;
export type RequestResponse = typeof requestResponse.static;
export type ResultRequestByCriteriaAndPagination = typeof resultRequestByCriteriaAndPagination.static;