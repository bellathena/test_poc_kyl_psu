import * as jwt from "jsonwebtoken";
import { env } from "@config/env";

export interface AccessTokenPayload {
  user_id: string;
  username: string;
  role: string;
}

export const jwtUtils = {
  /**
   * Generate Access Token
   */
  signAccessToken: (
    payload: AccessTokenPayload,
    expiresIn?: number
  ): string => {
    const expires =
      expiresIn ??
      parseInt(env.ACCESS_TOKEN_EXPIRES_IN);

    return jwt.sign(
      payload,
      env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: expires,
      } as jwt.SignOptions
    );
  },

  /**
   * Verify Access Token
   */
  verifyAccessToken: (
    token: string
  ): AccessTokenPayload | null => {
    try {
      return jwt.verify(
        token,
        env.ACCESS_TOKEN_SECRET
      ) as AccessTokenPayload;
    } catch {
      return null;
    }
  },
};