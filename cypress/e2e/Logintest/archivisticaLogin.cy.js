describe('Archivistica Login Test', ()=>{
    let name = "Archivo de clasificacion de Prueba";

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica()
    })

    // it('TC1: Testing Archivistica Classification Board', ()=>{
    //     cy.visit("http://192.168.0.227/test_arch/administrator/classifications")
    //     cy.url().should('contain', "classifications")
        // cy.get('[class="font-medium-3 fas fa-plus-circle"]').click()
        // // cy.get('app-user-modal').find('button').eq(1).click()
        // cy.get('app-classification-modal').find('input').eq(0).type(name)
        // cy.get('app-classification-modal').find('button').eq(3).click()
        // cy.get('app-classification-modal').find('a').eq(0).click()
        // // cy.get('body').then($body =>{
        //     if('[id="toast-container"]'){
        //         cy.get('app-classification-modal').find('button').eq(1).click()
        //         cy.get('[class="swal2-confirm swal2-styled swal2-default-outline"]').click()
        //     }
        // // })
    // })

    it('TC1: Testing Archivistica Classification Board', ()=>{
        cy.visit("http://192.168.0.227/test_arch/administrator/classifications/63f949ef23e5f6480c80819b")
        cy.url().should('contain', "classifications")
        cy.get('.ng-value-container').find('input').click()
        // cy.get('[class="ng-dropdown-panel-items scroll-host"]').find('div').find('div').eq(0).click()
        cy.get('[class="ng-dropdown-panel-items scroll-host"]>div').find('div').eq(0).click()
        cy.get('.content-wrapper').find('h4').click()
        cy.get('[class="row ng-star-inserted"]').find('button').eq(0).click()
        cy.get('[class="col-12 col-md-7"]').find('input').eq(2).type('Me gusta comer elote')
        cy.get('[class="col-12 col-md-7"]').find('input').eq(3).click()
        cy.get('[class="ng-dropdown-panel-items scroll-host"]>div').find('div').eq(1).click()
        // cy.get('[class="ng-dropdown-panel-items scroll-host"]>div').find('div').eq(1)
    })
})