import Elysia from "elysia";
import { requestService } from "../service/request";
import { RequestSchema } from "../schema/request";

export const requestController = new Elysia({prefix:"/request"})
  .post(
    "/list",
    async ({ body }) =>
        await requestService.requestsByCriteriaAndPagination({
            page: body.page,
            limit: body.limit,
            criteria: {
                search: body.criteria?.search,
                request_type: body.criteria?.request_type
            }
        }),
    {
        body: RequestSchema.requestRequestsByCriteriaAndPagination,
        detail:{
            summary:"List Request By Criteria",
            tags:["Request"]
        },
        response:{
            200: RequestSchema.resultRequestsByCriteriaAndPagination
        }
    }

  )