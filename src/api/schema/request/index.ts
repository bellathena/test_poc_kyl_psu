import * as requestByCriteriaAndPaginationSchema from "./endpoints/request_by_criteria_and_pagination.schema";
import * as createRequestSchema from "./endpoints/create.schema";
import * as updateRequestSchema from "./endpoints/update.schema";
import * as deleteRequestSchema from "./endpoints/delete.schema";
import * as requestByIdSchema from "./endpoints/request_by_id.schema";
import * as updateStatusSchema from "./endpoints/update_status.schema";

export namespace RequestSchema {
    //Request by criteria and pagination
    export const requestRequestsByCriteriaAndPagination = 
        requestByCriteriaAndPaginationSchema.requestRequestsByCriteriaAndPagination;
    export const resultRequestsByCriteriaAndPagination =
        requestByCriteriaAndPaginationSchema.resultRequestByCriteriaAndPagination;
    export const criteriaUser = requestByCriteriaAndPaginationSchema.criteriaRequest;

    export type RequestRequestByCriteriaAndPagination =
        requestByCriteriaAndPaginationSchema.RequestRequestByCriteriaAndPagination;
    export type ResultRequestByCriteriaAndPagination =
        requestByCriteriaAndPaginationSchema.ResultRequestByCriteriaAndPagination;
    export type CriteriaRequest = requestByCriteriaAndPaginationSchema.CriteriaRequest;

    // Create request
    export const requestCreateRequest = createRequestSchema.requestCreateRequest;
    export const resultCreateRequest = createRequestSchema.resultCreateRequest;

    export type RequestCreateRequest = createRequestSchema.RequestCreateRequest;
    export type ResultCreateRequest = createRequestSchema.ResultCreateRequest;

    // Update request
    export const requestUpdateRequest = updateRequestSchema.requestUpdateRequest;
    export const resultUpdateRequest = updateRequestSchema.resultUpdateRequest;

    export type RequestUpdateRequest = updateRequestSchema.RequestUpdateRequest;
    export type ResultUpdateRequest = updateRequestSchema.ResultUpdateRequest;

    // Delete request
    export const requestDeleteRequest = deleteRequestSchema.requestDeleteRequest;
    export const resultDeleteRequest = deleteRequestSchema.resultDeleteRequest;

    export type RequestDeleteRequest = deleteRequestSchema.RequestDeleteRequest;
    export type ResultDeleteRequest = deleteRequestSchema.ResultDeleteRequest;

    // Request by ID
    export const requestRequestById = requestByIdSchema.requestRequestById;
    export const resultRequestById = requestByIdSchema.resultRequestById;

    export type RequestRequestById = requestByIdSchema.RequestRequestById;
    export type ResultRequestById = requestByIdSchema.ResultRequestById;

    // Update request status (admin)
    export const requestUpdateStatus = updateStatusSchema.requestUpdateStatus;
    export const resultUpdateStatus = updateStatusSchema.resultUpdateStatus;

    export type RequestUpdateStatus = updateStatusSchema.RequestUpdateStatus;
    export type ResultUpdateStatus = updateStatusSchema.ResultUpdateStatus;
}