import { requestsByCriteriaAndPagination } from "./query/request_by_criteria_and_pagination";
import { getRequestById } from "./query/get_request_by_id";
import { createRequest } from "./command/create_request";
import { updateRequest } from "./command/update_request";
import { deleteRequest } from "./command/delete_request";
import { updateRequestStatus } from "./command/update_request_status";

export const requestService = {
    requestsByCriteriaAndPagination,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,
    updateRequestStatus,
}