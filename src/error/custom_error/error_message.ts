import { authError } from "./1_auth";

export const customError = {
  ...authError,
} as const;

export type CustomErrorEntry = {
  code: string;
  message: string;
};
