package com.faithcentre.sms.exception;

import lombok.Getter;

/**
 * Resource Not Found Exception
 * Thrown when a requested resource is not found
 */
@Getter
public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
