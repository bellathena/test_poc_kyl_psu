import { t } from "elysia";

export const requestDeleteRequest = t.Object({
    request_id: t.String({format: "uuid"})
});

export const resultDeleteRequest = t.String({ example: "OK" });

export type RequestDeleteRequest = typeof requestDeleteRequest.static;
export type ResultDeleteRequest = typeof resultDeleteRequest.static;