describe('Delay Test', () => {


it('Wait for 10 seconds', () =>{

cy.visit('https://www.google.com');

cy.get('#L2AGLb').click();

cy.wait(10000);

cy.get('.gLFyf').type('10 seconds have passed');

cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();

})


})