import { t } from "elysia";
import { RequestType } from "../../../../generated/prisma/enums";

export const requestUpdateRequest = t.Object({
    request_id: t.String(),
    title: t.Optional(t.String()),
    request_type: t.Optional(t.Enum(RequestType)),
    requester_name: t.Optional(t.String()),
    requester_email: t.Optional(t.String()),
    detail: t.Optional(t.String()),
});

export const resultUpdateRequest = t.String({ example: "OK" });

export type RequestUpdateRequest = typeof requestUpdateRequest.static;
export type ResultUpdateRequest = typeof resultUpdateRequest.static;