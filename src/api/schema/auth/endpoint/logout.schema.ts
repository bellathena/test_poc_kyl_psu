import { t } from "elysia";

export const requestLogout = t.Object({});

export const resultLogout = t.Object({
  message: t.String(),
});

export type RequestLogout = typeof requestLogout.static;
export type ResultLogout = typeof resultLogout.static;