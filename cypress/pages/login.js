



class loginLocators {
    constructor(){
        this.userInput = '[id="loginFrm_loginname"]';
        this.passwordInput = '[type="password"]';
        this.continueBtn = '[title="Login"]';
        this.errorMsg = '[class="alert alert-error alert-danger"]'
    }
}
export default class login {
    constructor(){
        this.locators = new loginLocators();

    }
    getErrorMsg(){
        return cy.get(this.locators.errorMsg)
    }
    getUserInput(){
        return cy.get(this.locators.userInput)
    }
    
    getPassInput(){
        return cy.get(this.locators.passwordInput)
    }

    getLoginBtn(){
        return cy.get(this.locators.continueBtn)
    
  

}
}
