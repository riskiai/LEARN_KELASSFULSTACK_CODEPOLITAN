/* MEMBUAT OBJECT ERROR CLASS SENDIRI */

class ErrorHandler extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status
        // this.isOperational = true;
        // Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler