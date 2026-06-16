import "dotenv/config";
import { Elysia } from "elysia";
import { openapi } from "@elysia/openapi";
import { routes } from "./api/app.route";
import { cors } from "@elysia/cors";

const app = new Elysia()
  .use(cors(
    {
      origin: "http://localhost:5174",
    }
  ))
  .use(openapi())
  .use(routes)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
