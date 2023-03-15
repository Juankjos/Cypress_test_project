describe('Archivistica Login Test', ()=>{
    let name = "Archivo de clasificacion de Prueba";

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica()
    })

    it('TC1: Testing Archivistica Classification Board: Create Sections and series', ()=>{
        cy.visit("http://domus.dyndns.biz:5555/test_arch/administrator/classifications/63f949ef23e5f6480c80819b")
        cy.url().should('contain', "classifications")
        cy.get('.ng-value-container').find('input').click()

        //Sección
        cy.get('[class="ng-dropdown-panel-items scroll-host"]>div').find('div').eq(0).click()
        cy.get('.content-wrapper').find('h4').click()
        cy.get('[class="row ng-star-inserted"]').find('button').eq(0).click()
        cy.get('[class="col-12 col-md-7"]').find('input').eq(2).type('SECCION Me gusta comer elote')
        cy.get('[class="col-12 col-md-7"]').find('input').eq(3).click()
        cy.get('[class="ng-dropdown-panel-items scroll-host"]>div').find('div').eq(1).click()
        cy.get('[class="col-12 col-md-7"]>div').find('button').eq(1).click()

        // for(let i=0;i>5;i++){
            //Serie
            cy.get('[class="card-body p-2"]>div').find('input').eq(3).type('SERIE Me gusta comer mazorca'+1)
            cy.get('[class="card-body p-2"]>div').find('input').eq(8).type('5')
            cy.get('[class="card-body p-2"]>div').find('button').eq(0).click()
            cy.get('[class="card-body p-2"]>div').find('a').eq(1).click()
            cy.get('[class="card-body p-2"]>div').find('input').eq(9).type('5')
            cy.get('[class="card-body p-2"]>div').find('button').eq(1).click()
            cy.get('[class="card-body p-2"]>div').find('a').eq(5).click()
            cy.get('[class="card-body p-2"]>div').find('textarea').eq(0).type('Complementos a editar'+1)
            cy.get('[class="card-body p-2"]>div').find('button').eq(3).click()
        // }
    })

})