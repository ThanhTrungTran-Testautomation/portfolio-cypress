// cypress/support/utils.js

/**
 * Utility functions for Cypress E2E tests
 */

const Utils = {

  /**
   * Generate a random string
   * @param {number} length
   * @returns {string}
   */
  randomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  },

  /**
   * Generate a random email address
   * @param {string} domain
   * @returns {string}
   */
  randomEmail(domain = 'example.com') {
    return `${this.randomString(6)}@${domain}`
  },

  /**
   * Get timestamp in format YYYYMMDD_HHMMSS
   * @returns {string}
   */
  timestamp() {
    const now = new Date()
    const pad = (n) => n.toString().padStart(2, '0')
    return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`
  },

  /**
   * Wait for an API response with a specific status code
   * @param {string} url
   * @param {number} status
   * @param {number} timeout
   */
  waitForApi(url, status = 200, timeout = 10000) {
    cy.request({
      url,
      failOnStatusCode: false,
      timeout
    }).then((resp) => {
      expect(resp.status).to.eq(status)
    })
  },

  /**
   * Get environment variable or fallback
   * @param {string} key
   * @param {any} fallback
   * @returns {string}
   */
  getEnv(key, fallback = '') {
    return Cypress.env(key) || fallback
  }
}

export default Utils