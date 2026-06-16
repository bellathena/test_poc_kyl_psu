import { logger } from "../../../../lib/logger";
import { db } from "../../../../lib/prisma";
import { encryptPassword } from "../../../../utils/encryption";

import ApiError from "../../../../error/api.error";
import { customError } from "../../../../error/custom_error/error_message";

import { repoGenericUser } from "../../../repository/generic/user";

type RequestRegister = {
  username: string;
  password: string;
  fullname: string;
};

type ResultRegister = {
  user_id: string;
  username: string;
  role: "USER" | "ADMIN";
};

export const register = async (
  request: RequestRegister
): Promise<ResultRegister> => {
  const { username, password, fullname } = request;

  // 1. Check if username already exists
  const existingUser = await repoGenericUser.search(db, {
    username,
    is_delete: false,
  });

  if (existingUser) {
    logger.warn({ username }, "Registration failed: username already in use");
    throw new ApiError(409, customError.USERNAME_ALREADY_IN_USE);
  }

  // 2. Hash password
  const password_hash = await encryptPassword(password);

  // 3. Split fullname into first_name and last_name
  const nameParts = fullname.trim().split(" ");
  const first_name = nameParts[0] || "";
  const last_name = nameParts.slice(1).join(" ") || "";

  // 4. Create user
  const user = await repoGenericUser.create(db, {
    username,
    password_hash,
    first_name,
    last_name,
    role: "USER" as const,
  });

  logger.info({ username, user_id: user.user_id }, "User registered successfully");

  return {
    user_id: user.user_id,
    username: user.username,
    role: user.role,
  };
};
