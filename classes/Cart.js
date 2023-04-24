

class Cart{
    constructor(){
        this.products = []
        this.total = 0

    }
    addProduct(Product){
        this.products.push(Product)
        this.total = this.total + Product.price
    }
    removeProduct(i){
        const product = this.products[i]
        this.products.splice(i,1)
        this.total -= product.price

    }
}
module.exports = Cart

