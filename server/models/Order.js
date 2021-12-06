const { Schema } = require('mongoose');

const orderSchema = new Schema ({
    name: {
        type: String,
        required: true, 
    
    description: {
                type: String, 
                required: true, 
    },
    orderId: {
        type: String, 
        required: true, 
    },
    totalPrice: {
        type: Number, 
        required: true, 
        defaule: 0.0,
    },
    isPaid: {
        type: boolean, 
        required: true, 
        defualt: false
    },
    table: {
        number: {type: Number}
    },
    dateAdded: {
        type: Date 
    }
}
})

module.exports = orderSchema; 
