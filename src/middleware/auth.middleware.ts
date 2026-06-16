import Elysia from "elysia";
import ApiError from "../error/api.error";
import { customError } from "../error/custom_error/error_message";
import { jwtUtils } from "../lib/jwt";
import { UserRole } from "../generated/prisma/enums";

export type UserPayload = {
  user_id: string;
  username: string;
  role: UserRole;
};

export const authMiddleware = new Elysia({ name: "auth" }).derive(
  { as: "scoped" },
  ({ request }) => {
    const authHeader = request.headers.get("authorization");

    // ตรวจสอบว่ามี Authorization header และขึ้นต้นด้วย "Bearer "
    if (!authHeader?.startsWith("Bearer ")) {
      throw new ApiError(401, customError.UNAUTHORIZED);
    }

    const token = authHeader.replace("Bearer ", "");
    const payload = jwtUtils.verifyAccessToken(token);

    // ตรวจสอบว่า token ถูกต้อง
    if (!payload) {
      throw new ApiError(401, customError.TOKEN_INVALID);
    }

    return {
      user: payload as UserPayload,
    };
  },
);
