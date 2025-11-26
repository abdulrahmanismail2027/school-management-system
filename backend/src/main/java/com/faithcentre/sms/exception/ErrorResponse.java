package com.faithcentre.sms.exception;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

/**
 * Error Response DTO
 * Standard error response format for API
 */

@Setter
@Getter
public class ErrorResponse {
    // Getters and setters
    private int status;
    private String message;
    private LocalDateTime timestamp;

    public ErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now();
    }
}
