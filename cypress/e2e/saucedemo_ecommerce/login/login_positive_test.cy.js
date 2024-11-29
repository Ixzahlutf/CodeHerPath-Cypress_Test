import { LoginPage } from "../../../support/pages/login_page/login_page.cy.js"

let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
})

describe('Login Page', { testIsolation:true}, () => {
        it('Login with valid username and password', () => {
           loginPage.fillUsername(Cypress.env('saucelab_username'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess()
        })

        it('Login with valid username locked out user and password', () => {
            loginPage.fillUsername(Cypress.env('saucelab_username_lockedout'))
            loginPage.fillPassword(Cypress.env('saucelab_password'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateAlertErrorLogin("Epic sadface: Sorry, this user has been locked out.")
        })

        it('Login with valid username and invalid password', () => {
            loginPage.fillUsername(Cypress.env('saucelab_username2'))
            loginPage.fillPassword(Cypress.env('saucelab_password_invalid'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateAlertErrorLogin("Epic sadface: Username and password do not match any user in this service")
        })

        it('Login with invalid username and invalid password', () => {
            loginPage.fillUsername(Cypress.env('saucelab_username_invalid'))
            loginPage.fillPassword(Cypress.env('saucelab_password_invalid2'))
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateAlertErrorLogin("Epic sadface: Username and password do not match any user in this service")
        })

        it('Login without filling in the username and password ', () => {
            loginPage.clickLogin()
            cy.wait(3000)
            loginPage.validateAlertErrorLogin("Epic sadface: Username is required")
        })
})