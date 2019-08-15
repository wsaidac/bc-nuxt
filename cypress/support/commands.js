// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('checkLinkNavigation', ($el) => {
  // wrap the DOM element
  cy.wrap($el)
    .should('have.attr', 'href')
    .then(href => {
      cy.wrap($el)
        .click() // click the link element

      cy.location()
        .should((loc) => {
          // expect than after click over $el the navigator pathname should be equal to 'href' assigned to $el
          expect(loc.pathname).to.eq(href)
        })
    })
})
