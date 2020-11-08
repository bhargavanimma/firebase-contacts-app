describe('these tests should pass', () => {
  it('should send me hello message', () => {
    cy.visit('http://localhost:3000').contains(/hello/i)
  })
})
