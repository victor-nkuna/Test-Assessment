// cypress /support /pageObjects/LoginPage.js

class LoginPage{
    elements ={
        usernameInput: () =>cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage:   () => cy.get('[data-test="error"]')
       
    }

    visit() {
        cy.visit('https://www.saucedemo.com/')
    }


    login(username, password){
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }
}

export default LoginPage