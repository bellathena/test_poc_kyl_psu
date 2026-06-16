import { t } from "elysia";
import { UserRole } from "../../../../generated/prisma/enums";

export const requestRegister = t.Object({
  username: t.String({ minLength: 3 }),
  password: t.String({ minLength: 8 }),
  fullname: t.String(),
});

export const resultRegister = t.Object({
  user_id: t.String(),
  username: t.String(),
  role: t.Enum(UserRole),
});

// Types
export type RequestRegister = typeof requestRegister.static;
export type ResultRegister = typeof resultRegister.static;