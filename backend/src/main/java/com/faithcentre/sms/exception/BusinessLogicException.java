package com.faithcentre.sms.exception;

/**
 * Business Logic Exception
 * Thrown when a business logic constraint is violated
 */
public class BusinessLogicException extends RuntimeException {
  
  public BusinessLogicException(String message) {
    super(message);
  }

  public BusinessLogicException(String message, Throwable cause) {
    super(message, cause);
  }
}
