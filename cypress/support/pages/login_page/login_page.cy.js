import login from "../../../support/selectors/login_element.js"

export class LoginPage {
    navigateLoginPage() {
        const urlSauceDemo = Cypress.env('base_url');
        cy.log(urlSauceDemo);
        cy.visit(urlSauceDemo)
    }

    fillUsername(dataEmail) {
        const validateEmail = cy.xpath(login.fieldUsername).as('fieldEmail')
        validateEmail.type(dataEmail)
    }

    fillPassword(dataPassword) {
        const validatePassword = cy.xpath(login.fieldPassword).as('fieldPassword')
        validatePassword.type(dataPassword)
    }

    clickLogin() {
        const buttonLogin = cy.xpath(login.btnLogin).as('buttonLogin')
        buttonLogin.click()
    }

    validateLoginSuccess() {
        cy.get(login.productList).should('be.visible')
     }

     validateAlertErrorLogin(pesanError){
        const alertUser = cy.get(login.alertErrorLogin).as('alertUser')
        alertUser.should('be.visible').contains(pesanError)
     }
}