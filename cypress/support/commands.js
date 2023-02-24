Cypress.Commands.add('LoginArchivistica', () => {
    cy.session("Login", ()=>{
        cy.fixture("fixtures-demo/Credentials").then((credent)=>{
            cy.visit(credent.LoginURL)
            cy.url().should('contain', 'login')
            cy.get(credent.username.input).type(credent.username.data.valid)
            cy.get(credent.password.input).type(credent.password.data.valid)
            cy.get(credent.SubmitButton).click()
        })
        cy.wait(3000)
        cy.url().should('contain', 'administrator')
    })
})