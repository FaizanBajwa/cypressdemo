describe('test case for demo',()=>{
    it('test 1',()=>{
        cy.visit("https://learn.cypress.io/advanced-cypress-concepts/integration-and-api-tests")
        cy.url().should('include', 'api')

    })
})
