package com.faithcentre.sms.exception;

/**
 * Forbidden Access Exception
 * Thrown when user doesn't have permission to access a resource
 */
public class ForbiddenAccessException extends RuntimeException {
  
  public ForbiddenAccessException(String message) {
    super(message);
  }

  public ForbiddenAccessException(String message, Throwable cause) {
    super(message, cause);
  }
}
