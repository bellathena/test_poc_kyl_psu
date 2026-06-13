import { t } from "elysia";
import { RequestType } from "../../../../generated/prisma/enums";

export const requestCreateRequest = t.Object({
    title: t.String(),
    request_type: t.Enum(RequestType),
    requester_name: t.String(),
    requester_email: t.String(),
    detail: t.String(),
});

export const resultCreateRequest = t.String({ example: "OK" });

export type RequestCreateRequest = typeof requestCreateRequest.static;
export type ResultCreateRequest = typeof resultCreateRequest.static;