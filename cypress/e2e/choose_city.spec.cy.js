describe('Visit Dodo', () => {
  it('Choose city', () => {
    cy.visit('/');
    cy.contains('Москва').click();
  })
})