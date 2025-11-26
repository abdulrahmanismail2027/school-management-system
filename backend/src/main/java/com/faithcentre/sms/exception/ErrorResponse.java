package com.faithcentre.sms.exception;

import java.time.LocalDateTime;

/**
 * Error Response DTO
 * Standard error response format for API
 */
public class ErrorResponse {
  
  private int status;
  private String message;
  private String error;
  private LocalDateTime timestamp;
  private String path;

  public ErrorResponse(int status, String message, String error, String path) {
    this.status = status;
    this.message = message;
    this.error = error;
    this.timestamp = LocalDateTime.now();
    this.path = path;
  }

  // Getters and setters
  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }

  public LocalDateTime getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
  }

  public String getPath() {
    return path;
  }

  public void setPath(String path) {
    this.path = path;
  }
}
