class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);

    //? It ensures your error object’s stack trace (where the error occurred) is clean and accurate.
  }
}

module.exports = AppError;

//? AppError doesn’t magically fix the error — it just makes the error structured, predictable, and neat so your app can handle it in a consistent way.
