Cypress.Commands.add('LoginArchivistica', (username, password) => {
    cy.session("Login", ()=>{
        cy.visit('http://192.168.0.227/test_arch/pages/login')
        cy.url().should('contain', 'login')

        cy.fixture("fixtures-demo/Credentials").then((the)=>{
            cy.get(the.username.input).type(the.username.data.valid)
            cy.get(the.password.input).type(the.password.data.valid)
            cy.get(the.SubmitButton).click()
        })

        cy.wait(3000)
        cy.url().should('contain', 'administrator')

    })
})