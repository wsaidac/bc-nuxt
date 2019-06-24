describe('Homepage', () => {
  it('should load a basic web structure', () => {
    cy.visit('/');
    cy.get('.header-navbar')
      .should('exist');
    cy.get('.header-banner')
      .should('exist');

    cy.get('.cg-usps')
      .should('exist');

    cy.get('.product-popular')
      .find('.el-row > .el-col')
      .should('have.length.greaterThan', 2); // the common size based on the country is between 3 and 9

    cy.get('.product-quickbuy')
      .should('exist');

    cy.get('.product-featured')
      .find('.product-featured-category')
      .should('have.length.greaterThan', 0);

    cy.get('.service-banner')
      .should('exist');

    cy.get('.rapido-footer')
      .should('exist');
  });
});
