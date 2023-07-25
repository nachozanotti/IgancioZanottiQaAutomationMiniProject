import loginPage from '../pages/login'
describe('acceso a una cuenta de automation test store', () => {

  beforeEach(() => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
      })

  it('exito', () => {
    const usuario = new loginPage();
    const pass = new loginPage();
    const btnLogin = new loginPage();
   
   
    usuario.getUserInput().type('nachozanotti');
    pass.getPassInput().type('Nacho1996');
    btnLogin.getLoginBtn().click();
  })
  it('Fracaso', () => {
    const usuario = new loginPage();
    const pass = new loginPage();
    const btnLogin = new loginPage();
    const errorMsg = new loginPage();
   
    usuario.getUserInput().type('nachozanotti');
    pass.getPassInput().type('VamosDicsys');
    btnLogin.getLoginBtn().click();
    errorMsg.getErrorMsg().should('exist')
  })

})