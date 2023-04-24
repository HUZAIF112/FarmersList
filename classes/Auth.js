const Customer = require("./Customer")

class Auth{
    constructor(){
        this.customers = []
    }
    register(name,email,shippingAddress){
         const Customer = {
            name: name,
            email: email,
            shippingAddress: shippingAddress

    }

        this.customers.push(Customer)
    }
    login(email){
        for(let i = 0;i < this.customers.length;i++){
            if(this.customers[i].email == email){
                return this.customers[i]
            } else{
                return null
            }
        }

    }

}

module.exports = Auth
