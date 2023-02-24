
describe('Archivistica Login Test', ()=>{
    let name = "Juan";

    beforeEach('Login Archivistica', ()=>{
        
        cy.LoginArchivistica("test@test.com", "12345678")
    })

    it('TC1: Testing Archivistica Classification', ()=>{
        cy.visit("http://192.168.0.227/test_arch/administrator/classifications")
        cy.url().should('contain', "classifications")
        cy.get('[class="font-medium-3 fas fa-plus-circle"]').click()
        // cy.get('app-user-modal').find('button').eq(1).click()
        cy.get('app-classification-modal').find('input').eq(0).type(name)
        cy.get('app-classification-modal').find('button').eq(2).click()
    })
})