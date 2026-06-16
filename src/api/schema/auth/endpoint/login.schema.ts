import { t } from "elysia";
import { UserRole } from "../../../../generated/prisma/enums";

export const requestLogin = t.Object({
    username: t.String(),
    password: t.String(),
})

export const resultLogin = t.Object({
    access_token: t.String(),
    user: t.Object({
        user_id: t.String(),
        username: t.String(),
        first_name: t.String(),
        last_name: t.String(),
        role: t.Enum(UserRole),
    }),
});

export type RequestLogin = typeof requestLogin.static;
export type ResultLogin = typeof resultLogin.static;