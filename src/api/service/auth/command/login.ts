import { logger } from "../../../../lib/logger";
import { jwtUtils } from "../../../../lib/jwt";
import { db } from "../../../../lib/prisma";
import { verifyPassword } from "../../../../utils/encryption";

import ApiError from "../../../../error/api.error";
import { customError } from "../../../../error/custom_error/error_message";

import { repoGenericUser } from "../../../repository/generic/user";

type RequestLogin = {
  username: string;
  password: string;
};

type ResultLogin = {
  access_token: string;
  user: ModelUser;
};

type ModelUser = {
  user_id: string;
  username: string;
  first_name: string;
  last_name: string;
  role: "USER" | "ADMIN";
};

export const login = async (
  request: RequestLogin
): Promise<ResultLogin> => {
  const { username, password } = request;

  // 1. Find User
  const user = await repoGenericUser.search(db, {
    username,
    is_delete: false,
  });

  // 2. User not found
  if (!user) {
    logger.warn(
      { username },
      "Login failed: user not found"
    );

    throw new ApiError(
      401,
      customError.INVALID_CREDENTIALS
    );
  }

  // 3. Check Active
  if (!user.is_active) {
    logger.warn(
      { username },
      "Login failed: user inactive"
    );

    throw new ApiError(
      403,
      customError.FORBIDDEN
    );
  }

  // 4. Verify Password
  const isPasswordValid =
    await verifyPassword(
      password,
      user.password_hash
    );

  if (!isPasswordValid) {
    logger.warn(
      { username },
      "Login failed: invalid password"
    );

    throw new ApiError(
      401,
      customError.INVALID_CREDENTIALS
    );
  }

  // 5. Generate Access Token
  const accessToken =
    jwtUtils.signAccessToken({
      user_id: user.user_id,
      username: user.username,
      role: user.role,
    });

  // 6. Return Result
  return {
    access_token: accessToken,

    user: {
      user_id: user.user_id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
    },
  };
};