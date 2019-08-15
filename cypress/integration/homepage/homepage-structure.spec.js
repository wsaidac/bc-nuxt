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

  describe('-> navigation', () => {
    it('should navigate to `sessions/login` if "account" button is clicked and customer is not logged', () => {
      cy.visit('/en-us/');
      cy.get('.header-login').should('exist')
      cy.get('.header-login').first().click()
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/en-us/sessions/login')
      })
    })

    it('should change the locale if another country is selected', () => {
      cy.visit('/en-us/');
      cy.wait(1000) // wait for client side / javscript first exec

      // click country select button
      cy.get('.header-navbar__country-select').click()

      // click dropdown selector for open countries list
      cy.get('.el-dialog')
        .find('.el-dialog__body')
        .find('.el-select')
        .first()
        .click()

      // click over the last country in the dropdown for select it
      cy.get('.el-select-dropdown__wrap')
        .find('.el-select-dropdown__item')
        .last()
        .click()

      // click confirmation button
      cy.get('.header-locale-select__button')
        .click()

      cy.location().should((loc) => {
        // expect than the pathname should be different to the default
        expect(loc.pathname).to.not.eq('/en-us/')
      })
    })

    it('should navigate to the first popular product', () => {
      cy.visit('/en-us/');
      // get first popular product item selector
      cy.get('.product-popular__item')
        .first()
        .then($item => {
          cy.checkLinkNavigation($item)
        })
    })

    it('should navigate to the first product of the first category', () => {
      cy.visit('/en-us/')

      // get the first product of the first category and assign it the alias '@category'
      cy.get('.product-featured-category')
        .first()
        .find('.product-featured-category__item')
        .first()
        .then($category => {
          cy.checkLinkNavigation($category)
        })
    })
  })
});
