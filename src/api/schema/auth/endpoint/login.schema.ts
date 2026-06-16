import { t } from "elysia";

export const requestLogin = t.Object({
    username: t.String(),
    password: t.String(),
})

export const resultLogin = t.Object({
    user_id: t.String(),
    username: t.String(),
    first_name: t.String(),
    last_name: t.String(),
    is_active: t.Boolean(),
    created_at: t.Date(),
    updated_at: t.Date(),
});

export type RequestLogin = typeof requestLogin.static;
export type ResultLogin = typeof resultLogin.static;