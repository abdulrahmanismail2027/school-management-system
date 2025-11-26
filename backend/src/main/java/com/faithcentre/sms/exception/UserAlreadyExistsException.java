package com.faithcentre.sms.exception;

/**
 * User Already Exists Exception
 * Thrown when attempting to create a user that already exists
 */
public class UserAlreadyExistsException extends RuntimeException {

    public UserAlreadyExistsException(String message) {
        super(message);
    }

    public UserAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }
}
