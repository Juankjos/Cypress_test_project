describe('Archivistica Login Test', ()=>{
    let name = "Juanet";

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica()
    })

    it('TC1: Testing Archivistica Classification', ()=>{
        cy.visit("http://192.168.0.227/test_arch/administrator/classifications")
        cy.url().should('contain', "classifications")
        cy.get('[class="font-medium-3 fas fa-plus-circle"]').click()
        // cy.get('app-user-modal').find('button').eq(1).click()
        cy.get('app-classification-modal').find('input').eq(0).type(name)
        cy.get('app-classification-modal').find('button').eq(3).click()
        cy.get('app-classification-modal').find('a').eq(0).click()

        // if('[id="toast-container"]'){
        //     cy.get('app-classification-modal').find('button').eq(1).click()
        //     cy.get('[aria-labelledby="swal2-title"]').find('button').eq(0).click()
        // }
        // cy.get('.row').find('[strong="Janet"]').eq(0).click()
    })
})