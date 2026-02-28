// cypress/pages/DashboardPage.js

class DashboardPage {

  visit() {
    cy.visit('/dashboard')
  }

  getWelcomeMessage() {
    return cy.get('.welcome-message')
  }

  openSettings() {
    cy.get('#settings-button').click()
  }

  getWidget(name) {
    return cy.contains('.widget', name)
  }

}

export default DashboardPage