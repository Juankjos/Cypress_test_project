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
        cy.get('.card-body').find('input').eq(5).type('{selectall}{backspace}')
        cy.get('.card-body').find('input').eq(5).click()
        cy.get('[class$="scrollable-content"]').find('div').eq(0).click()
        for(let i=0;i<2;i++){
            cy.get('[class$="scrollable-content"]').find('div').eq(0).click()
        }
        cy.get('.card-body').find('input').eq(8).clear()
        cy.get('.card-body').find('input').eq(8).type('100')
        cy.get('.card-body').find('input').eq(9).clear()
        cy.get('.card-body').find('input').eq(9).type('100')
        cy.get('.card-body').find('button').eq(5)


        // cy.get('[class="ng-dropdown-panel-items scroll-host]').find('div').eq(0).click()
        
    })

})