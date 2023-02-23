describe('Archivistica Login Test', ()=>{

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica("", "")
    })

    it('TC1: Testing Archivistica Login', ()=>{
        cy.visit("http://192.168.0.227/test_arch/pages/login")
        cy.url().should('contain', "login")
    })
})