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
  .post(
    "/create",
    async ({ body }) => {
        await requestService.createRequest(body);
        return "OK";
    },
    {
        body: RequestSchema.requestCreateRequest,
        detail:{
            summary:"Create Request",
            tags:["Request"]
        },
        response:{
            200: RequestSchema.resultCreateRequest
        }
    }
  )
  .post(
    "/update",
    async ({ body }) => {
        await requestService.updateRequest(body);
        return "OK";
    },
    {
        body: RequestSchema.requestUpdateRequest,
        detail:{
            summary:"Update Request",
            tags:["Request"]
        },
        response:{
            200: RequestSchema.resultUpdateRequest
        }
    }
  )
  .post(
    "/delete",
    async ({ body }) => {
        await requestService.deleteRequest(body);
        return "OK";
    },
    {
        body: RequestSchema.requestDeleteRequest,
        detail:{
            summary:"Delete Request",
            tags:["Request"]
        },
        response:{
            200: RequestSchema.resultDeleteRequest
        }
    }
  )
  .get(
    "/:request_id",
    async ({ params }) =>
        await requestService.getRequestById({ request_id: params.request_id }),
    {
        detail:{
            summary:"Get Request By ID",
            tags:["Request"]
        },
        response:{
            200: RequestSchema.resultRequestById
        }
    }
  )