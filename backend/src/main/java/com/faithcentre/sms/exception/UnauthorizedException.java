package com.faithcentre.sms.exception;

/**
 * Unauthorized Access Exception
 * Thrown when user is not authenticated or token is invalid
 */
public class UnauthorizedException extends RuntimeException {
  
  public UnauthorizedException(String message) {
    super(message);
  }

  public UnauthorizedException(String message, Throwable cause) {
    super(message, cause);
  }
}
