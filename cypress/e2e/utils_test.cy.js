/// <reference types="cypress" />

import Utils from '../support/utils'

describe('⚡ Utils Demonstration', () => {
  it('should generate a random email', () => {
    const email = Utils.randomEmail('portfolio.com')
    cy.log('Generated email: ' + email)
    expect(email).to.match(/@portfolio\.com$/)
  })

  it('should generate a timestamp', () => {
    const ts = Utils.timestamp()
    cy.log('Current timestamp: ' + ts)
    expect(ts).to.match(/\d{8}_\d{6}/)
  })
})