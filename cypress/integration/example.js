describe('Example', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Homepage', () => {
    it('should render', () => {
      cy.get('h1').should('be.visible');
    });
  });
});
