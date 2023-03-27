const pause_2 = Cypress.env('pause_2')
//const pause = Cypress.env('pause_2')
describe('Registration Functionality', function() {
    it('Visits The Site', function() {
      cy.visit('https://magento.softwaretestingboard.com') 
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      
      cy.wait(pause_2)
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.wait(pause_2)
      /*cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.wait(pause_2)
      cy.reload()
      cy.wait(pause_2)
      cy.get('#email').type('roni_cost@example.com').should('have.value', 'roni_cost@example.com')
      cy.wait(pause_2)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.wait(pause_2)
      cy.reload()
      cy.wait(pause_2)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('roni_cost3@example.com').should('have.value', 'roni_cost3@example.com')
      cy.wait(pause_2)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.wait(pause_2)
      cy.reload()
      cy.wait(pause_2)*/
      cy.get('#email').type('roni_cost@example.com').should('have.value', 'roni_cost@example.com')
      cy.wait(pause_2)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('roni_cost3@example.com').should('have.value', 'roni_cost3@example.com')
      cy.wait(pause_2)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
      cy.get('#captcha-container-user_login > .control > .captcha-img').then((captchaImg) => {
        // Now you will have the captcha image itself
        const body = { captchaImg } // prepare the body to send to the 3rd party API
        cy.request('POST', 'https://magento.softwaretestingboard.com/pub/media/captcha/base/19529d9cf487f2eebef1c1daa33fbb65.png', body).then((response) => {
            // Process the response to extract the field that you are interested in
            // For instance, you could pull out the string '55+20='
            let captchaText = getCaptchaText(response.body)
            let captchaAnswer = getCaptchaAnswer(captchaText)
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .captcha.required > .control.captcha > #captcha_user_login').type(captchaAnswer)
            // You will probably need to click a submit button
    
        })
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()



    })

})
})