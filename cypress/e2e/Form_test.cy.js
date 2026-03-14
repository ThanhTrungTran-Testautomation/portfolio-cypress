/// <reference types="cypress" />

import FormPage from './pages/FormPage'

describe('Form-Tests', () => {  
  const form = new FormPage()

  beforeEach(() => {    
    cy.fixture('formData').as('form')
  })
    it('Form Submission Test', function () {
    form.visit()
    cy.url().should('include', 'form.html')
    cy.get('[name="firstName"]').should('exist')
    Object.entries(this.form).forEach(([field, value]) => {
      if (field === 'country') {
        form.selectDropdown(field, value)
      } else {
        form.fillField(field, value)
      }
    })
    form.submit()
    form.getSuccessMessage().should('contain.text', 'submitted successfully')
  })
})