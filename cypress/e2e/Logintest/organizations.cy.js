describe('Archivistica Login Test', ()=>{
    let name = "Archivo de clasificacion de Prueba";

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica()
    })

    it('TC1: Testing Archivistica Classification Board: Create Sections and series', ()=>{
        cy.visit("http://domus.dyndns.biz:5555/test_arch/administrator/classifications/63f949ef23e5f6480c80819b")
        cy.url().should('contain', "classifications")
        cy.get('.ng-value-container').find('input').click()

    })

})