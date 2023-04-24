class Customer{
    constructor(name,email,shippingAddress){
        this.email = email
        this.shippingAddress = shippingAddress
        this.name = name
        this.orderHistory = []
    }

    addToOrderHistory(Cart){
        this.orderHistory.push(Cart)
    }

}
module.exports = Customer