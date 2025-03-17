

class CartPage {
    elements = {

    cartItems: () => cy.get('.cart_item'),
    removeButton: () => cy.get('.cart_button'),
    
}
visit () {

    cy.visit(process.env.baseUrl + '/cart.html')
    }
    removeItem(index = 0) {
        this.elements.removeButton().eq(index).click()
    }



}

export default CartPage