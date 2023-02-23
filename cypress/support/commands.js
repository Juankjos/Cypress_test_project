Cypress.Commands.add('LoginArchivistica', (username, password) => {
    cy.session("Login", ()=>{
        cy.visit('http://192.168.0.227/test_arch/pages/login')
        cy.url().should('contain', 'login')

        //Session Start
        cy.get('[formcontrolname="username"]').type(username)
        cy.get('[formcontrolname="password"]').type(password)
        cy.get('[class="btn btn-primary"]').click()
    })
})