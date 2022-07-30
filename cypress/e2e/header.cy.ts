describe('Creating a message', () => {
    it('Displays the message in the list', () => {
      cy.visit('http://localhost:3000');
      cy.get('div').contains('ANNEA')
    });
  });