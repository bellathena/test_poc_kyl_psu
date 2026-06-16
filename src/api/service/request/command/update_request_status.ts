import { db } from "../../../../lib/prisma";
import { logger } from "../../../../lib/logger";
import { repoGenericRequest } from "../../../repository/generic/request";
import { StatusRequest } from "../../../../generated/prisma/client";

type ModelUpdateRequestStatus = {
  request_id: string;
  new_status: StatusRequest;
  admin_response?: string;
  changed_by?: string;
};

export const updateRequestStatus = async (body: ModelUpdateRequestStatus) => {
  const { request_id, new_status, admin_response, changed_by } = body;

  // 1. Find current request
  const request = await repoGenericRequest.search(db, {
    request_id,
    is_delete: false,
  });

  if (!request) {
    throw new Error("Request not found");
  }

  const old_status = request.status;

  // 2. Update request status and admin response
  const updatedData: Record<string, unknown> = {
    status: new_status,
  };
  if (admin_response !== undefined) {
    updatedData.admin_response = admin_response;
  }

  await repoGenericRequest.update(db, { request_id }, updatedData);

  // 3. Create status history record
  await db.requestStatusHistory.create({
    data: {
      request_id,
      old_status,
      new_status,
      changed_by: changed_by || null,
      remark: admin_response || null,
    },
  });

  logger.info(
    { request_id, old_status, new_status, changed_by },
    "Request status updated"
  );

  return {
    request_id,
    old_status,
    new_status,
    admin_response: admin_response || null,
  };
};
