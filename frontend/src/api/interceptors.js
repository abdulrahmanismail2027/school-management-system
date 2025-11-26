/**
 * Request/Response Interceptors
 * Handles authentication, error handling, and response formatting
 */

/**
 * Request interceptor
 * Adds authentication tokens and custom headers
 */
export const requestInterceptor = (config) => {
  const token = localStorage.getItem('authToken');
  
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
};

/**
 * Response interceptor
 * Handles errors and formats responses
 */
export const responseInterceptor = (response) => {
  return response;
};

/**
 * Error interceptor
 * Handles API errors globally
 */
export const errorInterceptor = (error) => {
  if (error.status === 401) {
    // Clear token and redirect to login
    localStorage.removeItem('authToken');
    window.location.href = '/auth/login';
  }

  if (error.status === 403) {
    console.warn('Access forbidden');
  }

  if (error.status === 'TIMEOUT') {
    console.error('Request timeout');
  }

  if (error.status === 'NETWORK_ERROR') {
    console.error('Network error occurred');
  }

  throw error;
};

/**
 * Setup interceptors for the API client
 * @param {Object} client - API client instance
 */
export const setupInterceptors = (client) => {
  // Store original request method
  const originalRequest = client.request.bind(client);

  // Wrap request with interceptor
  client.request = async (endpoint, method, body, headers) => {
    const config = {
      headers: headers || {},
    };

    // Apply request interceptor
    requestInterceptor(config);

    try {
      // Make request with intercepted config
      const response = await originalRequest(endpoint, method, body, config.headers);
      
      // Apply response interceptor
      return responseInterceptor(response);
    } catch (error) {
      // Apply error interceptor
      return errorInterceptor(error);
    }
  };
};