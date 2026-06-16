import Elysia from "elysia";
import { authService } from "../service/auth";
import { AuthSchema } from "../schema/auth";
import { authMiddleware } from "../../middleware/auth.middleware";

export const authController = new Elysia({ prefix: "/auth" })
  // Register
  .post(
    "/register",
    async ({ body, set }) => {
      const result = await authService.register(body);
      set.status = 201;
      return result;
    },
    {
      body: AuthSchema.requestRegister,
      detail: {
        summary: "Register new user",
        tags: ["Auth"],
      },
      response: {
        201: AuthSchema.resultRegister,
      },
    }
  )
  // Login
  .post(
    "/login",
    async ({ body }) => {
      return await authService.login(body);
    },
    {
      body: AuthSchema.requestLogin,
      detail: {
        summary: "Login",
        tags: ["Auth"],
      },
      response: {
        200: AuthSchema.resultLogin,
      },
    }
  )
  // Get current user (protected)
  .use(authMiddleware)
  .get(
    "/me",
    ({ user }) => {
      return user;
    },
    {
      detail: {
        summary: "Get current user",
        tags: ["Auth"],
      },
    }
  );
