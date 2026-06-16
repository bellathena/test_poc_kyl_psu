import Elysia from "elysia";
import { requestController } from "./controller/request.controller";
import { authController } from "./controller/auth.controller";

export const routes = new Elysia()

.group("/api/v1", (app) =>
    app.use(authController).use(requestController)
);