Cypress.Commands.add('spacebar', () => {
  cy.get('body').type(' ');
});
