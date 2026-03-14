/// <reference types="cypress" />

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

describe('Dashboard-Tests', () => {

  const loginPage = new LoginPage()
  const dashboard = new DashboardPage()  

  beforeEach(() => {
    cy.fixture('user').as('userData')    
  })

  it('Login and Dashboard Checks', function () {
    loginPage.visit()
    loginPage.fillUsername(this.userData.username)
    loginPage.fillPassword(this.userData.password)
    loginPage.submit()

    //-------------------------------------------
    // Warten bis Dashboard wirklich da ist
    cy.url().should('include', 'dashboard.html')
    cy.get('.welcome-message').should('exist')
    cy.get('#settings-button').should('exist')
    //-------------------------------------------
    
    dashboard.getWelcomeMessage().should('contain.text', this.userData.username)
    dashboard.getWidget('Sales Overview').should('exist')
    dashboard.openSettings()
    cy.url().should('include', '/settings')
  })  

  it('API Integration Check', function () {
    cy.apiGet('/api/dashboard/stats').then((body) => {
      expect(body).to.have.property('totalUsers')
      expect(body.totalUsers).to.be.a('number')
    })
  })  
})