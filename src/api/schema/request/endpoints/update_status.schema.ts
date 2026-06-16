import { t } from "elysia";

export const requestUpdateStatus = t.Object({
  request_id: t.String(),
  new_status: t.Union(
    [
      t.Literal("PENDING"),
      t.Literal("IN_PROGRESS"),
      t.Literal("RESOLVED"),
      t.Literal("REJECTED"),
    ],
    { additionalProperties: false }
  ),
  admin_response: t.Optional(t.String()),
});

export const resultUpdateStatus = t.Object({
  request_id: t.String(),
  old_status: t.String(),
  new_status: t.String(),
  admin_response: t.Nullable(t.String()),
});

export type RequestUpdateStatus = typeof requestUpdateStatus.static;
export type ResultUpdateStatus = typeof resultUpdateStatus.static;
