import * as loginSchema from "./endpoint/login.schema";
import * as registerSchema from "./endpoint/register.schema";
import * as logoutSchema from "./endpoint/logout.schema";

export namespace AuthSchema {
    // Login
    export const requestLogin = loginSchema.requestLogin;
    export const resultLogin = loginSchema.resultLogin;

    export type RequestLogin = loginSchema.RequestLogin;
    export type ResultLogin = loginSchema.ResultLogin;

    // Register
    export const requestRegister = registerSchema.requestRegister;
    export const resultRegister = registerSchema.resultRegister;

    export type RequestRegister = registerSchema.RequestRegister;
    export type ResultRegister = registerSchema.ResultRegister;

    // Logout
    export const requestLogout = logoutSchema.requestLogout;
    export const resultLogout = logoutSchema.resultLogout;

    export type RequestLogout = logoutSchema.RequestLogout;
    export type ResultLogout = logoutSchema.ResultLogout;
}