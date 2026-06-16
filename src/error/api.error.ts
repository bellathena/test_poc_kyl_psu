import type { CustomErrorEntry } from "./custom_error/error_message";

class ApiError extends Error {
  statusCode: number;
  errorCode: string;
  isOperational: boolean;

  constructor(statusCode: number, entryOrMessage: CustomErrorEntry | string, isOperational = true) {
    const message = typeof entryOrMessage === "string"
      ? entryOrMessage
      : entryOrMessage.message;
    const code = typeof entryOrMessage === "string"
      ? String(statusCode)
      : entryOrMessage.code;

    super(message);
    this.statusCode = statusCode;
    this.errorCode = code;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
