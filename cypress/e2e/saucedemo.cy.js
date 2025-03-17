import LoginPage from "../support/pageObject/LoginPage";
import InventoryPage from "../support/pageObject/InventoryPage";
import CartPage from "../support/pageObject/CartPage";


describe('Sauce Demo Tests', () => {

    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()   
    const cartPage = new CartPage() 
    const validUser = 'standard_user'
    const validPassword = 'secret_sauce'


    context ('Positive Tests', () =>{
        beforeEach(() => {
            loginPage.visit()
            loginPage.login(validUser, validPassword)
        })

        it('should add item and  verify that the item is in the cart', () => {
            inventoryPage.addItemToCart()
            inventoryPage.elements.cartBadge().should('contain', '1')

            inventoryPage.elements.cartBadge().click()
            cartPage.elements.cartItems().should('have.length', 1)

        })

        it('should remove item from the cart and verify',() =>{
            inventoryPage.addItemToCart()
            inventoryPage.elements.cartBadge().click()
            cartPage.removeItem()
            cartPage.elements.cartItems().should('have.length', 0)
            inventoryPage.elements.cartBadge().should('not.exist')


        })

        it('should verify sorting functionality',() =>{
            inventoryPage.sortBy('hilo')
            inventoryPage.verifySorting('desc')
        })
    })

    context('Negative Tests ', () =>{
        it('should display error for invalid login',() => {
            loginPage.visit()
            loginPage.login('invalid_user', 'wrong_password')
            loginPage.elements.errorMessage().should('be.visible')
            .and('contain','Username and password do not match')
        })
    })

})