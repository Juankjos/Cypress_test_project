describe('DEPARTMENTS', ()=>{

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica()
    })

    it('TC1: Testing Archivistica Classification Board: Edit Department inputs', ()=>{
        cy.visit("http://domus.dyndns.biz:5555/test_arch/administrator/branches/64110b73805c4b9b333ca9f7")
        cy.url().should('contain', "branches")
        cy.get('.card-body').find('input').eq(1).type('Río Ramiro #191')
        cy.get('.card-body').find('input').eq(2).type('3787885521')
        cy.get('.card-body').find('input').eq(3).type('prueba_aqui_sirve@gmail.com')
        cy.get('.card-body').find('input').eq(4).click()
        // cy.get('[class="ng-dropdown-panel-items scroll-host]').find('div').eq(0).click()
        
    })

})