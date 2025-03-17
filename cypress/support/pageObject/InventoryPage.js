// cypress/support/pageObjects/InventoryPage.js


class InventoryPage {
    elements ={
        inventoryItem: () => cy.get('.inventory_item'),
        addToCartButton: () => cy.get('.btn_inventory'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
        sortDropdown: () => cy.get('[data-test="product-sort-container"]'),



    }

    addItemToCart(index = 0){
        this.elements.addToCartButton().eq(index).click()   
    }
    getItemName(index = 0){
        return this.elements.inventoryItem().eq(index).find('.inventory_item_name')
    }

    sortBy(option){
        this.elements.sortDropdown().select(option)
    }
    verifySorting(order = 'asc') {
        const prices = []
        this.elements.inventoryItem()
            .each($el => prices.push(parseFloat($el.find('.inventory_item_price').text().replace('$', ''))))
            .then(() => {
                const sorted = [...prices].sort((a, b) => order === 'asc' ? a - b : b - a)
                expect(prices).to.deep.equal(sorted)
            })
    }
    }

    export default InventoryPage
