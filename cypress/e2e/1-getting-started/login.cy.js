import loginPage from '../../pages/login'



describe('login basico', () => {
    beforeEach(() => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login')
    })
})

it('logueo valido', () => {
    const usuario = new loginPage();
    const pass = new loginPage();
    const btnLogin = new loginPage();
   
    usuario.getUserInput().type('nachozanotti');
    pass.getUserInput().type('Nacho1996');
    btnLogin.getUserInput().click();

   })
