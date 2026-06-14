import Elysia from "elysia";
import { requestController } from "./controller/request.controller";

export const routes = new Elysia()

.group("/api/v1", (app) => 
    app.use(requestController)
);