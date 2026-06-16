import Elysia from "elysia";
import { requestService } from "../service/request";
import { RequestSchema } from "../schema/request";
import { authMiddleware } from "../../middleware/auth.middleware";
import ApiError from "../../error/api.error";
import { customError } from "../../error/custom_error/error_message";

export const requestController = new Elysia({ prefix: "/request" })
  .post(
    "/list",
    async ({ body }) =>
      await requestService.requestsByCriteriaAndPagination({
        page: body.page,
        limit: body.limit,
        criteria: {
          search: body.criteria?.search,
          request_type: body.criteria?.request_type,
        },
      }),
    {
      body: RequestSchema.requestRequestsByCriteriaAndPagination,
      detail: {
        summary: "List Request By Criteria",
        tags: ["Request"],
      },
      response: {
        200: RequestSchema.resultRequestsByCriteriaAndPagination,
      },
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
      detail: {
        summary: "Create Request",
        tags: ["Request"],
      },
      response: {
        200: RequestSchema.resultCreateRequest,
      },
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
      detail: {
        summary: "Update Request",
        tags: ["Request"],
      },
      response: {
        200: RequestSchema.resultUpdateRequest,
      },
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
      detail: {
        summary: "Delete Request",
        tags: ["Request"],
      },
      response: {
        200: RequestSchema.resultDeleteRequest,
      },
    }
  )
  .get(
    "/:request_id",
    async ({ params }) =>
      await requestService.getRequestById({ request_id: params.request_id }),
    {
      detail: {
        summary: "Get Request By ID",
        tags: ["Request"],
      },
      response: {
        200: RequestSchema.resultRequestById,
      },
    }
  )
  // Admin: update request status
  .use(authMiddleware)
  .post(
    "/admin/update-status",
    async ({ body, user }) => {
      if (user.role !== "ADMIN") {
        throw new ApiError(403, customError.FORBIDDEN);
      }
      return await requestService.updateRequestStatus({
        request_id: body.request_id,
        new_status: body.new_status,
        admin_response: body.admin_response,
        changed_by: user.user_id,
      });
    },
    {
      body: RequestSchema.requestUpdateStatus,
      detail: {
        summary: "Admin - Update Request Status",
        tags: ["Request", "Admin"],
      },
      response: {
        200: RequestSchema.resultUpdateStatus,
      },
    }
  );