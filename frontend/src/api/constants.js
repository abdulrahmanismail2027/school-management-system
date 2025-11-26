/**
 * API Endpoints and Constants
 * Centralized endpoint definitions for all services
 */

// Authentication endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REGISTER: '/auth/register',
  REFRESH_TOKEN: '/auth/refresh',
  VERIFY_TOKEN: '/auth/verify',
};

// Admin endpoints
export const ADMIN_ENDPOINTS = {
  GET_ALL: '/admin/all',
  GET_BY_ID: (id) => `/admin/${id}`,
  CREATE: '/admin/create',
  UPDATE: (id) => `/admin/${id}`,
  DELETE: (id) => `/admin/${id}`,
};

// Teacher endpoints
export const TEACHER_ENDPOINTS = {
  GET_ALL: '/teacher/all',
  GET_BY_ID: (id) => `/teacher/${id}`,
  CREATE: '/teacher/create',
  UPDATE: (id) => `/teacher/${id}`,
  DELETE: (id) => `/teacher/${id}`,
  GET_BY_TEAM: (teamId) => `/teacher/team/${teamId}`,
};

// Student endpoints
export const STUDENT_ENDPOINTS = {
  GET_ALL: '/student/all',
  GET_BY_ID: (id) => `/student/${id}`,
  CREATE: '/student/create',
  UPDATE: (id) => `/student/${id}`,
  DELETE: (id) => `/student/${id}`,
  GET_BY_TEAM: (teamId) => `/student/team/${teamId}`,
  GET_PHONE: (studentId) => `/student/${studentId}/phone`,
};

// Team endpoints
export const TEAM_ENDPOINTS = {
  GET_ALL: '/team/all',
  GET_BY_ID: (id) => `/team/${id}`,
  CREATE: '/team/create',
  UPDATE: (id) => `/team/${id}`,
  DELETE: (id) => `/team/${id}`,
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection failed. Please check your internet.',
  TIMEOUT_ERROR: 'Request timeout. Please try again.',
  UNAUTHORIZED: 'Unauthorized. Please login again.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  NOT_FOUND: 'Resource not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
};