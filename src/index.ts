import { Elysia } from "elysia";
import { openapi } from "@elysia/openapi";
import { routes } from "./api/app.route";

const app = new Elysia()
  .use(openapi())
  .use(routes)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
