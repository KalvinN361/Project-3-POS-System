const { Schema } = require('mongoose');

const orderSchema = new Schema ({
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String, 
        required: true, 
    },
    orderId: {
        type: String, 
        required: true, 
    },
    image: {
        type: String,
    }
})

module.export = orderSchema