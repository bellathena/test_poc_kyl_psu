import { requestsByCriteriaAndPagination } from "./query/request_by_criteria_and_pagination";
import { createRequest } from "./command/create_request";
import { updateRequest } from "./command/update_request";
import { deleteRequest } from "./command/delete_request";

export const requestService = {
    requestsByCriteriaAndPagination,
    createRequest,
    updateRequest,
    deleteRequest
}