const pause_2 = Cypress.env('pause_2')
//const pause = Cypress.env('pause_2')
describe('Registration Functionality', function() {
    it('Visits The Site', function() {
      cy.visit('https://magento.softwaretestingboard.com') 
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      
      cy.wait(pause_2)
      cy.get('.panel > .header > :nth-child(3) > a').click()
      cy.wait(pause_2)
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.wait(pause_2)
      cy.reload()
      cy.wait(pause_2)
      cy.get('#firstname').type('Test').should('have.value', 'Test')
      cy.wait(pause_2)
      cy.get('#lastname').type('User').should('have.value', 'User')
      cy.wait(pause_2)
      cy.get('#is_subscribed').check()
      cy.wait(pause_2)
      cy.get('#email_address').type('cypress.test.user09@gmail.com').should('have.value', 'cypress.test.user09@gmail.com')
      cy.wait(pause_2)
      cy.get('#password').type('Aa123456@').should('have.value', 'Aa123456@')
      cy.wait(pause_2)
      cy.get('#password-confirmation').type('Aa123456@').should('have.value', 'Aa123456@')
      cy.wait(pause_2)
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()


    })
})