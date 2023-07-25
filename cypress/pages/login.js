import cypress from "cypress";
import { get } from "cypress/types/lodash";
///<reference types="cypress" />

class loginLocators {
    constructor(){
        this.userInput = '[id="loginFrm_loginname"]';
        this.passwordInput = '[id="loginFrm_password"]';
        this.continueBtn = '[class="btn btn-orange pull-right"]';
    }
}
export default class login {
    constructor(){
        this.locators = new loginLocators();

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
