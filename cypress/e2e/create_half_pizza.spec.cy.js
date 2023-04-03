describe('Visit Dodo', () => {
  it('Choose city', () => {
    cy.visit('/');
    cy.contains('Москва').click();
    cy.contains('Пицца').click();
    cy.contains('Пицца из половинок').click();

    // Выбор состава 
    cy.contains('Выберите пиццы для левой и правой половинки').get('div >: first-child').click();
    cy.contains('Аррива!').click();
    cy.get('.sc-1dazsw3-1 dHDRyZ > .button_add_to_cart').click();

  })
})