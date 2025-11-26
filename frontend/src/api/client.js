import { API_BASE_URL, REQUEST_TIMEOUT } from './config';

/**
 * Generic API client for making HTTP requests
 * All services use this client to communicate with the backend
 */

class APIClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.timeout = REQUEST_TIMEOUT;
  }

  /**
   * Make an HTTP request with JWT auth
   * @param {string} endpoint - API endpoint (e.g., '/auth/login')
   * @param {string} method - HTTP method (GET, POST, PUT, DELETE, PATCH)
   * @param {Object} body - Request body (optional, for POST/PUT/PATCH)
   * @param {Object} headers - Additional headers (optional)
   * @returns {Promise<any>} Response data
   * @throws {Error} Backend error response
   */
  async request(endpoint, method = 'GET', body = null, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...headers,
      },
    };

    // Add body for non-GET requests
    if (body && method !== 'GET') {
      config.body = JSON.stringify(body);
    }

    // Add timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json') 
        ? await response.json() 
        : await response.text();

      if (!response.ok) {
        throw data; // Throw backend error response
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error; // Let the component handle it
    }
  }

  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @param {Object} headers - Additional headers (optional)
   * @returns {Promise<any>}
   */
  get(endpoint, headers = {}) {
    return this.request(endpoint, 'GET', null, headers);
  }

  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {Object} body - Request body
   * @param {Object} headers - Additional headers (optional)
   * @returns {Promise<any>}
   */
  post(endpoint, body, headers = {}) {
    return this.request(endpoint, 'POST', body, headers);
  }

  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {Object} body - Request body
   * @param {Object} headers - Additional headers (optional)
   * @returns {Promise<any>}
   */
  put(endpoint, body, headers = {}) {
    return this.request(endpoint, 'PUT', body, headers);
  }

  /**
   * PATCH request
   * @param {string} endpoint - API endpoint
   * @param {Object} body - Request body
   * @param {Object} headers - Additional headers (optional)
   * @returns {Promise<any>}
   */
  patch(endpoint, body, headers = {}) {
    return this.request(endpoint, 'PATCH', body, headers);
  }

  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @param {Object} headers - Additional headers (optional)
   * @returns {Promise<any>}
   */
  delete(endpoint, headers = {}) {
    return this.request(endpoint, 'DELETE', null, headers);
  }

  /**
   * Get authorization headers (JWT token from localStorage)
   * @returns {Object}
   */
  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

// Export singleton instance
export default new APIClient();