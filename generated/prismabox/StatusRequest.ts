import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const StatusRequest = t.Union(
  [
    t.Literal("PENDING"),
    t.Literal("IN_PROGRESS"),
    t.Literal("RESOLVED"),
    t.Literal("REJECTED"),
  ],
  { additionalProperties: false },
);
