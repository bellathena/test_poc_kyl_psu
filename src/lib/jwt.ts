import * as jwt from "jsonwebtoken";

export interface AccessTokenPayload {
  user_id: string;
  username: string;
  role: string;
}

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "default-secret";
const ACCESS_TOKEN_EXPIRES_IN = parseInt(process.env.ACCESS_TOKEN_EXPIRES_IN || "86400");

export const jwtUtils = {
  /**
   * Generate Access Token
   */
  signAccessToken: (
    payload: AccessTokenPayload,
    expiresIn?: number
  ): string => {
    const expires = expiresIn ?? ACCESS_TOKEN_EXPIRES_IN;

    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      expiresIn: expires,
    } as jwt.SignOptions);
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
        ACCESS_TOKEN_SECRET
      ) as AccessTokenPayload;
    } catch {
      return null;
    }
  },
};