// Auth service error codes: 1001 - 1099
export const authError = {
    USERNAME_ALREADY_IN_USE: { code: "1001", message: "Username already in use" },
    INVALID_CREDENTIALS: { code: "1002", message: "Invalid email or password" },
    UNAUTHORIZED: { code: "1003", message: "Unauthorized" },
    REGISTRATION_FAILED: {
        code: "1004",
        message: "Registration failed, please try again",
    },
    FORBIDDEN: { code: "1005", message: "You do not have permission to access this resource" },
    TOKEN_INVALID: { code: "1006", message: "Token is invalid" },
} as const;

export type AuthErrorKey = keyof typeof authError;
export type AuthErrorEntry = (typeof authError)[AuthErrorKey];
