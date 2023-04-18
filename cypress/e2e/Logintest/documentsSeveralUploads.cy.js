describe('Archivistica Login Test', ()=>{
    let name = "Archivo de clasificacion de Prueba";

    beforeEach('Login Archivistica', ()=>{
        cy.LoginArchivistica()
    })

    it.skip('TC1: Get to the web page', ()=>{
        cy.visit("http://domus.dyndns.biz:5555/test_arch/administrator/processes/P001C")
        cy.url().should('contain', "processes")
    })
    it('TC1: Upload documents', ()=>{
        cy.visit("http://domus.dyndns.biz:5555/test_arch/administrator/processes/P001C")
        cy.url().should('contain', "processes")
        cy.wait(2000)
        
        //Get year 2023
        cy.get('.ng-value-container').find('input').eq(2).click()
        cy.get('[id$="-1"]').find('span').click()

        //Get serie
        cy.get('.ng-value-container').find('input').eq(3).click()
        cy.get('[id$="-1"]').find('div').click()
        cy.wait(2000)

        //Get Caja
        cy.get('[class$="p-1"]').find('div').eq(0).click()

        //Get Expediente
        cy.get('[class$="p-1"]').find('div').eq(0).click()

        //Create document
        cy.get('[class$="btn-primary"]').find('span').eq(0).click()

        //Get Date
        cy.get('[class="input-group-text btn bg-light-primary"]').find('i').click()
        cy.get('[class="ngb-dp-day ng-star-inserted"]').find('span').eq(0).click()
        cy.get('[class="btn btn-sm btn-primary float-right"]').click()
        const pdfFiles = 'captura_desde_2023.pdf';
        cy.get('[id$="undefined"]').attachFile(pdfFiles)
        // .attachFile(pdfFiles, { subjectType: 'drag-n-drop' })
        //Guarda el documento
        cy.get('[class="btn btn-primary float-right"]').click()

        })
})